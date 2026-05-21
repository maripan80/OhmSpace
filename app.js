/**
 * OhmSpace — navigare, limbi, manuale, 5 misiuni, victorie, caiet desen.
 */

(function () {
  "use strict";

  var limbaCurenta = "ro";
  var piesaMontata = null;
  var piesaSelectata = null;
  var filtruInventar = "toate";
  var nivelSelectat = 1;
  var nivelCurentMisiune = 1;

  var progresNiveluri = { 1: false, 2: false, 3: false, 4: false, 5: false };
  var rezistentaPotentiometru = 0;

  var stareCarti = {
    tehnic: { pagina: 0, deschis: false },
    jurnal: { pagina: 0, deschis: false }
  };

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
      nivel1Titlu: "Misiunea 1 — Rezistor & ventilator",
      nivel1Desc: "Sector Alpha · 12 Ω · 2 A",
      nivel2Titlu: "Misiunea 2 — Tensiuni în serie",
      nivel2Desc: "Sub-stație solară · 36 V",
      nivel3Titlu: "Misiunea 3 — Diodă",
      nivel3Desc: "Releu antenă · polarizare",
      nivel4Titlu: "Misiunea 4 — Condensator",
      nivel4Desc: "Laser apărare · 2 F",
      nivel5Titlu: "Misiunea 5 — Potențiometru",
      nivel5Desc: "Seră LED · 1,5 A · 8 Ω",
      potentiometru: "Potențiometru",
      labelPotentiometru: "Calibrare potențiometru",
      rezistentaLivePrefix: "Rezistență curentă:",
      nivelBlocat: "Blocat",
      filtruToate: "Toate",
      filtruPutere: "Putere",
      filtruDiode: "Diode",
      filtruCapacitor: "Condensatoare",
      filtruRezistori: "Rezistori",
      bat6: "Baterie 6V",
      bat12: "Baterie 12V",
      bat24: "Baterie 24V",
      diodaF: "Diodă →",
      diodaR: "Diodă ←",
      cap05: "0.5 F",
      cap2: "2.0 F",
      cap10: "10 F",
      rez2: "2 Ω",
      rez12: "12 Ω",
      rez50: "50 Ω",
      hintDesen: "Desenează formule sau scheme.",
      labelDiagramaCircuit: "Diagramă circuit (real)",
      diagramaPlaceholder: "Adaugă o fotografie sau schemă IRL în folderul poze:",
      titluVictorie: "Misiune reușită!",
      victorieDetail: "OHM-7 — progres înregistrat.",
      btnVictorieMeniu: "Meniu principal",
      btnVictorieUrmator: "Următoarea misiune →",
      btnVictorieCircuit: "Vezi circuitul rezolvat",
      titluCircuitRezolvat: "Circuit rezolvat",
      mesajNivelBlocat: "Nivel indisponibil.",
      mesajSelecteazaPiesa: "Selectează o piesă din inventar.",
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
      btnDeschideManual: "Manual",
      btnInapoiMeniu: "← Meniu",
      labelAi: "OHM-7",
      slotGol: "[ SLOT ]",
      labelInventar: "Inventar",
      btnLanseaza: "Lansează Curentul",
      mesajFaraPiesa: "Montează o piesă în slot.",
      labelScratchpad: "Caiet de calcule",
      btnPagAnterioara: "Pagina precedentă",
      btnPagUrmatoare: "Pagina următoare",
      titluManual: "Manual Tehnic",
      titluJurnal: "Jurnal de Bord",
      labelGhidMeniu: "Consilier — OHM-7",
      hudStatus: "Sistem online — Artemis-Prime",
      ghidMeniu1: "Alege o misiune. Citește manualul pentru teorie.",
      hintCoperta: "Apasă coperta pentru a deschide cartea",
      btnDeschideCarte: "Deschide manualul",
      btnDeschideJurnal: "Deschide jurnalul"
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
      nivel1Titlu: "Mission 1 — Resistor & fan",
      nivel1Desc: "Sector Alpha · 12 Ω · 2 A",
      nivel2Titlu: "Mission 2 — Series voltage",
      nivel2Desc: "Solar substation · 36 V",
      nivel3Titlu: "Mission 3 — Diode",
      nivel3Desc: "Antenna relay · polarization",
      nivel4Titlu: "Mission 4 — Capacitor",
      nivel4Desc: "Defense laser · 2 F",
      nivel5Titlu: "Mission 5 — Potentiometer",
      nivel5Desc: "Greenhouse LED · 1.5 A · 8 Ω",
      potentiometru: "Potentiometer",
      labelPotentiometru: "Potentiometer calibration",
      rezistentaLivePrefix: "Current resistance:",
      nivelBlocat: "Locked",
      filtruToate: "All",
      filtruPutere: "Power",
      filtruDiode: "Diodes",
      filtruCapacitor: "Capacitors",
      filtruRezistori: "Resistors",
      bat6: "Battery 6V",
      bat12: "Battery 12V",
      bat24: "Battery 24V",
      diodaF: "Diode →",
      diodaR: "Diode ←",
      cap05: "0.5 F",
      cap2: "2.0 F",
      cap10: "10 F",
      rez2: "2 Ω",
      rez12: "12 Ω",
      rez50: "50 Ω",
      hintDesen: "Draw formulas or schematics.",
      labelDiagramaCircuit: "Real-world circuit diagram",
      diagramaPlaceholder: "Add a photo or real schematic in the poze folder:",
      titluVictorie: "Mission complete!",
      victorieDetail: "OHM-7 — progress logged.",
      btnVictorieMeniu: "Main menu",
      btnVictorieUrmator: "Next mission →",
      btnVictorieCircuit: "View solved circuit",
      titluCircuitRezolvat: "Solved circuit",
      mesajNivelBlocat: "Level unavailable.",
      mesajSelecteazaPiesa: "Select a part from inventory.",
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
      labelProgres: "Progress:",
      btnDeschideManual: "Manual",
      btnInapoiMeniu: "← Menu",
      labelAi: "OHM-7",
      slotGol: "[ SLOT ]",
      labelInventar: "Inventory",
      btnLanseaza: "Launch Current",
      mesajFaraPiesa: "Place a part in the slot.",
      labelScratchpad: "Scratchpad",
      btnPagAnterioara: "Previous page",
      btnPagUrmatoare: "Next page",
      titluManual: "Technical Manual",
      titluJurnal: "Logbook",
      labelGhidMeniu: "Advisor — OHM-7",
      hudStatus: "System online — Artemis-Prime",
      ghidMeniu1: "Pick a mission. Read the manual for theory.",
      hintCoperta: "Click the cover to open the book",
      btnDeschideCarte: "Open manual",
      btnDeschideJurnal: "Open logbook"
    }
  };

  var ecrane = {
    splash: document.getElementById("ecran-splash"),
    meniu: document.getElementById("ecran-meniu"),
    hub: document.getElementById("ecran-hub"),
    misiune: document.getElementById("ecran-misiune")
  };

  var slotMisiune = document.getElementById("slot-misiune");
  var continutSlot = document.getElementById("continut-slot");
  var circuitTinta = document.getElementById("circuit-tinta");
  var mesajRezultat = document.getElementById("mesaj-rezultat");
  var indicatorProgres = document.getElementById("indicator-progres");
  var overlayVictorie = document.getElementById("overlay-victorie");
  var nivelVictorieCurent = 1;
  var dialogAi = document.getElementById("dialog-ai");
  var titluMisiuneCurenta = document.getElementById("titlu-misiune-curenta");

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

  // Randare sprite-uri inventar
  function initSpriteUri() {
    var pieseInv = document.querySelectorAll(".piesa-inventar[data-sprite]");
    var i;
    for (i = 0; i < pieseInv.length; i++) {
      var cheie = pieseInv[i].getAttribute("data-sprite");
      var span = pieseInv[i].querySelector(".sprite-inventar");
      if (span && cheie) {
        puneSprite(span, cheie);
      }
    }
  }

  function obtineMisiuni() {
    return typeof misiuniOhmSpace !== "undefined" ? misiuniOhmSpace : [];
  }

  function obtineMisiuneDupaId(id) {
    var lista = obtineMisiuni();
    var i;
    for (i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        return lista[i];
      }
    }
    return null;
  }

  function textMisiune(m, camp) {
    if (!m || !m[camp]) {
      return "";
    }
    var bloc = m[camp];
    return bloc[limbaCurenta] || bloc.ro || "";
  }

  function textDiagrama(m, camp) {
    if (!m || !m.diagrama || !m.diagrama[camp]) {
      return "";
    }
    var bloc = m.diagrama[camp];
    return bloc[limbaCurenta] || bloc.ro || "";
  }

  // Cale imagine circuit — în misiune vs. rezolvat
  function caleCircuitMisiune(m, rezolvat) {
    if (!m) {
      return "";
    }
    if (m.circuit) {
      return rezolvat ? m.circuit.rezolvat : m.circuit.inMission;
    }
    if (rezolvat && m.circuitRezolvat) {
      return m.circuitRezolvat;
    }
    if (!rezolvat && m.irlImage) {
      return m.irlImage;
    }
    if (m.diagrama && m.diagrama.src) {
      return m.diagrama.src;
    }
    return "circuite/C" + m.id + (rezolvat ? "R" : "") + ".png";
  }

  // Afișare diagramă circuit sub schema simbolică
  function actualizeazaDiagramaCircuit(m) {
    var img = document.getElementById("img-diagrama-circuit");
    var ph = document.getElementById("diagrama-circuit-placeholder");
    var cap = document.getElementById("diagrama-circuit-caption");
    var cale = document.getElementById("diagrama-placeholder-cale");
    var msg = document.getElementById("diagrama-placeholder-text");
    if (!img || !ph) {
      return;
    }
    var src = caleCircuitMisiune(m, false);
    if (!m || !src) {
      img.classList.add("hidden");
      ph.classList.remove("hidden");
      if (cap) {
        cap.textContent = "";
      }
      if (msg) {
        msg.textContent = textTradus("diagramaPlaceholder");
      }
      if (cale) {
        cale.textContent = "";
      }
      return;
    }
    if (cap) {
      cap.textContent = textDiagrama(m, "caption");
    }
    if (msg) {
      msg.textContent = textTradus("diagramaPlaceholder");
    }
    if (cale) {
      cale.textContent = src;
    }
    img.alt = textDiagrama(m, "alt");
    img.onload = function () {
      img.classList.remove("hidden");
      ph.classList.add("hidden");
    };
    img.onerror = function () {
      img.classList.add("hidden");
      ph.classList.remove("hidden");
    };
    img.classList.add("hidden");
    ph.classList.remove("hidden");
    img.src = src;
  }

  function textRezistentaLive(ohmi) {
    return textTradus("rezistentaLivePrefix") + " " + ohmi + " Ω";
  }

  function obtineRezistentaPotentiometru() {
    var slider = document.getElementById("potentiometer-slider");
    if (slider) {
      return parseInt(slider.value, 10) || 0;
    }
    return rezistentaPotentiometru;
  }

  // Panou slider — vizibil doar la misiunea potențiometru + piesă montată
  function ascundePanouPotentiometru() {
    var panou = document.getElementById("panou-potentiometru");
    var slider = document.getElementById("potentiometer-slider");
    if (panou) {
      panou.classList.add("hidden");
      panou.setAttribute("aria-hidden", "true");
    }
    if (slider) {
      slider.value = "0";
    }
    rezistentaPotentiometru = 0;
    actualizeazaAfisajRezistentaPot();
    if (slotMisiune) {
      slotMisiune.classList.remove("slot-potentiometru");
    }
  }

  function actualizeazaAfisajRezistentaPot() {
    var live = document.getElementById("potentiometru-valoare-live");
    if (live) {
      live.textContent = textRezistentaLive(obtineRezistentaPotentiometru());
    }
    if (piesaMontata && piesaMontata.tip === "potentiometer") {
      piesaMontata.rezistentaReglata = obtineRezistentaPotentiometru();
    }
  }

  function arataPanouPotentiometru() {
    var panou = document.getElementById("panou-potentiometru");
    var slider = document.getElementById("potentiometer-slider");
    if (!panou || !slider) {
      return;
    }
    panou.classList.remove("hidden");
    panou.setAttribute("aria-hidden", "false");
    slider.value = "0";
    rezistentaPotentiometru = 0;
    actualizeazaAfisajRezistentaPot();
    if (slotMisiune) {
      slotMisiune.classList.add("slot-potentiometru");
    }
  }

  // Ascunde potențiometrul pe misiunile 1–4; pe M5 inventarul e complet
  function aplicInventarPentruMisiune(m) {
    var piese = document.querySelectorAll(".piesa-inventar");
    var i;
    var misiunePot = m && m.tip === "potentiometer";
    for (i = 0; i < piese.length; i++) {
      var tip = piese[i].getAttribute("data-tip");
      var ascuns = tip === "potentiometer" && !misiunePot;
      piese[i].classList.toggle("hidden-misiune", ascuns);
    }
    aplicFiltruInventar();
  }

  function textEroareMisiune(m, cheie) {
    if (!m.erori) {
      return "";
    }
    var bloc = m.erori[cheie] || m.erori.default;
    if (!bloc) {
      return "";
    }
    return bloc[limbaCurenta] || bloc.ro || "";
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
    actualizeazaIndicatoareLimba();
    actualizeazaSlotVizual();
    if (stareCarti.tehnic.deschis) {
      randeazaPaginaCarte("tehnic");
    }
    if (stareCarti.jurnal.deschis) {
      randeazaPaginaCarte("jurnal");
    }
    if (!document.getElementById("ecran-misiune").classList.contains("hidden")) {
      var m = obtineMisiuneDupaId(nivelCurentMisiune);
      if (m) {
        titluMisiuneCurenta.textContent = textMisiune(m, "titlu");
        dialogAi.textContent = textMisiune(m, "dialog");
        actualizeazaDiagramaCircuit(m);
        actualizeazaAfisajRezistentaPot();
      }
    }
  }

  // Returnează obiectul cu paginile pentru tipul de carte
  function dateCarte(tip) {
    if (tip === "jurnal") {
      return typeof jurnalData !== "undefined" ? jurnalData : null;
    }
    return typeof manualTehnic !== "undefined" ? manualTehnic : null;
  }

  // Elemente DOM pentru o carte (tehnic sau jurnal)
  function elementeCarte(tip) {
    return {
      overlay: document.getElementById(
        tip === "jurnal" ? "overlay-jurnal" : "overlay-manual-tehnic"
      ),
      coperta: document.getElementById(
        tip === "jurnal" ? "coperta-jurnal" : "coperta-manual-tehnic"
      ),
      interior: document.getElementById(
        tip === "jurnal" ? "interior-jurnal" : "interior-manual-tehnic"
      ),
      stanga: document.getElementById(
        tip === "jurnal" ? "pagina-stanga-jurnal" : "pagina-stanga-tehnic"
      ),
      dreapta: document.getElementById(
        tip === "jurnal" ? "pagina-dreapta-jurnal" : "pagina-dreapta-tehnic"
      ),
      indicator: document.getElementById(
        tip === "jurnal" ? "indicator-pagini-jurnal" : "indicator-pagini-tehnic"
      )
    };
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
    var card = document.querySelector(
      '.card-nivel[data-nivel="' + nivelSelectat + '"]'
    );
    if (!card || card.getAttribute("data-disponibil") !== "1") {
      return;
    }
    loadMission(nivelSelectat);
    arataEcran("misiune");
  }

  // Randare dinamică circuit + texte misiune
  function loadMission(id) {
    var m = obtineMisiuneDupaId(id);
    if (!m) {
      return;
    }
    nivelCurentMisiune = id;
    piesaMontata = null;
    piesaSelectata = null;

    titluMisiuneCurenta.textContent = textMisiune(m, "titlu");
    dialogAi.textContent = textMisiune(m, "dialog");

    puneSprite(document.getElementById("circuit-sursa-sprite"), m.sursa.sprite);
    document.getElementById("circuit-sursa-val").textContent = m.sursa.valoareLabel;

    puneSprite(document.getElementById("circuit-tinta-sprite"), m.tinta.sprite);
    circuitTinta.className = "piesa-schema shrink-0 text-center px-2 py-2 " + m.tinta.clasaAnim;

    var linieTinta = document.getElementById("linie-spre-tinta");
    if (linieTinta) {
      linieTinta.classList.toggle("linie-sageata", !!m.sageti);
    }

    ascundePanouPotentiometru();
    curataSlot();
    reseteazaRezultatVizual();
    actualizeazaDiagramaCircuit(m);
    actualizeazaSelectieInventar();
    aplicInventarPentruMisiune(m);
    if (m.tip === "potentiometer") {
      seteazaFiltruInventar("toate");
    }
    curataCanvas();
    redimensioneazaCanvasDesen();
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function incarcaNivelMisiune(n) {
    loadMission(n);
  }

  function finalizeazaNivel(n) {
    if (progresNiveluri[n]) {
      return;
    }
    progresNiveluri[n] = true;
    actualizeazaProgres();
    actualizeazaCarduriNivel();
    setTimeout(function () {
      arataVictorie(n);
    }, 900);
  }

  function arataVictorie(n) {
    nivelVictorieCurent = n;
    var subtitlu = document.getElementById("victorie-subtitlu");
    var detail = document.getElementById("victorie-detail");
    var m = obtineMisiuneDupaId(n);
    subtitlu.textContent = m ? textMisiune(m, "victorieSub") : "";
    detail.textContent = textTradus("victorieDetail");

    var btnCircuit = document.getElementById("btn-victorie-circuit");
    if (btnCircuit) {
      btnCircuit.classList.toggle("hidden", !caleCircuitMisiune(m, true));
    }

    var btnUrmator = document.getElementById("btn-victorie-urmator");
    if (n < 5) {
      btnUrmator.classList.remove("hidden");
      btnUrmator.setAttribute("data-urmator", String(n + 1));
    } else {
      btnUrmator.classList.add("hidden");
    }

    overlayVictorie.classList.remove("hidden");
    overlayVictorie.setAttribute("aria-hidden", "false");
  }

  function ascundeVictorie() {
    overlayVictorie.classList.add("hidden");
    overlayVictorie.setAttribute("aria-hidden", "true");
    ascundeCircuitRezolvat();
  }

  function ascundeCircuitRezolvat() {
    var overlay = document.getElementById("overlay-circuit-rezolvat");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  // Overlay circuit rezolvat (imagine C#R.png)
  function arataCircuitRezolvatVictorie() {
    var m = obtineMisiuneDupaId(nivelVictorieCurent);
    var src = caleCircuitMisiune(m, true);
    var overlay = document.getElementById("overlay-circuit-rezolvat");
    var img = document.getElementById("img-circuit-rezolvat");
    var cap = document.getElementById("circuit-rezolvat-caption");
    if (!overlay || !img || !src) {
      return;
    }
    img.alt = textDiagrama(m, "alt");
    if (cap) {
      cap.textContent =
        limbaCurenta === "en"
          ? "Solved circuit — mission " + nivelVictorieCurent
          : "Circuit rezolvat — misiunea " + nivelVictorieCurent;
    }
    img.src = src;
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
  }

  // Animație ventilator — misiunea 1
  function pornesteVentilatorAnimatie() {
    if (!circuitTinta) {
      return;
    }
    circuitTinta.classList.add("activ");
    var wrap = document.getElementById("circuit-tinta-sprite");
    var svg = wrap ? wrap.querySelector("#svg-ventilator") : null;
    if (svg) {
      svg.classList.add("rotate-anim");
    }
  }

  function opresteVentilatorAnimatie() {
    if (circuitTinta) {
      circuitTinta.classList.remove("activ");
    }
    var wrap = document.getElementById("circuit-tinta-sprite");
    var svg = wrap ? wrap.querySelector("#svg-ventilator") : null;
    if (svg) {
      svg.classList.remove("rotate-anim");
    }
  }

  function actualizeazaCarduriNivel() {
    var carduri = document.querySelectorAll(".card-nivel");
    var i;
    for (i = 0; i < carduri.length; i++) {
      var n = parseInt(carduri[i].getAttribute("data-nivel"), 10);
      if (progresNiveluri[n]) {
        carduri[i].classList.add("completat");
      }
    }
  }

  // Deschide overlay-ul — întâi coperta, apoi paginile
  function deschideCarte(tip, paginaStart) {
    var el = elementeCarte(tip);
    if (!el.overlay) {
      return;
    }
    if (typeof paginaStart === "number") {
      stareCarti[tip].pagina = paginaStart;
    }
    stareCarti[tip].deschis = false;

    el.overlay.classList.remove("hidden");
    el.overlay.setAttribute("aria-hidden", "false");
    el.coperta.classList.remove("ascuns", "hidden");
    el.interior.classList.add("hidden");
    el.coperta.classList.remove("hidden");
  }

  // După „întoarcerea” copertei — afișează paginile
  function deschideInteriorCarte(tip) {
    var el = elementeCarte(tip);
    stareCarti[tip].deschis = true;

    el.coperta.classList.add("ascuns");
    setTimeout(function () {
      el.coperta.classList.add("hidden");
      el.interior.classList.remove("hidden");
      randeazaPaginaCarte(tip);
    }, 380);
  }

  function inchideCarte(tip) {
    var el = elementeCarte(tip);
    if (!el.overlay) {
      return;
    }
    stareCarti[tip].deschis = false;
    stareCarti[tip].pagina = 0;

    el.overlay.classList.add("hidden");
    el.overlay.setAttribute("aria-hidden", "true");
    el.coperta.classList.remove("ascuns", "hidden");
    el.interior.classList.add("hidden");
  }

  function randeazaPaginaCarte(tip) {
    var cartea = dateCarte(tip);
    var el = elementeCarte(tip);
    if (!cartea || !el.stanga) {
      return;
    }

    var idx = stareCarti[tip].pagina;
    var pagina = cartea.pagini[idx];
    if (!pagina) {
      return;
    }

    el.stanga.innerHTML =
      "<h4>" + pagina.stanga.titlu + "</h4>" + pagina.stanga.html;
    el.dreapta.innerHTML =
      "<h4>" + pagina.dreapta.titlu + "</h4>" + pagina.dreapta.html;

    el.indicator.textContent = idx + 1 + " / " + cartea.totalPagini;

    var btnsAnterioara = document.querySelectorAll(
      '.btn-pag-anterioara[data-carte="' + tip + '"]'
    );
    var btnsUrmatoare = document.querySelectorAll(
      '.btn-pag-urmatoare[data-carte="' + tip + '"]'
    );
    var i;
    for (i = 0; i < btnsAnterioara.length; i++) {
      btnsAnterioara[i].disabled = idx <= 0;
    }
    for (i = 0; i < btnsUrmatoare.length; i++) {
      btnsUrmatoare[i].disabled = idx >= cartea.totalPagini - 1;
    }

    leagaLinkuriCuprins(tip, el.stanga);
  }

  // Linkuri din cuprinsul manualului tehnic
  function leagaLinkuriCuprins(tip, containerStanga) {
    if (tip !== "tehnic" || !containerStanga) {
      return;
    }
    var linkuri = containerStanga.querySelectorAll(".link-capitol");
    var j;
    for (j = 0; j < linkuri.length; j++) {
      linkuri[j].onclick = function () {
        var tinta = parseInt(this.getAttribute("data-sari-la"), 10);
        if (!isNaN(tinta)) {
          stareCarti.tehnic.pagina = tinta;
          randeazaPaginaCarte("tehnic");
        }
      };
    }
  }

  function cloneazaPiesa(date) {
    var copie = {
      tip: date.tip,
      val: date.val,
      sprite: date.sprite,
      orientare: date.orientare
    };
    if (date.tip === "potentiometer") {
      copie.rezistentaReglata = typeof date.rezistentaReglata === "number" ? date.rezistentaReglata : 0;
    }
    return copie;
  }

  function datePiesaDinElement(el) {
    var tip = el.getAttribute("data-tip");
    var valRaw = el.getAttribute("data-val") || el.getAttribute("data-rezistenta");
    if (!tip) {
      if (el.hasAttribute("data-rezistenta")) {
        tip = "rezistor";
      }
    }
    return {
      tip: tip,
      val: valRaw && valRaw.indexOf && valRaw.indexOf(".") >= 0 ? parseFloat(valRaw) : parseInt(valRaw, 10),
      sprite: el.getAttribute("data-sprite"),
      orientare: el.getAttribute("data-orientare") || null
    };
  }

  function curataSlot() {
    piesaMontata = null;
    ascundePanouPotentiometru();
    if (!continutSlot || !slotMisiune) {
      return;
    }
    continutSlot.innerHTML =
      '<span class="text-slot-label">' + textTradus("slotGol") + "</span>";
    slotMisiune.classList.remove("montat", "slot-hover", "slot-ars");
    slotMisiune.classList.add("pulse-anim");
  }

  function actualizeazaSlotVizual() {
    if (!continutSlot || !slotMisiune) {
      return;
    }
    if (!piesaMontata) {
      curataSlot();
      return;
    }
    var cheie =
      piesaMontata.sprite ||
      (typeof cheieSpritePiesa === "function"
        ? cheieSpritePiesa(piesaMontata.tip, piesaMontata.val, piesaMontata.orientare)
        : null);
    if (cheie && componentSprites[cheie]) {
      continutSlot.innerHTML = componentSprites[cheie];
    }
    slotMisiune.classList.add("montat");
    slotMisiune.classList.remove("pulse-anim");
  }

  function monteazaPiesa(date) {
    if (!date || !date.tip) {
      return;
    }
    var m = obtineMisiuneDupaId(nivelCurentMisiune);
    if (m && m.tip !== "potentiometer" && date.tip === "potentiometer") {
      return;
    }
    piesaMontata = cloneazaPiesa(date);
    slotMisiune.classList.remove("slot-hover", "slot-ars");
    actualizeazaSlotVizual();
    if (date.tip === "potentiometer") {
      arataPanouPotentiometru();
    } else {
      ascundePanouPotentiometru();
    }
    reseteazaRezultatVizual();
  }

  function actualizeazaSelectieInventar() {
    var piese = document.querySelectorAll(".piesa-inventar");
    var i;
    for (i = 0; i < piese.length; i++) {
      piese[i].classList.remove("piesa-selectata");
    }
    if (!piesaSelectata) {
      return;
    }
    for (i = 0; i < piese.length; i++) {
      var d = datePiesaDinElement(piese[i]);
      if (
        d.tip === piesaSelectata.tip &&
        d.val === piesaSelectata.val &&
        d.orientare === piesaSelectata.orientare
      ) {
        piese[i].classList.add("piesa-selectata");
      }
    }
  }

  // Filtrare inventar componente
  function aplicFiltruInventar() {
    var piese = document.querySelectorAll(".piesa-inventar");
    var i;
    for (i = 0; i < piese.length; i++) {
      var cat = piese[i].getAttribute("data-categorie");
      var vizibilCat = filtruInventar === "toate" || cat === filtruInventar;
      var ascunsMisiune = piese[i].classList.contains("hidden-misiune");
      piese[i].classList.toggle("hidden", !vizibilCat || ascunsMisiune);
    }
  }

  function seteazaFiltruInventar(cod) {
    filtruInventar = cod;
    var btns = document.querySelectorAll(".filtru-inventar");
    var i;
    for (i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("activ", btns[i].getAttribute("data-filtru") === cod);
    }
    aplicFiltruInventar();
  }

  function selecteazaPiesaInventar(el) {
    piesaSelectata = cloneazaPiesa(datePiesaDinElement(el));
    actualizeazaSelectieInventar();
    reseteazaRezultatVizual();
    if (slotMisiune) {
      slotMisiune.classList.add("slot-tinta");
    }
  }

  function monteazaInSlot() {
    if (!piesaSelectata) {
      if (piesaMontata) {
        curataSlot();
        reseteazaRezultatVizual();
      } else {
        afiseazaMesajDirect(textTradus("mesajSelecteazaPiesa"), "eroare-sub");
      }
      return;
    }
    monteazaPiesa(piesaSelectata);
    if (slotMisiune) {
      slotMisiune.classList.remove("slot-tinta");
    }
  }

  // Drag & drop inventar → slot
  function initDragDropInventar() {
    var piese = document.querySelectorAll(".piesa-inventar");
    var i;
    var tipDate = "application/ohmspace-piesa";

    for (i = 0; i < piese.length; i++) {
      piese[i].setAttribute("draggable", "true");

      piese[i].addEventListener("dragstart", function (ev) {
        var date = datePiesaDinElement(this);
        ev.dataTransfer.setData(tipDate, JSON.stringify(date));
        ev.dataTransfer.effectAllowed = "move";
        this.classList.add("trage-piesa");
        piesaSelectata = cloneazaPiesa(date);
        actualizeazaSelectieInventar();
      });

      piese[i].addEventListener("dragend", function () {
        this.classList.remove("trage-piesa");
      });

      piese[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        selecteazaPiesaInventar(this);
      });
    }

    if (!slotMisiune) {
      return;
    }

    slotMisiune.addEventListener("dragover", function (ev) {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
      slotMisiune.classList.add("slot-hover", "slot-tinta");
    });

    slotMisiune.addEventListener("dragleave", function () {
      slotMisiune.classList.remove("slot-hover");
      if (!piesaSelectata) {
        slotMisiune.classList.remove("slot-tinta");
      }
    });

    slotMisiune.addEventListener("drop", function (ev) {
      ev.preventDefault();
      slotMisiune.classList.remove("slot-hover", "slot-tinta");
      var raw = ev.dataTransfer.getData(tipDate);
      if (!raw) {
        return;
      }
      try {
        monteazaPiesa(JSON.parse(raw));
      } catch (err) {
        return;
      }
      piesaSelectata = null;
      actualizeazaSelectieInventar();
    });
  }

  function initMontajCircuit() {
    var filtre = document.querySelectorAll(".filtru-inventar");
    var i;

    initDragDropInventar();

    if (slotMisiune) {
      slotMisiune.addEventListener("click", monteazaInSlot);
      slotMisiune.addEventListener("mouseenter", function () {
        if (piesaSelectata) {
          slotMisiune.classList.add("slot-hover");
        }
      });
      slotMisiune.addEventListener("mouseleave", function () {
        slotMisiune.classList.remove("slot-hover");
      });
    }

    for (i = 0; i < filtre.length; i++) {
      filtre[i].addEventListener("click", function () {
        seteazaFiltruInventar(this.getAttribute("data-filtru"));
      });
    }

    var sliderPot = document.getElementById("potentiometer-slider");
    if (sliderPot) {
      sliderPot.addEventListener("input", function () {
        rezistentaPotentiometru = parseInt(sliderPot.value, 10) || 0;
        actualizeazaAfisajRezistentaPot();
        reseteazaRezultatVizual();
      });
    }
  }

  function reseteazaRezultatVizual() {
    mesajRezultat.className = "mesaj-rezultat text-sm hidden";
    mesajRezultat.textContent = "";
    if (circuitTinta) {
      circuitTinta.classList.remove("activ", "defect", "flash-laser");
    }
    var grid = document.getElementById("svg-grid");
    if (grid) {
      grid.classList.remove("grid-activ");
    }
    var laser = document.getElementById("svg-laser");
    if (laser) {
      laser.classList.remove("laser-activ");
    }
    opresteVentilatorAnimatie();
    if (circuitTinta) {
      circuitTinta.classList.remove("tinta-sera-led");
    }
    var seraLed = document.getElementById("svg-sera-led");
    if (seraLed) {
      seraLed.classList.remove("sera-led-activ");
    }
  }

  function afiseazaMesajDirect(text, clasaCss) {
    mesajRezultat.textContent = text;
    mesajRezultat.className = "mesaj-rezultat text-sm " + clasaCss;
    mesajRezultat.classList.remove("hidden");
  }

  // Validare tensiune in serie — Misiunea 2
  function verificaSerie(m) {
    if (!piesaMontata || piesaMontata.tip !== "baterie") {
      afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
      return;
    }
    var total = m.sursaV + piesaMontata.val;
    if (total === m.tintaV) {
      circuitTinta.classList.add("activ");
      var gridSvg = document.getElementById("svg-grid");
      if (gridSvg) {
        gridSvg.classList.add("grid-activ");
      }
      afiseazaMesajDirect(textMisiune(m, "mesajSucces"), "succes");
      finalizeazaNivel(m.id);
      return;
    }
    if (piesaMontata.val === 24) {
      afiseazaMesajDirect(textEroareMisiune(m, "24"), "eroare-supra");
      return;
    }
    if (piesaMontata.val === 6) {
      afiseazaMesajDirect(textEroareMisiune(m, "6"), "eroare-sub");
      return;
    }
    afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
  }

  // Validare polarizare diodă — Misiunea 3
  function verificaDioda(m) {
    if (!piesaMontata || piesaMontata.tip !== "dioda") {
      afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
      return;
    }
    if (piesaMontata.orientare === m.valCorect) {
      circuitTinta.classList.add("activ");
      afiseazaMesajDirect(textMisiune(m, "mesajSucces"), "succes");
      finalizeazaNivel(m.id);
      return;
    }
    afiseazaMesajDirect(textEroareMisiune(m, "stanga"), "eroare-sub");
  }

  // Validare capacitate — Misiunea 4
  function verificaCapacitor(m) {
    if (!piesaMontata || piesaMontata.tip !== "capacitor") {
      afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
      return;
    }
    if (piesaMontata.val === m.valCorect) {
      circuitTinta.classList.add("activ", "flash-laser");
      var laserSvg = document.getElementById("svg-laser");
      if (laserSvg) {
        laserSvg.classList.add("laser-activ");
      }
      afiseazaMesajDirect(textMisiune(m, "mesajSucces"), "succes");
      finalizeazaNivel(m.id);
      return;
    }
    if (piesaMontata.val === 0.5) {
      afiseazaMesajDirect(textEroareMisiune(m, "0.5"), "eroare-sub");
      return;
    }
    if (piesaMontata.val === 10) {
      afiseazaMesajDirect(textEroareMisiune(m, "10"), "eroare-supra");
      return;
    }
    afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
  }

  // Validare rezistor — Misiunea 1
  function verificaRezistor(m) {
    if (!piesaMontata || piesaMontata.tip !== "rezistor") {
      afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
      return;
    }
    if (piesaMontata.val === m.valCorect) {
      pornesteVentilatorAnimatie();
      afiseazaMesajDirect(textMisiune(m, "mesajSucces"), "succes");
      finalizeazaNivel(m.id);
      return;
    }
    if (piesaMontata.val === 2) {
      afiseazaMesajDirect(textEroareMisiune(m, "2"), "eroare-supra");
      return;
    }
    if (piesaMontata.val === 50) {
      afiseazaMesajDirect(textEroareMisiune(m, "50"), "eroare-sub");
      return;
    }
    afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
  }

  // Validare potențiometru — Misiunea 5
  function verificaPotentiometru(m) {
    if (!piesaMontata || piesaMontata.tip !== "potentiometer") {
      afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
      return;
    }
    var r = obtineRezistentaPotentiometru();
    if (r === 0) {
      afiseazaMesajDirect(textEroareMisiune(m, "0"), "eroare-supra");
      return;
    }
    if (r === m.valCorect) {
      circuitTinta.classList.add("activ", "tinta-sera-led");
      var ledSvg = document.getElementById("svg-sera-led");
      if (ledSvg) {
        ledSvg.classList.add("sera-led-activ");
      }
      afiseazaMesajDirect(textMisiune(m, "mesajSucces"), "succes");
      finalizeazaNivel(m.id);
      return;
    }
    if (r === 2) {
      afiseazaMesajDirect(textEroareMisiune(m, "2"), "eroare-supra");
      return;
    }
    if (r === 12) {
      afiseazaMesajDirect(textEroareMisiune(m, "12"), "eroare-sub");
      return;
    }
    afiseazaMesajDirect(textEroareMisiune(m, "default"), "eroare-sub");
  }

  function lanseazaCurent() {
    var m = obtineMisiuneDupaId(nivelCurentMisiune);
    if (!m) {
      return;
    }
    if (!piesaMontata) {
      afiseazaMesaj("mesajFaraPiesa", "eroare-sub");
      return;
    }
    reseteazaRezultatVizual();
    if (m.tip === "serie") {
      verificaSerie(m);
    } else if (m.tip === "dioda") {
      verificaDioda(m);
    } else if (m.tip === "capacitor") {
      verificaCapacitor(m);
    } else if (m.tip === "rezistor") {
      verificaRezistor(m);
    } else if (m.tip === "potentiometer") {
      verificaPotentiometru(m);
    }
  }

  function afiseazaMesaj(cheieTraducere, clasaCss) {
    mesajRezultat.textContent = textTradus(cheieTraducere);
    mesajRezultat.className = "mesaj-rezultat text-sm " + clasaCss;
    mesajRezultat.classList.remove("hidden");
  }

  function actualizeazaProgres() {
    var completate = 0;
    if (progresNiveluri[1]) {
      completate++;
    }
    if (progresNiveluri[2]) {
      completate++;
    }
    if (progresNiveluri[3]) {
      completate++;
    }
    if (progresNiveluri[4]) {
      completate++;
    }
    if (progresNiveluri[5]) {
      completate++;
    }
    indicatorProgres.textContent = completate + " / 5";
    if (completate > 0) {
      indicatorProgres.classList.add("text-verde-neon");
    }
  }

  // Caiet desen — canvas (mouse + touch)
  var ctxDesen;
  var canvasDesen;
  var deseneazaActiv = false;
  var modDesen = "pen";
  var ultimX = 0;
  var ultimY = 0;

  function redimensioneazaCanvasDesen() {
    if (!canvasDesen) {
      return;
    }
    var wrap = canvasDesen.parentElement;
    var rect = wrap.getBoundingClientRect();
    var w = Math.floor(rect.width) || 280;
    var h = Math.floor(rect.height) || 200;
    if (w < 10) {
      w = 280;
    }
    if (h < 10) {
      h = 200;
    }
    canvasDesen.width = w;
    canvasDesen.height = h;
    umpleCanvasFundal();
    aplicCtxDesen();
  }

  // Fundal negru-albăstrui caiet desen
  function umpleCanvasFundal() {
    if (!ctxDesen || !canvasDesen) {
      return;
    }
    ctxDesen.globalCompositeOperation = "source-over";
    ctxDesen.shadowBlur = 0;
    ctxDesen.fillStyle = "#0c1222";
    ctxDesen.fillRect(0, 0, canvasDesen.width, canvasDesen.height);
  }

  // Reaplică culoarea instrumentului (width/height resetează contextul canvas)
  function aplicCtxDesen() {
    if (!ctxDesen || !canvasDesen) {
      return;
    }
    ctxDesen.lineCap = "round";
    ctxDesen.lineJoin = "round";
    if (modDesen === "pen") {
      ctxDesen.globalCompositeOperation = "source-over";
      ctxDesen.strokeStyle = "#ffffff";
      ctxDesen.shadowBlur = 0;
      ctxDesen.lineWidth = 2;
      canvasDesen.style.cursor = "crosshair";
    } else {
      ctxDesen.globalCompositeOperation = "destination-out";
      ctxDesen.lineWidth = 14;
      canvasDesen.style.cursor = "cell";
    }
  }

  function pozitiePeCanvas(ev) {
    var rect = canvasDesen.getBoundingClientRect();
    var clientX = ev.clientX;
    var clientY = ev.clientY;
    if (ev.touches && ev.touches.length) {
      clientX = ev.touches[0].clientX;
      clientY = ev.touches[0].clientY;
    }
    return {
      x: ((clientX - rect.left) / rect.width) * canvasDesen.width,
      y: ((clientY - rect.top) / rect.height) * canvasDesen.height
    };
  }

  function incepeDesen(ev) {
    ev.preventDefault();
    aplicCtxDesen();
    deseneazaActiv = true;
    var p = pozitiePeCanvas(ev);
    ultimX = p.x;
    ultimY = p.y;
    ctxDesen.beginPath();
    ctxDesen.moveTo(ultimX, ultimY);
  }

  function continuaDesen(ev) {
    if (!deseneazaActiv) {
      return;
    }
    ev.preventDefault();
    var p = pozitiePeCanvas(ev);
    ctxDesen.lineTo(p.x, p.y);
    ctxDesen.stroke();
    ultimX = p.x;
    ultimY = p.y;
  }

  function opresteDesen() {
    deseneazaActiv = false;
  }

  function seteazaModDesen(mod) {
    modDesen = mod;
    document.getElementById("btn-pen").classList.toggle("activ", mod === "pen");
    document.getElementById("btn-radiera").classList.toggle("activ", mod === "radiera");
    document.getElementById("btn-pen").setAttribute("aria-pressed", mod === "pen");
    document.getElementById("btn-radiera").setAttribute("aria-pressed", mod === "radiera");
    aplicCtxDesen();
  }

  function curataCanvas() {
    umpleCanvasFundal();
    aplicCtxDesen();
  }

  function initScratchpadDesen() {
    canvasDesen = document.getElementById("scratchpad-canvas");
    if (!canvasDesen) {
      return;
    }
    ctxDesen = canvasDesen.getContext("2d");
    ctxDesen.lineCap = "round";
    ctxDesen.lineJoin = "round";
    seteazaModDesen("pen");

    canvasDesen.addEventListener("mousedown", incepeDesen);
    canvasDesen.addEventListener("mousemove", continuaDesen);
    canvasDesen.addEventListener("mouseup", opresteDesen);
    canvasDesen.addEventListener("mouseleave", opresteDesen);
    canvasDesen.addEventListener("touchstart", incepeDesen, { passive: false });
    canvasDesen.addEventListener("touchmove", continuaDesen, { passive: false });
    canvasDesen.addEventListener("touchend", opresteDesen);

    document.getElementById("btn-pen").addEventListener("click", function () {
      seteazaModDesen("pen");
    });
    document.getElementById("btn-radiera").addEventListener("click", function () {
      seteazaModDesen("radiera");
    });
    document.getElementById("btn-curata-desen").addEventListener("click", curataCanvas);

    window.addEventListener("resize", redimensioneazaCanvasDesen);
    setTimeout(redimensioneazaCanvasDesen, 100);
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
      lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
    }
  }

  // Butoane copertă, pagini și închidere — ambele cărți
  function initEvenimenteCarti() {
    var tipuri = ["tehnic", "jurnal"];
    var t;

    document.getElementById("btn-deschide-tehnic").addEventListener("click", function () {
      deschideInteriorCarte("tehnic");
    });
    document.getElementById("btn-deschide-jurnal").addEventListener("click", function () {
      deschideInteriorCarte("jurnal");
    });

    var coperte = document.querySelectorAll(".coperta-figura");
    var c;
    for (c = 0; c < coperte.length; c++) {
      coperte[c].addEventListener("click", function () {
        var wrap = this.closest(".carte-wrap");
        if (wrap.classList.contains("carte-jurnal")) {
          deschideInteriorCarte("jurnal");
        } else {
          deschideInteriorCarte("tehnic");
        }
      });
    }

    var btnsInchide = document.querySelectorAll(".btn-inchide-carte");
    for (t = 0; t < btnsInchide.length; t++) {
      btnsInchide[t].addEventListener("click", function () {
        inchideCarte(this.getAttribute("data-carte"));
      });
    }

    var overlays = document.querySelectorAll(".overlay-carte");
    for (t = 0; t < overlays.length; t++) {
      overlays[t].addEventListener("click", function (ev) {
        if (ev.target === this) {
          if (this.id === "overlay-jurnal") {
            inchideCarte("jurnal");
          } else {
            inchideCarte("tehnic");
          }
        }
      });
    }

    var btnsAnterioara = document.querySelectorAll(".btn-pag-anterioara");
    for (t = 0; t < btnsAnterioara.length; t++) {
      btnsAnterioara[t].addEventListener("click", function () {
        var tip = this.getAttribute("data-carte");
        if (stareCarti[tip].pagina > 0) {
          stareCarti[tip].pagina--;
          randeazaPaginaCarte(tip);
        }
      });
    }

    var btnsUrmatoare = document.querySelectorAll(".btn-pag-urmatoare");
    for (t = 0; t < btnsUrmatoare.length; t++) {
      btnsUrmatoare[t].addEventListener("click", function () {
        var tip = this.getAttribute("data-carte");
        var cartea = dateCarte(tip);
        if (cartea && stareCarti[tip].pagina < cartea.totalPagini - 1) {
          stareCarti[tip].pagina++;
          randeazaPaginaCarte(tip);
        }
      });
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
      deschideCarte("tehnic", 0);
    });

    document.getElementById("btn-start-jurnal").addEventListener("click", function () {
      deschideCarte("jurnal", 0);
    });

    document.getElementById("btn-hub-inapoi").addEventListener("click", function () {
      arataEcran("meniu");
    });

    document.getElementById("btn-nav-misiuni").addEventListener("click", function () {
      if (!nivelSelectat || nivelSelectat < 1) {
        nivelSelectat = 1;
      }
      loadMission(nivelSelectat);
      arataEcran("misiune");
    });

    document.getElementById("btn-nav-manual").addEventListener("click", function () {
      deschideCarte("tehnic", 0);
    });

    document.getElementById("btn-nav-jurnal").addEventListener("click", function () {
      deschideCarte("jurnal", 0);
    });

    document.getElementById("btn-misiune-inapoi").addEventListener("click", function () {
      arataEcran("meniu");
    });

    document.getElementById("btn-manual-din-joc").addEventListener("click", function () {
      deschideCarte("tehnic", stareCarti.tehnic.pagina);
    });

    initEvenimenteCarti();

    document.getElementById("btn-lanseaza-curent").addEventListener("click", lanseazaCurent);

    document.getElementById("btn-victorie-circuit").addEventListener("click", function () {
      arataCircuitRezolvatVictorie();
    });

    document.getElementById("btn-inchide-circuit-rezolvat").addEventListener("click", function () {
      ascundeCircuitRezolvat();
    });

    var overlayCircuitRez = document.getElementById("overlay-circuit-rezolvat");
    if (overlayCircuitRez) {
      overlayCircuitRez.addEventListener("click", function (ev) {
        if (ev.target === overlayCircuitRez) {
          ascundeCircuitRezolvat();
        }
      });
    }

    document.getElementById("btn-victorie-meniu").addEventListener("click", function () {
      ascundeVictorie();
      arataEcran("meniu");
    });

    document.getElementById("btn-victorie-urmator").addEventListener("click", function () {
      var urm = parseInt(this.getAttribute("data-urmator"), 10);
      ascundeVictorie();
      nivelSelectat = urm;
      var carduri = document.querySelectorAll(".card-nivel");
      var c;
      for (c = 0; c < carduri.length; c++) {
        carduri[c].classList.remove("activ");
        if (parseInt(carduri[c].getAttribute("data-nivel"), 10) === urm) {
          carduri[c].classList.add("activ");
        }
      }
      incarcaNivelMisiune(urm);
      arataEcran("misiune");
    });

    initMontajCircuit();
    initScratchpadDesen();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSpriteUri();
    initIconiteLucide();
    initEvenimente();
    arataEcran("splash");
    aplicaLimba();
    actualizeazaProgres();
    actualizeazaCarduriNivel();
    loadMission(1);
  });
})();
