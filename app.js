/**
 * OhmSpace — motor unic: navigare, misiuni, validare, UI.
 */
(function () {
  "use strict";

  var lang = "ro";
  var state = {
    screen: "splash",
    missionId: 1,
    pickLevel: 1,
    part: null,
    pick: null,
    potR: 0,
    filter: "toate",
    progress: { 1: false, 2: false, 3: false, 4: false, 5: false },
    books: { tehnic: { p: 0, open: false }, jurnal: { p: 0, open: false } },
    draw: { on: false, tool: "pen", lx: 0, ly: 0 },
    winId: 1
  };

  var $ = {};
  var ctxDraw;

  function t(k) {
    var d = translations[lang];
    return d && d[k] !== undefined ? d[k] : k;
  }

  function L(o) {
    return o && (o[lang] || o.ro || "");
  }

  function mission(id) {
    var i, list = missionsData || [];
    for (i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return list[i];
      }
    }
    return null;
  }

  function errMsg(m, key) {
    var e = m.errors[key] || m.errors.default;
    return L(e);
  }

  function qs(sel) {
    return document.querySelector(sel);
  }

  function showScreen(name) {
    state.screen = name;
    document.querySelectorAll(".ecran").forEach(function (el) {
      el.classList.toggle("hidden", el.id !== "ecran-" + name);
    });
  }

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.documentElement.lang = lang === "en" ? "en" : "ro";
    var sel = document.getElementById("select-limba");
    if (sel) {
      sel.value = lang;
    }
  }

  function mountSprites() {
    document.querySelectorAll("[data-sprite]").forEach(function (el) {
      var key = el.getAttribute("data-sprite");
      var box = el.querySelector(".sprite-inventar") || el;
      if (componentSprites[key]) {
        box.innerHTML = componentSprites[key];
      }
    });
  }

  function renderLevelCards() {
    var box = document.getElementById("lista-niveluri");
    if (!box) {
      return;
    }
    box.innerHTML = missionsData
      .map(function (m) {
        var done = state.progress[m.id] ? " completat" : "";
        var act = m.id === state.pickLevel ? " activ" : "";
        return (
          '<button type="button" class="card-nivel' +
          act +
          done +
          '" data-nivel="' +
          m.id +
          '">' +
          '<span class="card-nivel-num">' +
          String(m.id).padStart(2, "0") +
          "</span>" +
          '<span class="card-nivel-info"><span class="card-nivel-titlu">' +
          L(m.title) +
          '</span><span class="card-nivel-desc">' +
          L(m.menuDesc) +
          "</span></span></button>"
        );
      })
      .join("");
    box.querySelectorAll(".card-nivel").forEach(function (btn) {
      btn.onclick = function () {
        box.querySelectorAll(".card-nivel").forEach(function (b) {
          b.classList.remove("activ");
        });
        btn.classList.add("activ");
        state.pickLevel = parseInt(btn.getAttribute("data-nivel"), 10);
      };
    });
  }

  function renderInventory() {
    var box = document.getElementById("lista-inventar");
    if (!box) {
      return;
    }
    box.innerHTML = inventoryParts
      .map(function (p) {
        var ori = p.orientare ? ' data-orientare="' + p.orientare + '"' : "";
        return (
          '<button type="button" class="piesa-inventar" draggable="true" data-categorie="' +
          p.cat +
          '" data-tip="' +
          p.tip +
          '" data-val="' +
          p.val +
          '" data-sprite="' +
          p.sprite +
          '"' +
          ori +
          '><span class="sprite-inventar"></span><span class="eticheta-piesa" data-i18n="' +
          p.labelKey +
          '"></span></button>'
        );
      })
      .join("");
    mountSprites();
    applyI18n();
    bindInventory();
  }

  function partFromEl(el) {
    var v = el.getAttribute("data-val");
    return {
      tip: el.getAttribute("data-tip"),
      val: v && v.indexOf(".") >= 0 ? parseFloat(v) : parseInt(v, 10),
      sprite: el.getAttribute("data-sprite"),
      orientare: el.getAttribute("data-orientare") || null
    };
  }

  function filterInventory(cat) {
    state.filter = cat;
    document.querySelectorAll(".filtru-inventar").forEach(function (b) {
      b.classList.toggle("activ", b.getAttribute("data-filtru") === cat);
    });
    document.querySelectorAll(".piesa-inventar").forEach(function (p) {
      var catOk = cat === "toate" || p.getAttribute("data-categorie") === cat;
      var m = mission(state.missionId);
      var hidePot = p.getAttribute("data-tip") === "potentiometer" && m && m.type !== "potentiometer";
      p.classList.toggle("hidden", !catOk || hidePot);
    });
  }

  function putSprite(node, key) {
    if (node && componentSprites[key]) {
      node.innerHTML = componentSprites[key];
    }
  }

  function clearSlot() {
    state.part = null;
    hidePotPanel();
    if ($.slotContent) {
      $.slotContent.innerHTML = '<span class="text-slot-label">' + t("slotGol") + "</span>";
    }
    if ($.slot) {
      $.slot.classList.remove("montat", "slot-hover");
      $.slot.classList.add("pulse-anim");
    }
  }

  function hidePotPanel() {
    if ($.potPanel) {
      $.potPanel.classList.add("hidden");
      $.potPanel.setAttribute("aria-hidden", "true");
    }
    if ($.potSlider) {
      $.potSlider.value = "0";
    }
    state.potR = 0;
    updatePotLabel();
  }

  function showPotPanel() {
    if ($.potPanel) {
      $.potPanel.classList.remove("hidden");
      $.potPanel.setAttribute("aria-hidden", "false");
    }
    if ($.potSlider) {
      $.potSlider.value = "0";
    }
    state.potR = 0;
    updatePotLabel();
    if ($.slot) {
      $.slot.classList.add("slot-potentiometru");
    }
  }

  function updatePotLabel() {
    if ($.potLive) {
      $.potLive.textContent = t("rezistentaLivePrefix") + " " + state.potR + " Ω";
    }
  }

  function mountPart(data) {
    if (!data || !data.tip) {
      return;
    }
    var m = mission(state.missionId);
    if (data.tip === "potentiometer" && (!m || m.type !== "potentiometer")) {
      return;
    }
    state.part = data;
    var key = data.sprite || (typeof cheieSpritePiesa === "function" ? cheieSpritePiesa(data.tip, data.val, data.orientare) : null);
    putSprite($.slotContent, key);
    if ($.slot) {
      $.slot.classList.add("montat");
      $.slot.classList.remove("pulse-anim", "slot-hover");
    }
    if (data.tip === "potentiometer") {
      showPotPanel();
    } else {
      hidePotPanel();
    }
    resetVisual();
  }

  function resetVisual() {
    if ($.msg) {
      $.msg.className = "mesaj-rezultat text-sm hidden";
      $.msg.textContent = "";
    }
    if ($.target) {
      $.target.className = "piesa-schema shrink-0 text-center px-2 py-2";
      var m = mission(state.missionId);
      if (m && m.target) {
        $.target.className += " " + m.target.fxClass.split(" ")[0];
      }
    }
    ["svg-ventilator", "svg-grid", "svg-laser", "svg-sera-led"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.classList.remove("rotate-anim", "grid-activ", "laser-activ", "sera-led-activ");
      }
    });
  }

  function applySuccessFx(m) {
    if (!m.target || !$.target) {
      return;
    }
    $.target.classList.add("activ");
    var parts = m.target.fxClass ? m.target.fxClass.split(" ") : [];
    parts.forEach(function (c) {
      $.target.classList.add(c);
    });
    if (m.target.fxId && m.target.fxAnim) {
      var svg = document.getElementById(m.target.fxId);
      if (svg) {
        svg.classList.add(m.target.fxAnim);
      }
    }
  }

  function showMsg(text, kind) {
    if (!$.msg) {
      return;
    }
    $.msg.textContent = text;
    $.msg.className = "mesaj-rezultat text-sm " + (kind || "");
    $.msg.classList.remove("hidden");
  }

  function circuitImg(m, solved) {
    if (!m || !m.circuit) {
      return "";
    }
    return solved ? m.circuit.solved : m.circuit.inMission;
  }

  function updateDiagram(m) {
    if (!$.diagImg || !$.diagPh) {
      return;
    }
    var src = circuitImg(m, false);
    if (!src) {
      $.diagImg.classList.add("hidden");
      $.diagPh.classList.remove("hidden");
      return;
    }
    if ($.diagCap) {
      $.diagCap.textContent = "";
    }
    if ($.diagPath) {
      $.diagPath.textContent = src;
    }
    if ($.diagHint) {
      $.diagHint.textContent = t("diagramaPlaceholder");
    }
    $.diagImg.onload = function () {
      $.diagImg.classList.remove("hidden");
      $.diagPh.classList.add("hidden");
    };
    $.diagImg.onerror = function () {
      $.diagImg.classList.add("hidden");
      $.diagPh.classList.remove("hidden");
    };
    $.diagImg.classList.add("hidden");
    $.diagPh.classList.remove("hidden");
    $.diagImg.src = src;
  }

  // Validare circuit — un singur punct de intrare
  function validateCircuit() {
    var m = mission(state.missionId);
    if (!m) {
      return;
    }
    if (!state.part) {
      showMsg(t("mesajFaraPiesa"), "eroare-sub");
      return;
    }
    resetVisual();
    var p = state.part;
    var ok = false;
    var errKey = "default";

    if (m.type === "rezistor") {
      if (p.tip !== "rezistor") {
        showMsg(errMsg(m, "wrongPart"), "eroare-sub");
        return;
      }
      if (p.val === m.answer) {
        ok = true;
      } else {
        errKey = String(p.val);
      }
    } else if (m.type === "serie") {
      if (p.tip !== "baterie") {
        showMsg(errMsg(m, "wrongPart"), "eroare-sub");
        return;
      }
      var uTot = m.U_base + p.val;
      if (uTot === m.U_target) {
        ok = true;
      } else {
        errKey = String(p.val);
      }
    } else if (m.type === "dioda") {
      if (p.tip !== "dioda") {
        showMsg(errMsg(m, "wrongPart"), "eroare-sub");
        return;
      }
      if (p.orientare === m.answer) {
        ok = true;
      } else {
        errKey = p.orientare === "stanga" ? "stanga" : "default";
      }
    } else if (m.type === "capacitor") {
      if (p.tip !== "capacitor") {
        showMsg(errMsg(m, "wrongPart"), "eroare-sub");
        return;
      }
      if (p.val === m.answer) {
        ok = true;
      } else {
        errKey = String(p.val);
      }
    } else if (m.type === "potentiometer") {
      if (p.tip !== "potentiometer") {
        showMsg(errMsg(m, "wrongPart"), "eroare-sub");
        return;
      }
      var r = state.potR;
      if (r === 0) {
        errKey = "0";
      } else if (r === m.answer) {
        ok = true;
      } else {
        errKey = String(r);
      }
    }

    if (ok) {
      showMsg(L(m.success), "succes");
      applySuccessFx(m);
      finishMission(m.id);
    } else {
      var errKind = "eroare-sub";
      if (m.type === "potentiometer") {
        errKind = state.potR < m.answer ? "eroare-supra" : "eroare-sub";
      } else if (m.type === "rezistor") {
        errKind = p.val < m.answer ? "eroare-supra" : "eroare-sub";
      } else if (m.type === "serie") {
        errKind = p.val > m.answer ? "eroare-supra" : "eroare-sub";
      }
      showMsg(errMsg(m, errKey), errKind);
    }
  }

  function finishMission(id) {
    if (!state.progress[id]) {
      state.progress[id] = true;
      updateProgress();
      renderLevelCards();
    }
    state.winId = id;
    setTimeout(showWin, 900);
  }

  function updateProgress() {
    var n = 0, k;
    for (k in state.progress) {
      if (state.progress[k]) {
        n++;
      }
    }
    if ($.progress) {
      $.progress.textContent = n + " / " + missionsData.length;
    }
  }

  function showWin() {
    var m = mission(state.winId);
    if ($.winSub) {
      $.winSub.textContent = L(m.win);
    }
    if ($.winDetail) {
      $.winDetail.textContent = t("victorieDetail");
    }
    if ($.winNext) {
      if (state.winId < missionsData.length) {
        $.winNext.classList.remove("hidden");
        $.winNext.setAttribute("data-next", String(state.winId + 1));
      } else {
        $.winNext.classList.add("hidden");
      }
    }
    if ($.winCircuit) {
      $.winCircuit.classList.toggle("hidden", !circuitImg(m, true));
    }
    if ($.winOverlay) {
      $.winOverlay.classList.remove("hidden");
      $.winOverlay.setAttribute("aria-hidden", "false");
    }
  }

  function hideWin() {
    if ($.winOverlay) {
      $.winOverlay.classList.add("hidden");
      $.winOverlay.setAttribute("aria-hidden", "true");
    }
    hideSolvedCircuit();
  }

  function showSolvedCircuit() {
    var src = circuitImg(mission(state.winId), true);
    if (!src || !$.solvedOverlay) {
      return;
    }
    if ($.solvedImg) {
      $.solvedImg.src = src;
    }
    if ($.solvedCap) {
      $.solvedCap.textContent = (lang === "en" ? "Mission " : "Misiunea ") + state.winId;
    }
    $.solvedOverlay.classList.remove("hidden");
    $.solvedOverlay.setAttribute("aria-hidden", "false");
  }

  function hideSolvedCircuit() {
    if ($.solvedOverlay) {
      $.solvedOverlay.classList.add("hidden");
      $.solvedOverlay.setAttribute("aria-hidden", "true");
    }
  }

  function loadMission(id) {
    var m = mission(id);
    if (!m) {
      return;
    }
    state.missionId = id;
    state.part = null;
    state.pick = null;
    hidePotPanel();
    clearSlot();
    resetVisual();

    if ($.missionTitle) {
      $.missionTitle.textContent = L(m.title);
    }
    if ($.dialog) {
      $.dialog.textContent = L(m.dialog);
    }
    putSprite($.sourceSprite, m.source.sprite);
    if ($.sourceVal) {
      $.sourceVal.textContent = m.source.label;
    }
    putSprite($.targetSprite, m.target.sprite);
    if ($.target) {
      $.target.className = "piesa-schema shrink-0 text-center px-2 py-2 " + (m.target.fxClass || "").split(" ")[0];
    }
    if ($.lineTarget) {
      $.lineTarget.classList.toggle("linie-sageata", !!m.arrows);
    }
    updateDiagram(m);
    filterInventory(state.filter === "toate" && m.type === "potentiometer" ? "toate" : state.filter);
    clearDraw();
    resizeDraw();
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function bindInventory() {
    document.querySelectorAll(".piesa-inventar").forEach(function (btn) {
      btn.onclick = function (e) {
        e.preventDefault();
        state.pick = partFromEl(btn);
        document.querySelectorAll(".piesa-inventar").forEach(function (b) {
          b.classList.remove("piesa-selectata");
        });
        btn.classList.add("piesa-selectata");
        if ($.slot) {
          $.slot.classList.add("slot-tinta");
        }
      };
      btn.ondragstart = function (e) {
        e.dataTransfer.setData("application/ohmspace-part", JSON.stringify(partFromEl(btn)));
        btn.classList.add("trage-piesa");
      };
      btn.ondragend = function () {
        btn.classList.remove("trage-piesa");
      };
    });
  }

  function bindSlot() {
    if (!$.slot) {
      return;
    }
    $.slot.onclick = function () {
      if (state.pick) {
        mountPart(state.pick);
        state.pick = null;
        document.querySelectorAll(".piesa-inventar").forEach(function (b) {
          b.classList.remove("piesa-selectata");
        });
        $.slot.classList.remove("slot-tinta");
      } else if (state.part) {
        clearSlot();
        resetVisual();
      } else {
        showMsg(t("mesajSelecteazaPiesa"), "eroare-sub");
      }
    };
    $.slot.ondragover = function (e) {
      e.preventDefault();
      $.slot.classList.add("slot-hover");
    };
    $.slot.ondragleave = function () {
      $.slot.classList.remove("slot-hover");
    };
    $.slot.ondrop = function (e) {
      e.preventDefault();
      $.slot.classList.remove("slot-hover");
      try {
        mountPart(JSON.parse(e.dataTransfer.getData("application/ohmspace-part")));
      } catch (x) {
        return;
      }
      state.pick = null;
      document.querySelectorAll(".piesa-inventar").forEach(function (b) {
        b.classList.remove("piesa-selectata");
      });
    };
  }

  function bookEl(type) {
    return {
      overlay: document.getElementById(type === "jurnal" ? "overlay-jurnal" : "overlay-manual-tehnic"),
      cover: document.getElementById(type === "jurnal" ? "coperta-jurnal" : "coperta-manual-tehnic"),
      inner: document.getElementById(type === "jurnal" ? "interior-jurnal" : "interior-manual-tehnic"),
      left: document.getElementById(type === "jurnal" ? "pagina-stanga-jurnal" : "pagina-stanga-tehnic"),
      right: document.getElementById(type === "jurnal" ? "pagina-dreapta-jurnal" : "pagina-dreapta-tehnic"),
      ind: document.getElementById(type === "jurnal" ? "indicator-pagini-jurnal" : "indicator-pagini-tehnic")
    };
  }

  function renderBook(type) {
    var data = type === "jurnal" ? jurnalData : manualTehnic;
    var el = bookEl(type);
    var pg = data.pagini[state.books[type].p];
    if (!pg || !el.left) {
      return;
    }
    var st = renderBookSide(pg.stanga, lang);
    var dr = renderBookSide(pg.dreapta, lang);
    el.left.innerHTML = "<h4>" + st.titlu + "</h4>" + st.html;
    el.right.innerHTML = "<h4>" + dr.titlu + "</h4>" + dr.html;
    el.ind.textContent = state.books[type].p + 1 + " / " + data.totalPagini;
    document.querySelectorAll('.btn-pag-anterioara[data-carte="' + type + '"]').forEach(function (b) {
      b.disabled = state.books[type].p <= 0;
    });
    document.querySelectorAll('.btn-pag-urmatoare[data-carte="' + type + '"]').forEach(function (b) {
      b.disabled = state.books[type].p >= data.totalPagini - 1;
    });
    if (type === "tehnic") {
      el.left.querySelectorAll(".link-capitol").forEach(function (lnk) {
        lnk.onclick = function () {
          state.books.tehnic.p = parseInt(lnk.getAttribute("data-sari-la"), 10);
          renderBook("tehnic");
        };
      });
    }
  }

  function openBook(type, page) {
    var el = bookEl(type);
    if (typeof page === "number") {
      state.books[type].p = page;
    }
    el.overlay.classList.remove("hidden");
    el.overlay.setAttribute("aria-hidden", "false");
    el.cover.classList.remove("hidden");
    el.inner.classList.add("hidden");
  }

  function openBookInner(type) {
    var el = bookEl(type);
    state.books[type].open = true;
    el.cover.classList.add("hidden");
    el.inner.classList.remove("hidden");
    renderBook(type);
  }

  function closeBook(type) {
    var el = bookEl(type);
    el.overlay.classList.add("hidden");
    el.overlay.setAttribute("aria-hidden", "true");
    state.books[type].open = false;
  }

  function fillDraw() {
    if (!ctxDraw || !$.canvas) {
      return;
    }
    ctxDraw.globalCompositeOperation = "source-over";
    ctxDraw.fillStyle = "#0c1222";
    ctxDraw.fillRect(0, 0, $.canvas.width, $.canvas.height);
  }

  function applyDrawTool() {
    if (!ctxDraw) {
      return;
    }
    if (state.draw.tool === "pen") {
      ctxDraw.globalCompositeOperation = "source-over";
      ctxDraw.strokeStyle = "#ffffff";
      ctxDraw.lineWidth = 2;
    } else {
      ctxDraw.globalCompositeOperation = "destination-out";
      ctxDraw.lineWidth = 14;
    }
  }

  function resizeDraw() {
    if (!$.canvas) {
      return;
    }
    var r = $.canvas.parentElement.getBoundingClientRect();
    $.canvas.width = Math.max(280, Math.floor(r.width) || 280);
    $.canvas.height = Math.max(200, Math.floor(r.height) || 200);
    fillDraw();
    applyDrawTool();
  }

  function clearDraw() {
    fillDraw();
    applyDrawTool();
  }

  function posDraw(ev) {
    var r = $.canvas.getBoundingClientRect();
    var cx = ev.clientX;
    var cy = ev.clientY;
    if (ev.touches && ev.touches[0]) {
      cx = ev.touches[0].clientX;
      cy = ev.touches[0].clientY;
    }
    return {
      x: ((cx - r.left) / r.width) * $.canvas.width,
      y: ((cy - r.top) / r.height) * $.canvas.height
    };
  }

  function initDraw() {
    $.canvas = document.getElementById("scratchpad-canvas");
    if (!$.canvas) {
      return;
    }
    ctxDraw = $.canvas.getContext("2d");
    ctxDraw.lineCap = "round";
    ctxDraw.lineJoin = "round";
    applyDrawTool();
    $.canvas.onmousedown = function (e) {
      e.preventDefault();
      applyDrawTool();
      state.draw.on = true;
      var p = posDraw(e);
      state.draw.lx = p.x;
      state.draw.ly = p.y;
      ctxDraw.beginPath();
      ctxDraw.moveTo(p.x, p.y);
    };
    $.canvas.onmousemove = function (e) {
      if (!state.draw.on) {
        return;
      }
      e.preventDefault();
      var p = posDraw(e);
      ctxDraw.lineTo(p.x, p.y);
      ctxDraw.stroke();
      state.draw.lx = p.x;
      state.draw.ly = p.y;
    };
    var stop = function () {
      state.draw.on = false;
    };
    $.canvas.onmouseup = stop;
    $.canvas.onmouseleave = stop;
    $.canvas.ontouchstart = function (e) {
      $.canvas.onmousedown(e);
    };
    $.canvas.ontouchmove = function (e) {
      $.canvas.onmousemove(e);
    };
    $.canvas.ontouchend = stop;
    document.getElementById("btn-pen").onclick = function () {
      state.draw.tool = "pen";
      document.getElementById("btn-pen").classList.add("activ");
      document.getElementById("btn-radiera").classList.remove("activ");
      applyDrawTool();
    };
    document.getElementById("btn-radiera").onclick = function () {
      state.draw.tool = "radiera";
      document.getElementById("btn-radiera").classList.add("activ");
      document.getElementById("btn-pen").classList.remove("activ");
      applyDrawTool();
    };
    document.getElementById("btn-curata-desen").onclick = clearDraw;
    window.addEventListener("resize", resizeDraw);
    setTimeout(resizeDraw, 80);
  }

  function setLang(code) {
    lang = code === "en" ? "en" : "ro";
    applyI18n();
    renderLevelCards();
    if (state.screen === "misiune") {
      loadMission(state.missionId);
    }
    if (state.books.tehnic.open) {
      renderBook("tehnic");
    }
    if (state.books.jurnal.open) {
      renderBook("jurnal");
    }
  }

  function cacheDom() {
    $.slot = document.getElementById("slot-misiune");
    $.slotContent = document.getElementById("continut-slot");
    $.sourceSprite = document.getElementById("circuit-sursa-sprite");
    $.sourceVal = document.getElementById("circuit-sursa-val");
    $.targetSprite = document.getElementById("circuit-tinta-sprite");
    $.target = document.getElementById("circuit-tinta");
    $.lineTarget = document.getElementById("linie-spre-tinta");
    $.missionTitle = document.getElementById("titlu-misiune-curenta");
    $.dialog = document.getElementById("dialog-ai");
    $.msg = document.getElementById("mesaj-rezultat");
    $.diagImg = document.getElementById("img-diagrama-circuit");
    $.diagPh = document.getElementById("diagrama-circuit-placeholder");
    $.diagCap = document.getElementById("diagrama-circuit-caption");
    $.diagPath = document.getElementById("diagrama-placeholder-cale");
    $.diagHint = document.getElementById("diagrama-placeholder-text");
    $.potPanel = document.getElementById("panou-potentiometru");
    $.potSlider = document.getElementById("potentiometer-slider");
    $.potLive = document.getElementById("potentiometru-valoare-live");
    $.progress = document.getElementById("indicator-progres");
    $.winOverlay = document.getElementById("overlay-victorie");
    $.winSub = document.getElementById("victorie-subtitlu");
    $.winDetail = document.getElementById("victorie-detail");
    $.winNext = document.getElementById("btn-victorie-urmator");
    $.winCircuit = document.getElementById("btn-victorie-circuit");
    $.solvedOverlay = document.getElementById("overlay-circuit-rezolvat");
    $.solvedImg = document.getElementById("img-circuit-rezolvat");
    $.solvedCap = document.getElementById("circuit-rezolvat-caption");
  }

  function bindUi() {
    document.getElementById("btn-intro-start").onclick = function () {
      showScreen("meniu");
    };
    document.getElementById("btn-porneste-misiune").onclick = function () {
      loadMission(state.pickLevel);
      showScreen("misiune");
    };
    document.getElementById("btn-hub-inapoi").onclick = function () {
      showScreen("meniu");
    };
    document.getElementById("btn-misiune-inapoi").onclick = function () {
      showScreen("meniu");
    };
    document.getElementById("btn-nav-misiuni").onclick = function () {
      loadMission(state.pickLevel || 1);
      showScreen("misiune");
    };
    document.getElementById("btn-start-manual").onclick = function () {
      openBook("tehnic", 0);
    };
    document.getElementById("btn-nav-manual").onclick = function () {
      openBook("tehnic", 0);
    };
    document.getElementById("btn-manual-din-joc").onclick = function () {
      openBook("tehnic", state.books.tehnic.p);
    };
    document.getElementById("btn-start-jurnal").onclick = function () {
      openBook("jurnal", 0);
    };
    document.getElementById("btn-nav-jurnal").onclick = function () {
      openBook("jurnal", 0);
    };
    document.getElementById("btn-deschide-tehnic").onclick = function () {
      openBookInner("tehnic");
    };
    document.getElementById("btn-deschide-jurnal").onclick = function () {
      openBookInner("jurnal");
    };
    document.querySelectorAll(".coperta-figura").forEach(function (fig) {
      fig.onclick = function () {
        openBookInner(fig.closest("#overlay-jurnal") ? "jurnal" : "tehnic");
      };
    });
    document.querySelectorAll(".btn-inchide-carte").forEach(function (b) {
      b.onclick = function () {
        closeBook(b.getAttribute("data-carte"));
      };
    });
    document.querySelectorAll(".overlay-carte").forEach(function (ov) {
      ov.onclick = function (e) {
        if (e.target === ov) {
          closeBook(ov.id === "overlay-jurnal" ? "jurnal" : "tehnic");
        }
      };
    });
    document.querySelectorAll(".btn-pag-anterioara").forEach(function (b) {
      b.onclick = function () {
        var tp = b.getAttribute("data-carte");
        if (state.books[tp].p > 0) {
          state.books[tp].p--;
          renderBook(tp);
        }
      };
    });
    document.querySelectorAll(".btn-pag-urmatoare").forEach(function (b) {
      b.onclick = function () {
        var tp = b.getAttribute("data-carte");
        var data = tp === "jurnal" ? jurnalData : manualTehnic;
        if (state.books[tp].p < data.totalPagini - 1) {
          state.books[tp].p++;
          renderBook(tp);
        }
      };
    });
    document.querySelectorAll(".filtru-inventar").forEach(function (b) {
      b.onclick = function () {
        filterInventory(b.getAttribute("data-filtru"));
      };
    });
    document.getElementById("btn-lanseaza-curent").onclick = validateCircuit;
    if ($.potSlider) {
      $.potSlider.oninput = function () {
        state.potR = parseInt($.potSlider.value, 10) || 0;
        updatePotLabel();
        resetVisual();
      };
    }
    document.getElementById("btn-setari").onclick = function () {
      document.getElementById("panou-setari").classList.toggle("hidden");
    };
    document.getElementById("select-limba").onchange = function () {
      setLang(this.value);
    };
    document.querySelectorAll(".opt-limba").forEach(function (b) {
      b.onclick = function () {
        setLang(b.getAttribute("data-limba"));
        document.querySelectorAll(".opt-limba").forEach(function (x) {
          x.classList.toggle("activ", x === b);
        });
      };
    });
    document.getElementById("btn-victorie-meniu").onclick = function () {
      hideWin();
      showScreen("meniu");
    };
    document.getElementById("btn-victorie-urmator").onclick = function () {
      var next = parseInt($.winNext.getAttribute("data-next"), 10);
      hideWin();
      state.pickLevel = next;
      renderLevelCards();
      loadMission(next);
      showScreen("misiune");
    };
    document.getElementById("btn-victorie-circuit").onclick = showSolvedCircuit;
    document.getElementById("btn-inchide-circuit-rezolvat").onclick = hideSolvedCircuit;
    if ($.solvedOverlay) {
      $.solvedOverlay.onclick = function (e) {
        if (e.target === $.solvedOverlay) {
          hideSolvedCircuit();
        }
      };
    }
    var splashBtn = document.getElementById("btn-splash-setari");
    var splashMenu = document.getElementById("meniu-limba-splash");
    if (splashBtn && splashMenu) {
      splashBtn.onclick = function () {
        var open = splashMenu.classList.toggle("hidden");
        splashBtn.setAttribute("aria-expanded", open ? "false" : "true");
      };
    }
    bindSlot();
  }

  function init() {
    cacheDom();
    renderInventory();
    renderLevelCards();
    bindUi();
    initDraw();
    applyI18n();
    updateProgress();
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons();
    }
    showScreen("splash");
    loadMission(1);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
