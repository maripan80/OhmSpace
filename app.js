/**
 * OhmSpace — logică principală (navigare, limbi, manual, misiunea 1).
 */

(function () {
  "use strict";

  var TENSIUNE = 24;
  var REZISTOR_CORECT = 12;

  var limbaCurenta = "ro";
  var paginaManualCurenta = 0;
  var rezistentaMontata = null;
  var etichetaMontata = "";
  var misiuneReusita = false;
  var nivelSelectat = 1;

  var traduceri = {
    ro: {
      atasamentSplashTitlu: "Atașament — Copertă intro",
      splashSubtitlu: "Baza Lunară Artemis-Prime",
      btnStart: "START",
      subtitluStart: "Simulare educațională — Fizică & Electronică",
      atasamentFundalTitlu: "Atașament imagine — Meniu principal",
      atasamentFundalHint: "Înlocuiește acest bloc cu imaginea ta (CSS background-image sau <img>).",
      atasamentHubTitlu: "Atașament — Emblemă bază",
      atasamentAvatarTitlu: "Atașament — Avatar OHM-7",
      atasamentManualTitlu: "Opțional: copertă manual — coperta-manual.jpg",
      titluNiveluri: "Selectează nivelul",
      nivel1Titlu: "Misiunea 1 — Legea lui Ohm",
      nivel1Desc: "Ventilator Sector Alpha · 24 V",
      nivel2Titlu: "Misiunea 2 — Kirchhoff",
      nivel3Titlu: "Misiunea 3 — Circuite mixte",
      nivelBlocat: "În curând",
      mesajNivelBlocat: "Acest nivel nu este disponibil încă.",
      btnPorneste: "Inițiază Misiunea",
      btnSetari: "Setări",
      titluSetari: "Setări",
      labelLimba: "Limba interfeței",
      titluHub: "Panou de Comandă — Baza Artemis-Prime",
      subtitluHub: "Selectează modulul de lucru",
      btnInapoi: "← Meniu principal",
      navMisiuni: "Sistem de Misiuni",
      navMisiuniDesc: "Rezolvă probleme de circuit pe Lună",
      navManual: "Manual Tehnic (Teorie)",
      navManualDesc: "Legea lui Ohm, Kirchhoff",
      navJurnal: "Jurnal de Bord (Poveste)",
      navJurnalDesc: "Lore și fapte spațiale",
      labelProgres: "Progres misiuni:",
      titluMisiune1: "Misiunea 1 — Legea lui Ohm pe Lună",
      btnDeschideManual: "Deschide Manualul Tehnic",
      btnInapoiMeniu: "← Meniu",
      labelAi: "AI Baza — Unitatea OHM-7",
      dialogMisiune1:
        "ALERTĂ: Modulul de Oxigen din Sectorul Alpha s-a oprit din cauza prafului lunar (regolit). Tensiunea de la panoul solar este stabilă la 24V. Ventilatorul principal are nevoie de exact 2 Amperi pentru a reporni fără să scurtcircuiteze rețeaua. Calculează și plasează rezistorul potrivit din inventar!",
      labelSchema: "Schema electronică — Sector Alpha",
      labelBaterie: "Baterie",
      slotGol: "[ SLOT GOL ]",
      labelVentilator: "Ventilator",
      hintMontare: "Trage rezistorul din inventar și plasează-l în slotul gol.",
      labelInventar: "Inventar piese",
      rez2: "Rezistor 2 Ω",
      rez12: "Rezistor 12 Ω",
      rez50: "Rezistor 50 Ω",
      btnLanseaza: "Lansează Curentul",
      labelScratchpad: "Caiet de calcule",
      btnPagAnterioara: "Pagina precedentă",
      btnPagUrmatoare: "Pagina următoare",
      titluManual: "Manual Tehnic",
      mesajSucces:
        "SUCCES! Curent stabil: 2 A. Ventilatorul Sector Alpha repornește. Oxigenul revine la parametri normali.",
      mesajSupracurent:
        "ALERTĂ: Ventilatorul s-a supraîncălzit! Rezistență prea mică!",
      mesajSubalimentare: "Curent insuficient pentru a porni motoarele.",
      mesajFaraPiesa: "Montează un rezistor în slot înainte de a lansa curentul."
    },
    en: {
      atasamentSplashTitlu: "Attachment — Intro cover",
      splashSubtitlu: "Artemis-Prime Lunar Base",
      btnStart: "START",
      subtitluStart: "Educational simulation — Physics & Electronics",
      atasamentFundalTitlu: "Image attachment — Main menu",
      atasamentFundalHint: "Replace this block with your image (CSS background-image or <img>).",
      atasamentHubTitlu: "Attachment — Base emblem",
      atasamentAvatarTitlu: "Attachment — OHM-7 avatar",
      atasamentManualTitlu: "Optional: manual cover — coperta-manual.jpg",
      titluNiveluri: "Select level",
      nivel1Titlu: "Mission 1 — Ohm's Law",
      nivel1Desc: "Sector Alpha fan · 24 V",
      nivel2Titlu: "Mission 2 — Kirchhoff",
      nivel3Titlu: "Mission 3 — Mixed circuits",
      nivelBlocat: "Coming soon",
      mesajNivelBlocat: "This level is not available yet.",
      btnPorneste: "Start Mission",
      btnSetari: "Settings",
      titluSetari: "Settings",
      labelLimba: "Interface language",
      titluHub: "Command Panel — Artemis-Prime Base",
      subtitluHub: "Select a work module",
      btnInapoi: "← Main menu",
      navMisiuni: "Mission System",
      navMisiuniDesc: "Solve lunar circuit problems",
      navManual: "Technical Manual (Theory)",
      navManualDesc: "Ohm's law, Kirchhoff",
      navJurnal: "Logbook (Story)",
      navJurnalDesc: "Lore and space facts",
      labelProgres: "Mission progress:",
      titluMisiune1: "Mission 1 — Ohm's Law on the Moon",
      btnDeschideManual: "Open Technical Manual",
      btnInapoiMeniu: "← Menu",
      labelAi: "Base AI — Unit OHM-7",
      dialogMisiune1:
        "ALERT: Oxygen Module in Sector Alpha stopped due to lunar dust (regolith). Solar panel voltage is stable at 24V. Main fan needs exactly 2 Amperes to restart without shorting the network. Calculate and place the correct resistor from inventory!",
      labelSchema: "Electronic schematic — Sector Alpha",
      labelBaterie: "Battery",
      slotGol: "[ EMPTY SLOT ]",
      labelVentilator: "Fan",
      hintMontare: "Drag a resistor from inventory and drop it on the empty slot.",
      labelInventar: "Parts inventory",
      rez2: "Resistor 2 Ω",
      rez12: "Resistor 12 Ω",
      rez50: "Resistor 50 Ω",
      btnLanseaza: "Launch Current",
      labelScratchpad: "Scratchpad",
      btnPagAnterioara: "Previous page",
      btnPagUrmatoare: "Next page",
      titluManual: "Technical Manual",
      mesajSucces:
        "SUCCESS! Stable current: 2 A. Sector Alpha fan restarts. Oxygen returns to normal.",
      mesajSupracurent: "ALERT: Fan overheated! Resistance too low!",
      mesajSubalimentare: "Insufficient current to start motors.",
      mesajFaraPiesa: "Mount a resistor in the slot before launching current."
    }
  };

  var ecrane = {
    splash: document.getElementById("ecran-splash"),
    meniu: document.getElementById("ecran-meniu"),
    hub: document.getElementById("ecran-hub"),
    misiune: document.getElementById("ecran-misiune")
  };

  var overlayManual = document.getElementById("overlay-manual");
  var paginaStanga = document.getElementById("pagina-stanga");
  var paginaDreapta = document.getElementById("pagina-dreapta");
  var indicatorPagini = document.getElementById("indicator-pagini");
  var slotRezistor = document.getElementById("slot-rezistor");
  var continutSlot = document.getElementById("continut-slot");
  var textSlot = document.getElementById("text-slot");
  var mesajRezultat = document.getElementById("mesaj-rezultat");
  var ventilatorPiesa = document.getElementById("ventilator-piesa");
  var indicatorProgres = document.getElementById("indicator-progres");

  function textTradus(cheie) {
    var dict = traduceri[limbaCurenta];
    return dict && dict[cheie] !== undefined ? dict[cheie] : cheie;
  }

  // Inserează SVG din componentSprites într-un container
  function puneSprite(container, cheie) {
    if (!container || !componentSprites[cheie]) {
      return;
    }
    container.innerHTML = componentSprites[cheie];
  }

  // Randare sprite-uri la încărcare (schemă + inventar)
  function initSpriteUri() {
    var baterie = document.querySelector('[data-sprite="baterie"]');
    var vent = document.getElementById("container-ventilator");
    puneSprite(baterie, "baterie");
    puneSprite(vent, "ventilator");

    var pieseInv = document.querySelectorAll(".piesa-inventar");
    var i;
    for (i = 0; i < pieseInv.length; i++) {
      var cheie = pieseInv[i].getAttribute("data-sprite");
      var span = pieseInv[i].querySelector(".sprite-inventar");
      if (span && cheie) {
        puneSprite(span, cheie);
      }
    }
  }

  function aplicaLimba() {
    var elemente = document.querySelectorAll("[data-i18n]");
    var i;
    for (i = 0; i < elemente.length; i++) {
      var el = elemente[i];
      var cheie = el.getAttribute("data-i18n");
      if (cheie) {
        el.textContent = textTradus(cheie);
      }
    }
    document.documentElement.lang = limbaCurenta === "en" ? "en" : "ro";
    var titluModal = document.getElementById("titlu-manual-modal");
    if (titluModal) {
      titluModal.textContent = textTradus("titluManual");
    }
    actualizeazaIndicatoareLimba();
    actualizeazaSlotVizual();
    actualizeazaPaginaManual();
  }

  // Sincronizează RO/EN între splash și meniul principal
  function seteazaLimba(cod) {
    limbaCurenta = cod === "en" ? "en" : "ro";
    var select = document.getElementById("select-limba");
    if (select) {
      select.value = limbaCurenta;
    }
    aplicaLimba();
  }

  function actualizeazaIndicatoareLimba() {
    var optiuni = document.querySelectorAll(".opt-limba");
    var j;
    for (j = 0; j < optiuni.length; j++) {
      var cod = optiuni[j].getAttribute("data-limba");
      if (cod === limbaCurenta) {
        optiuni[j].classList.add("activ");
      } else {
        optiuni[j].classList.remove("activ");
      }
    }
  }

  function arataEcran(nume) {
    var chei = Object.keys(ecrane);
    var k;
    for (k = 0; k < chei.length; k++) {
      var ecran = ecrane[chei[k]];
      if (ecran) {
        if (chei[k] === nume) {
          ecran.classList.remove("hidden");
        } else {
          ecran.classList.add("hidden");
        }
      }
    }
  }

  function selecteazaNivel(buton) {
    if (buton.getAttribute("data-disponibil") !== "1") {
      return;
    }
    var carduri = document.querySelectorAll(".card-nivel");
    var i;
    for (i = 0; i < carduri.length; i++) {
      carduri[i].classList.remove("activ");
    }
    buton.classList.add("activ");
    nivelSelectat = parseInt(buton.getAttribute("data-nivel"), 10);
  }

  function pornesteNivelSelectat() {
    if (nivelSelectat === 1) {
      arataEcran("misiune");
      return;
    }
    afiseazaMesaj("mesajNivelBlocat", "eroare-sub");
  }

  function deschideManual(paginaStart) {
    if (typeof paginaStart === "number") {
      paginaManualCurenta = paginaStart;
    }
    overlayManual.classList.remove("hidden");
    overlayManual.setAttribute("aria-hidden", "false");
    actualizeazaPaginaManual();
    leagaLinkuriCuprins();
  }

  function inchideManual() {
    overlayManual.classList.add("hidden");
    overlayManual.setAttribute("aria-hidden", "true");
  }

  function actualizeazaPaginaManual() {
    if (typeof manualData === "undefined") {
      return;
    }
    var idx = paginaManualCurenta;
    var pagina = manualData.pagini[idx];
    if (!pagina) {
      return;
    }

    paginaStanga.innerHTML =
      "<h4>" + pagina.stanga.titlu + "</h4>" + pagina.stanga.html;
    paginaDreapta.innerHTML =
      "<h4>" + pagina.dreapta.titlu + "</h4>" + pagina.dreapta.html;

    indicatorPagini.textContent =
      idx + 1 + " / " + manualData.totalPagini;

    document.getElementById("btn-pagina-anterioara").disabled = idx <= 0;
    document.getElementById("btn-pagina-urmatoare").disabled =
      idx >= manualData.totalPagini - 1;

    leagaLinkuriCuprins();
  }

  function leagaLinkuriCuprins() {
    var linkuri = paginaStanga.querySelectorAll(".link-capitol");
    var j;
    for (j = 0; j < linkuri.length; j++) {
      linkuri[j].onclick = function () {
        var tinta = parseInt(this.getAttribute("data-sari-la"), 10);
        if (!isNaN(tinta)) {
          paginaManualCurenta = tinta;
          actualizeazaPaginaManual();
        }
      };
    }
  }

  function datePiesaDinElement(el) {
    return {
      valoare: parseInt(el.getAttribute("data-rezistenta"), 10),
      eticheta: el.getAttribute("data-label"),
      sprite: el.getAttribute("data-sprite")
    };
  }

  function monteazaPiesa(date) {
    if (!date || isNaN(date.valoare)) {
      return;
    }
    rezistentaMontata = date.valoare;
    etichetaMontata = date.eticheta;
    slotRezistor.classList.add("montat");
    slotRezistor.classList.remove("pulse-anim", "slot-hover");
    actualizeazaSlotVizual();
    reseteazaRezultatVizual();
  }

  function actualizeazaSlotVizual() {
    if (!continutSlot) {
      return;
    }
    if (rezistentaMontata === null) {
      continutSlot.innerHTML =
        '<span id="text-slot" class="text-slot-label">' +
        textTradus("slotGol") +
        "</span>";
      textSlot = document.getElementById("text-slot");
      slotRezistor.classList.remove("montat");
      slotRezistor.classList.add("pulse-anim");
      return;
    }
    var cheie = cheieRezistor(rezistentaMontata);
    if (cheie) {
      continutSlot.innerHTML = componentSprites[cheie];
    }
  }

  // Drag & drop — inventar → slot
  function initDragDrop() {
    var piese = document.querySelectorAll(".piesa-inventar");
    var i;

    for (i = 0; i < piese.length; i++) {
      piese[i].addEventListener("dragstart", function (ev) {
        var date = datePiesaDinElement(this);
        ev.dataTransfer.setData(
          "application/ohmspace-piesa",
          JSON.stringify(date)
        );
        ev.dataTransfer.effectAllowed = "move";
        this.classList.add("trage-piesa");
      });

      piese[i].addEventListener("dragend", function () {
        this.classList.remove("trage-piesa");
        slotRezistor.classList.remove("slot-hover");
      });
    }

    slotRezistor.addEventListener("dragover", function (ev) {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
      slotRezistor.classList.add("slot-hover");
    });

    slotRezistor.addEventListener("dragleave", function (ev) {
      if (!slotRezistor.contains(ev.relatedTarget)) {
        slotRezistor.classList.remove("slot-hover");
      }
    });

    slotRezistor.addEventListener("drop", function (ev) {
      ev.preventDefault();
      slotRezistor.classList.remove("slot-hover");
      var raw = ev.dataTransfer.getData("application/ohmspace-piesa");
      if (!raw) {
        return;
      }
      try {
        monteazaPiesa(JSON.parse(raw));
      } catch (err) {
        /* date invalide la drop */
      }
    });
  }

  function obtineSvgVentilator() {
    return document.getElementById("svg-ventilator");
  }

  function reseteazaRezultatVizual() {
    mesajRezultat.className = "mesaj-rezultat text-sm hidden";
    mesajRezultat.textContent = "";
    ventilatorPiesa.classList.remove("activ");
    var svg = obtineSvgVentilator();
    if (svg) {
      svg.classList.remove("rotate-anim");
    }
  }

  function lanseazaCurent() {
    if (rezistentaMontata === null) {
      afiseazaMesaj("mesajFaraPiesa", "eroare-sub");
      return;
    }

    reseteazaRezultatVizual();

    if (rezistentaMontata === REZISTOR_CORECT) {
      ventilatorPiesa.classList.add("activ");
      var svg = obtineSvgVentilator();
      if (svg) {
        svg.classList.add("rotate-anim");
      }
      afiseazaMesaj("mesajSucces", "succes");
      if (!misiuneReusita) {
        misiuneReusita = true;
        actualizeazaProgres();
      }
      return;
    }

    if (rezistentaMontata < REZISTOR_CORECT) {
      afiseazaMesaj("mesajSupracurent", "eroare-supra");
      return;
    }

    afiseazaMesaj("mesajSubalimentare", "eroare-sub");
  }

  function afiseazaMesaj(cheieTraducere, clasaCss) {
    mesajRezultat.textContent = textTradus(cheieTraducere);
    mesajRezultat.className = "mesaj-rezultat text-sm " + clasaCss;
    mesajRezultat.classList.remove("hidden");
  }

  function actualizeazaProgres() {
    var completate = misiuneReusita ? 1 : 0;
    indicatorProgres.textContent = completate + " / 1";
    if (misiuneReusita) {
      indicatorProgres.classList.add("text-verde-neon");
    }
  }

  // Meniu limbă pe ecranul splash
  function initSetariSplash() {
    var btnSetari = document.getElementById("btn-splash-setari");
    var meniuLimba = document.getElementById("meniu-limba-splash");
    if (!btnSetari || !meniuLimba) {
      return;
    }

    btnSetari.addEventListener("click", function (ev) {
      ev.stopPropagation();
      meniuLimba.classList.toggle("hidden");
      var deschis = !meniuLimba.classList.contains("hidden");
      btnSetari.setAttribute("aria-expanded", deschis ? "true" : "false");
    });

    document.addEventListener("click", function (ev) {
      if (
        meniuLimba.classList.contains("hidden") ||
        btnSetari.contains(ev.target) ||
        meniuLimba.contains(ev.target)
      ) {
        return;
      }
      meniuLimba.classList.add("hidden");
      btnSetari.setAttribute("aria-expanded", "false");
    });

    var optiuni = meniuLimba.querySelectorAll(".opt-limba");
    var k;
    for (k = 0; k < optiuni.length; k++) {
      optiuni[k].addEventListener("click", function () {
        seteazaLimba(this.getAttribute("data-limba"));
        meniuLimba.classList.add("hidden");
        btnSetari.setAttribute("aria-expanded", "false");
      });
    }
  }

  function initIconiteLucide() {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function initEvenimente() {
    document.getElementById("btn-intro-start").addEventListener("click", function () {
      arataEcran("meniu");
    });

    document
      .getElementById("btn-porneste-misiune")
      .addEventListener("click", pornesteNivelSelectat);

    document.getElementById("btn-setari").addEventListener("click", function () {
      document.getElementById("panou-setari").classList.toggle("hidden");
    });

    document.getElementById("select-limba").addEventListener("change", function () {
      seteazaLimba(this.value);
    });

    initSetariSplash();

    var carduriNivel = document.querySelectorAll(".card-nivel");
    var n;
    for (n = 0; n < carduriNivel.length; n++) {
      carduriNivel[n].addEventListener("click", function () {
        selecteazaNivel(this);
      });
    }

    document.getElementById("btn-start-manual").addEventListener("click", function () {
      paginaManualCurenta = 0;
      deschideManual(0);
    });

    document.getElementById("btn-start-jurnal").addEventListener("click", function () {
      paginaManualCurenta = 3;
      deschideManual(3);
    });

    document.getElementById("btn-hub-inapoi").addEventListener("click", function () {
      arataEcran("meniu");
    });

    document.getElementById("btn-nav-misiuni").addEventListener("click", function () {
      nivelSelectat = 1;
      arataEcran("misiune");
    });

    document.getElementById("btn-nav-manual").addEventListener("click", function () {
      paginaManualCurenta = 0;
      deschideManual(0);
    });

    document.getElementById("btn-nav-jurnal").addEventListener("click", function () {
      paginaManualCurenta = 3;
      deschideManual(3);
    });

    document.getElementById("btn-misiune-inapoi").addEventListener("click", function () {
      arataEcran("meniu");
    });

    document.getElementById("btn-manual-din-joc").addEventListener("click", function () {
      deschideManual(paginaManualCurenta);
    });

    document.getElementById("btn-inchide-manual").addEventListener("click", inchideManual);

    overlayManual.addEventListener("click", function (ev) {
      if (ev.target === overlayManual) {
        inchideManual();
      }
    });

    document.getElementById("btn-pagina-anterioara").addEventListener("click", function () {
      if (paginaManualCurenta > 0) {
        paginaManualCurenta--;
        actualizeazaPaginaManual();
      }
    });

    document.getElementById("btn-pagina-urmatoare").addEventListener("click", function () {
      if (paginaManualCurenta < manualData.totalPagini - 1) {
        paginaManualCurenta++;
        actualizeazaPaginaManual();
      }
    });

    document.getElementById("btn-lanseaza-curent").addEventListener("click", lanseazaCurent);

    initDragDrop();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSpriteUri();
    initIconiteLucide();
    initEvenimente();
    arataEcran("splash");
    aplicaLimba();
    actualizeazaProgres();
  });
})();
