/**
 * OhmSpace — date centrale: i18n, misiuni, inventar, cărți.
 */

var translations = {
  ro: {
    splashSubtitlu: "Baza Lunară Artemis-Prime",
    btnStart: "START",
    subtitluStart: "Simulare educațională — Fizică & Electronică",
    labelGhidMeniu: "Consilier — OHM-7",
    ghidMeniu1: "Alege o misiune. Citește manualul pentru teorie.",
    titluNiveluri: "Selectează nivelul",
    btnPorneste: "Inițiază Misiunea",
    navManual: "Manual Tehnic (Teorie)",
    navJurnal: "Jurnal de Bord (Poveste)",
    btnSetari: "Setări",
    titluSetari: "Setări",
    labelLimba: "Limba interfeței",
    titluHub: "Panou de Comandă — Baza Artemis-Prime",
    subtitluHub: "Selectează modulul de lucru",
    btnInapoi: "← Meniu principal",
    navMisiuni: "Sistem de Misiuni",
    navMisiuniDesc: "Rezolvă probleme de circuit pe Lună",
    navManualDesc: "Legea lui Ohm, componente",
    navJurnalDesc: "Lore și fapte spațiale",
    labelProgres: "Progres misiuni:",
    btnDeschideManual: "Manual",
    btnInapoiMeniu: "← Meniu",
    labelAi: "OHM-7",
    slotGol: "[ SLOT ]",
    labelInventar: "Inventar",
    filtruToate: "Toate",
    filtruPutere: "Putere",
    filtruDiode: "Diode",
    filtruCapacitor: "Condensatoare",
    filtruRezistori: "Rezistori",
    bat6: "6 V", bat12: "12 V", bat24: "24 V",
    diodaF: "Diodă →", diodaR: "Diodă ←",
    cap05: "0.5 F", cap2: "2.0 F", cap10: "10 F",
    rez2: "2 Ω", rez12: "12 Ω", rez50: "50 Ω",
    potentiometru: "Potențiometru",
    btnLanseaza: "Lansează Curentul",
    labelScratchpad: "Caiet de calcule",
    hintDesen: "Desenează formule sau scheme.",
    labelDiagramaCircuit: "Diagramă circuit",
    labelPotentiometru: "Calibrare potențiometru",
    rezistentaLivePrefix: "Rezistență curentă:",
    mesajFaraPiesa: "Montează o piesă în slot.",
    mesajSelecteazaPiesa: "Selectează o piesă din inventar.",
    titluVictorie: "Misiune reușită!",
    victorieDetail: "OHM-7 — progres înregistrat.",
    btnVictorieMeniu: "Meniu principal",
    btnVictorieUrmator: "Următoarea misiune →",
    btnVictorieCircuit: "Vezi circuitul rezolvat",
    titluCircuitRezolvat: "Circuit rezolvat",
    titluManual: "Manual Tehnic",
    titluJurnal: "Jurnal de Bord",
    hintCoperta: "Apasă coperta pentru a deschide cartea",
    btnDeschideCarte: "Deschide manualul",
    btnDeschideJurnal: "Deschide jurnalul",
    btnPagAnterioara: "Pagina precedentă",
    btnPagUrmatoare: "Pagina următoare",
    diagramaPlaceholder: "Adaugă imaginea în:",
    errPiesa: "Montează componenta corectă pentru această misiune."
  },
  en: {
    splashSubtitlu: "Artemis-Prime Lunar Base",
    btnStart: "START",
    subtitluStart: "Educational simulation — Physics & Electronics",
    labelGhidMeniu: "Advisor — OHM-7",
    ghidMeniu1: "Pick a mission. Read the manual for theory.",
    titluNiveluri: "Select level",
    btnPorneste: "Start Mission",
    navManual: "Technical Manual",
    navJurnal: "Logbook",
    btnSetari: "Settings",
    titluSetari: "Settings",
    labelLimba: "Interface language",
    titluHub: "Command Panel — Artemis-Prime",
    subtitluHub: "Select a work module",
    btnInapoi: "← Main menu",
    navMisiuni: "Mission System",
    navMisiuniDesc: "Solve lunar circuit problems",
    navManualDesc: "Ohm's law, components",
    navJurnalDesc: "Lore and space facts",
    labelProgres: "Progress:",
    btnDeschideManual: "Manual",
    btnInapoiMeniu: "← Menu",
    labelAi: "OHM-7",
    slotGol: "[ SLOT ]",
    labelInventar: "Inventory",
    filtruToate: "All",
    filtruPutere: "Power",
    filtruDiode: "Diodes",
    filtruCapacitor: "Capacitors",
    filtruRezistori: "Resistors",
    bat6: "6 V", bat12: "12 V", bat24: "24 V",
    diodaF: "Diode →", diodaR: "Diode ←",
    cap05: "0.5 F", cap2: "2.0 F", cap10: "10 F",
    rez2: "2 Ω", rez12: "12 Ω", rez50: "50 Ω",
    potentiometru: "Potentiometer",
    btnLanseaza: "Launch Current",
    labelScratchpad: "Scratchpad",
    hintDesen: "Draw formulas or schematics.",
    labelDiagramaCircuit: "Circuit diagram",
    labelPotentiometru: "Potentiometer calibration",
    rezistentaLivePrefix: "Current resistance:",
    mesajFaraPiesa: "Place a part in the slot.",
    mesajSelecteazaPiesa: "Select a part from inventory.",
    titluVictorie: "Mission complete!",
    victorieDetail: "OHM-7 — progress logged.",
    btnVictorieMeniu: "Main menu",
    btnVictorieUrmator: "Next mission →",
    btnVictorieCircuit: "View solved circuit",
    titluCircuitRezolvat: "Solved circuit",
    titluManual: "Technical Manual",
    titluJurnal: "Logbook",
    hintCoperta: "Click the cover to open",
    btnDeschideCarte: "Open manual",
    btnDeschideJurnal: "Open logbook",
    btnPagAnterioara: "Previous",
    btnPagUrmatoare: "Next page",
    diagramaPlaceholder: "Add image at:",
    errPiesa: "Install the correct component for this mission."
  }
};

var inventoryParts = [
  { cat: "putere", tip: "baterie", val: 6, sprite: "baterie6", labelKey: "bat6" },
  { cat: "putere", tip: "baterie", val: 12, sprite: "baterie12", labelKey: "bat12" },
  { cat: "putere", tip: "baterie", val: 24, sprite: "baterie24", labelKey: "bat24" },
  { cat: "dioda", tip: "dioda", val: 1, orientare: "dreapta", sprite: "diodaDreapta", labelKey: "diodaF" },
  { cat: "dioda", tip: "dioda", val: 1, orientare: "stanga", sprite: "diodaStanga", labelKey: "diodaR" },
  { cat: "capacitor", tip: "capacitor", val: 0.5, sprite: "cap05", labelKey: "cap05" },
  { cat: "capacitor", tip: "capacitor", val: 2, sprite: "cap2", labelKey: "cap2" },
  { cat: "capacitor", tip: "capacitor", val: 10, sprite: "cap10", labelKey: "cap10" },
  { cat: "rezistor", tip: "rezistor", val: 2, sprite: "rezistor2", labelKey: "rez2" },
  { cat: "rezistor", tip: "rezistor", val: 12, sprite: "rezistor12", labelKey: "rez12" },
  { cat: "rezistor", tip: "rezistor", val: 50, sprite: "rezistor50", labelKey: "rez50" },
  { cat: "rezistor", tip: "potentiometer", val: 0, sprite: "potentiometru", labelKey: "potentiometru" }
];

var missionsData = [
  {
    id: 1,
    type: "rezistor",
    menuDesc: { ro: "Sector Alpha · 12 Ω · 2 A", en: "Sector Alpha · 12 Ω · 2 A" },
    title: { ro: "Misiunea 1 — Ventilator Sector Alpha", en: "Mission 1 — Sector Alpha Fan" },
    dialog: {
      ro: "ALERTĂ: Ventilatorul are nevoie de exact 2 A la 24 V. Calculează R = U/I și montează rezistorul potrivit!",
      en: "ALERT: The fan needs exactly 2 A at 24 V. Calculate R = U/I and place the correct resistor!"
    },
    source: { sprite: "baterie24", label: "24 V" },
    target: { sprite: "ventilator", fxClass: "tinta-ventilator", fxId: "svg-ventilator", fxAnim: "rotate-anim" },
    circuit: { inMission: "circuite/C1.png", solved: "circuite/C1R.png" },
    U: 24,
    I_target: 2,
    answer: 12,
    arrows: false,
    win: { ro: "Curent stabil la 2 A — ventilator repornit.", en: "Stable 2 A — fan restarted." },
    success: {
      ro: "I = 24 V / 12 Ω = 2 A. Ventilatorul funcționează.",
      en: "I = 24 V / 12 Ω = 2 A. The fan is running."
    },
    errors: {
      wrongPart: {
        ro: "EROARE: Montează un rezistor. Legea lui Ohm: I = U/R.",
        en: "ERROR: Place a resistor. Ohm's law: I = U/R."
      },
      2: {
        ro: "EROARE: R = 2 Ω → I = 24/2 = 12 A (supracurent, risc scurtcircuit).",
        en: "ERROR: R = 2 Ω → I = 24/2 = 12 A (overcurrent, short-circuit risk)."
      },
      50: {
        ro: "EROARE: R = 50 Ω → I = 24/50 = 0,48 A (ventilatorul nu pornește).",
        en: "ERROR: R = 50 Ω → I = 24/50 = 0.48 A (fan won't start)."
      },
      default: {
        ro: "EROARE: I = 24/R. Țintă: I = 2 A → R = 12 Ω.",
        en: "ERROR: I = 24/R. Target: I = 2 A → R = 12 Ω."
      }
    }
  },
  {
    id: 2,
    type: "serie",
    menuDesc: { ro: "Sub-stație · 36 V", en: "Substation · 36 V" },
    title: { ro: "Misiunea 2 — Tensiuni în serie", en: "Mission 2 — Series voltage" },
    dialog: {
      ro: "Grila necesită 36 V. Tensiunile în serie se adună: U_total = U₁ + U₂.",
      en: "Grid needs 36 V. Series voltages add: U_total = U₁ + U₂."
    },
    source: { sprite: "baterie24", label: "24 V" },
    target: { sprite: "grid", fxClass: "tinta-grid", fxId: "svg-grid", fxAnim: "grid-activ" },
    circuit: { inMission: "circuite/C2.png", solved: "circuite/C2R.png" },
    U_base: 24,
    U_target: 36,
    answer: 12,
    arrows: false,
    win: { ro: "Grila la 36 V — sub-stație online.", en: "Grid at 36 V — online." },
    success: {
      ro: "24 V + 12 V = 36 V. U_total = U₁ + U₂.",
      en: "24 V + 12 V = 36 V. U_total = U₁ + U₂."
    },
    errors: {
      wrongPart: {
        ro: "EROARE: Montează o baterie auxiliară în serie.",
        en: "ERROR: Add a series battery."
      },
      24: {
        ro: "EROARE: 24+24 = 48 V > 36 V (supratensiune pe grilă).",
        en: "ERROR: 24+24 = 48 V > 36 V (grid overvoltage)."
      },
      6: {
        ro: "EROARE: 24+6 = 30 V < 36 V (tensiune insuficientă).",
        en: "ERROR: 24+6 = 30 V < 36 V (insufficient voltage)."
      },
      default: {
        ro: "EROARE: U_total = 24 + U_bat. Țintă: 36 V → +12 V.",
        en: "ERROR: U_total = 24 + U_bat. Target: 36 V → +12 V."
      }
    }
  },
  {
    id: 3,
    type: "dioda",
    menuDesc: { ro: "Antenă · polarizare", en: "Antenna · polarization" },
    title: { ro: "Misiunea 3 — Diodă protecție", en: "Mission 3 — Protection diode" },
    dialog: {
      ro: "Feedback EM de la antenă. Dioda → permite curent spre exterior; ← blochează (0 A).",
      en: "EM feedback from antenna. Diode → allows forward current; ← blocks (0 A)."
    },
    source: { sprite: "sursa", label: "12 V" },
    target: { sprite: "antena", fxClass: "tinta-antena" },
    circuit: { inMission: "circuite/C3.png", solved: "circuite/C3R.png" },
    answer: "dreapta",
    arrows: true,
    win: { ro: "Diodă OK — antenă transmițând.", en: "Diode OK — transmitting." },
    success: {
      ro: "Polarizare directă: curent spre antenă, feedback blocat.",
      en: "Forward bias: current to antenna, feedback blocked."
    },
    errors: {
      wrongPart: { ro: "EROARE: Montează o diodă.", en: "ERROR: Install a diode." },
      stanga: {
        ro: "EROARE: Diodă ← = polarizare inversă → circuit deschis, I = 0 A.",
        en: "ERROR: Diode ← = reverse bias → open circuit, I = 0 A."
      },
      default: {
        ro: "EROARE: Sensul diodei determină dacă I > 0 sau I = 0.",
        en: "ERROR: Diode direction sets I > 0 or I = 0."
      }
    }
  },
  {
    id: 4,
    type: "capacitor",
    menuDesc: { ro: "Laser · 2 F", en: "Laser · 2 F" },
    title: { ro: "Misiunea 4 — Condensator laser", en: "Mission 4 — Laser capacitor" },
    dialog: {
      ro: "Burst laser: 2 F pentru descărcare rapidă. Q = C·U — capacitate insuficientă = fără foc.",
      en: "Laser burst: 2 F for rapid discharge. Q = C·U — insufficient C = no fire."
    },
    source: { sprite: "sursa", label: "Gen." },
    target: { sprite: "laser", fxClass: "tinta-laser flash-laser", fxId: "svg-laser", fxAnim: "laser-activ" },
    circuit: { inMission: "circuite/C4.png", solved: "circuite/C4R.png" },
    answer: 2,
    arrows: false,
    win: { ro: "Laser încărcat — descărcare OK.", en: "Laser charged — discharge OK." },
    success: { ro: "C = 2 F — energie suficientă pentru burst.", en: "C = 2 F — enough energy for burst." },
    errors: {
      wrongPart: { ro: "EROARE: Montează un condensator.", en: "ERROR: Place a capacitor." },
      "0.5": {
        ro: "EROARE: 0,5 F — energie stocată prea mică, laser offline.",
        en: "ERROR: 0.5 F — stored energy too low, laser offline."
      },
      10: {
        ro: "EROARE: 10 F — descărcare necontrolată, laser offline.",
        en: "ERROR: 10 F — uncontrolled discharge, laser offline."
      },
      default: {
        ro: "EROARE: Pentru burst la 2 F, alege exact 2,0 F.",
        en: "ERROR: For 2 F burst, choose exactly 2.0 F."
      }
    }
  },
  {
    id: 5,
    type: "potentiometer",
    menuDesc: { ro: "Seră LED · 1,5 A · 8 Ω", en: "Greenhouse · 1.5 A · 8 Ω" },
    title: { ro: "Misiunea 5 — Lux seră hidroponică", en: "Mission 5 — Greenhouse lux" },
    dialog: {
      ro: "Bio-dom: limitează la 1,5 A la 12 V. Montează potențiometrul și calibrează: R = 12/1,5 = 8 Ω.",
      en: "Bio-dome: limit to 1.5 A at 12 V. Insert potentiometer and calibrate: R = 12/1.5 = 8 Ω."
    },
    source: { sprite: "baterie12", label: "12 V" },
    target: { sprite: "seraLed", fxClass: "tinta-sera-led", fxId: "svg-sera-led", fxAnim: "sera-led-activ" },
    circuit: { inMission: "circuite/C5.png", solved: "circuite/C5R.png" },
    U: 12,
    I_target: 1.5,
    answer: 8,
    potMax: 20,
    arrows: false,
    win: { ro: "1,5 A stabil — culturi protejate.", en: "Stable 1.5 A — crops safe." },
    success: {
      ro: "R = 8 Ω → I = 12/8 = 1,5 A. LED-uri verzi stabile.",
      en: "R = 8 Ω → I = 12/8 = 1.5 A. Stable green LEDs."
    },
    errors: {
      wrongPart: {
        ro: "EROARE: Montează potențiometrul și reglează rezistența.",
        en: "ERROR: Insert potentiometer and adjust resistance."
      },
      0: {
        ro: "EROARE: R = 0 Ω → I = ∞ (scurtcircuit).",
        en: "ERROR: R = 0 Ω → I = ∞ (short circuit)."
      },
      2: {
        ro: "EROARE: R = 2 Ω → I = 12/2 = 6 A (supra-iluminare).",
        en: "ERROR: R = 2 Ω → I = 12/2 = 6 A (over-illumination)."
      },
      12: {
        ro: "EROARE: R = 12 Ω → I = 12/12 = 1 A (lumină insuficientă).",
        en: "ERROR: R = 12 Ω → I = 12/12 = 1 A (insufficient light)."
      },
      default: {
        ro: "EROARE: I = 12/R. Țintă: 1,5 A → R = 8 Ω.",
        en: "ERROR: I = 12/R. Target: 1.5 A → R = 8 Ω."
      }
    }
  }
];

var misiuniOhmSpace = missionsData;

// —— Cărți: format editabil ——
// Fiecare pagină = o foaie deschisă (coloană stânga + dreapta).
// Câmpuri: titlu { ro, en }, paragrafe[], capitole[] (cuprins), triunghiOhm, formula.

/**
 * Alege textul în limba activă (fallback: română).
 */
function pickText(obj, lang) {
  if (!obj) {
    return "";
  }
  if (typeof obj === "string") {
    return obj;
  }
  return obj[lang] != null ? obj[lang] : obj.ro;
}

/**
 * Transformă o coloană (definiție) în titlu + HTML pentru randare.
 */
function renderBookSide(side, lang) {
  if (!side) {
    return { titlu: "", html: "" };
  }
  var parts = [];
  var p, i;

  if (side.capitole) {
    for (i = 0; i < side.capitole.length; i++) {
      p = side.capitole[i];
      parts.push(
        '<button type="button" class="link-capitol" data-sari-la="' +
          p.sariLa +
          '">' +
          pickText(p.eticheta, lang) +
          "</button>"
      );
    }
  }

  if (side.formula) {
    parts.push("<p><strong>" + pickText(side.formula, lang) + "</strong></p>");
  }

  if (side.triunghiOhm) {
    parts.push(
      '<div class="triunghi-ohm"><span class="poz-u">U</span><span class="poz-i">I</span><span class="poz-r">R</span></div>'
    );
  }

  if (side.paragrafe) {
    for (i = 0; i < side.paragrafe.length; i++) {
      p = side.paragrafe[i];
      if (p.emphasis) {
        parts.push("<p><strong>" + pickText(p, lang) + "</strong></p>");
      } else {
        parts.push("<p>" + pickText(p, lang) + "</p>");
      }
    }
  }

  return { titlu: pickText(side.titlu, lang), html: parts.join("") };
}

// —— MANUAL TEHNIC: editează textele de mai jos ——

var manualPageDefs = [
  {
    // Pagina 0 — Cuprins
    stanga: {
      titlu: { ro: "Cuprins", en: "Contents" },
      capitole: [
        { sariLa: 1, eticheta: { ro: "Legea lui Ohm", en: "Ohm's law" } },
        { sariLa: 2, eticheta: { ro: "Tensiuni în serie", en: "Series voltage" } },
        { sariLa: 3, eticheta: { ro: "Diodă", en: "Diode" } },
        { sariLa: 4, eticheta: { ro: "Condensator", en: "Capacitor" } },
        { sariLa: 5, eticheta: { ro: "Inventar & validare", en: "Inventory & validation" } }
      ]
    },
    dreapta: {
      titlu: { ro: "Flux circuit", en: "Circuit flow" },
      paragrafe: [
        {
          ro: "Baterie → [SLOT] → Sarcină",
          en: "Battery → [SLOT] → Load",
          emphasis: true
        },
        {
          ro: "Montează piesa corectă, apoi apasă «Lansează Curentul».",
          en: "Place the correct part, then press «Launch Current»."
        }
      ]
    }
  },
  {
    // Pagina 1 — Legea lui Ohm (Misiunea 1)
    stanga: {
      titlu: { ro: "Legea lui Ohm", en: "Ohm's law" },
      formula: { ro: "I = U / R Acopera cu degeul necunoscuta", en: "I = U / R Cover with the finger the unknown value" },
      triunghiOhm: true,
      paragrafe: [
        {
          ro: "Curentul depinde de tensiune și rezistență.",
          en: "Current depends on voltage and resistance."
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Exemplu — Ventilator", en: "Example — Fan" },
      paragrafe: [
        {
          ro: "Sursă: 24 V. Țintă: 2 A.",
          en: "Source: 24 V. Target: 2 A."
        },
        {
          ro: "R = U / I = 24 / 2 = 12 Ω",
          en: "R = U / I = 24 / 2 = 12 Ω",
          emphasis: true
        }
      ]
    }
  },
  {
    // Pagina 2 — Serie (Misiunea 2)
    stanga: {
      titlu: { ro: "Tensiuni în serie", en: "Series voltages" },
      paragrafe: [
        {
          ro: "Atunci când două sau mai multe baterii sunt conectate în serie (borna + a unei baterii legată la borna - a următoarei), tensiunile lor se ADUNĂ.",
          en: "When two or more batteries are connected in series (the + terminal of one battery connected to the - terminal of the next), their voltages ADD UP."
        },
        {
          ro: "U_total = U₁ + U₂ + …",
          en: "U_total = U₁ + U₂ + …",
          emphasis: true
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Exemplu — Grilă 36 V", en: "Example — 36 V grid" },
      paragrafe: [
        {
          ro: "Baterie existentă: 24 V.",
          en: "Existing battery: 24 V."
        },
        {
          ro: "24 V + 12 V = 36 V",
          en: "24 V + 12 V = 36 V",
          emphasis: true
        }
      ]
    }
  },
  {
    // Pagina 3 — Diodă (Misiunea 3)
    stanga: {
      titlu: { ro: "Diodă", en: "Diode" },
      paragrafe: [
        {
          ro: "Conduce curent într-un singur sens.",
          en: "Conducts current in one direction only."
        },
        {
          ro: "Polarizare inversă → circuit deschis, I = 0 A.",
          en: "Reverse bias → open circuit, I = 0 A.",
          emphasis: true
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Antenă RF", en: "RF antenna" },
      paragrafe: [
        {
          ro: "Dioda → permite transmisia spre exterior.",
          en: "Diode → allows outward transmission."
        },
        {
          ro: "Blochează feedback-ul electromagnetic.",
          en: "Blocks electromagnetic feedback."
        }
      ]
    }
  },
  {
    // Pagina 4 — Condensator (Misiunea 4)
    stanga: {
      titlu: { ro: "Condensator", en: "Capacitor" },
      paragrafe: [
        {
          ro: "Stochează sarcină electrică.",
          en: "Stores electric charge."
        },
        {
          ro: "Unitate: Farad (F). Relație: Q = C · U",
          en: "Unit: Farad (F). Relation: Q = C · U",
          emphasis: true
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Laser — burst", en: "Laser — burst" },
      paragrafe: [
        {
          ro: "Impuls rapid: alege 2,0 F.",
          en: "Rapid pulse: choose 2.0 F."
        },
        {
          ro: "Capacitate prea mică sau prea mare → laser offline.",
          en: "Capacity too low or too high → laser offline."
        }
      ]
    }
  },
  {
    // Pagina 5 — Inventar (toate misiunile)
    stanga: {
      titlu: { ro: "Inventar", en: "Inventory" },
      paragrafe: [
        {
          ro: "Filtrează după categorie: putere, diode, condensatoare, rezistori.",
          en: "Filter by category: power, diodes, capacitors, resistors."
        },
        {
          ro: "Trage piesa în [SLOT] sau selecteaz-o și apasă slotul.",
          en: "Drag a part to [SLOT] or select it and click the slot.",
          emphasis: true
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Validare", en: "Validation" },
      paragrafe: [
        {
          ro: "«Lansează Curentul» verifică soluția.",
          en: "«Launch Current» checks your solution.",
          emphasis: true
        },
        {
          ro: "Mesajele explică formula folosită dacă răspunsul e greșit.",
          en: "Feedback shows the formula used if the answer is wrong."
        }
      ]
    }
  }
];

// —— JURNAL: editează textele de mai jos ——

var jurnalPageDefs = [
  {
    // Pagina 0
    stanga: {
      titlu: { ro: "Ziua 52", en: "Day 52" },
      paragrafe: [
        {
          ro: "Sub-stația principală rulează la 24 V.",
          en: "Main substation running at 24 V."
        },
        { 
          ro: "Am montat releul pentru antenă — urmează testul diodei.",
          en: "Mounted the antenna relay — diode test next."
        }
      ]
    },
    dreapta: {
      titlu: { ro: "Lag", en: "Lag" },
      paragrafe: [
        {
          ro: "Comunicațiile cu Pământul au o întârziere de 1.3 secunde. Sună puțin, dar e suficient cât să intre în buclă orice sistem de comandă automată. De aceea, pentru manevre critice de andocare, folosim circuite logice cablate (hardwired), nu software. E mult mai sigur să te bazezi pe o diodă decât pe un algoritm care 'gândește' cu întârziere.",
          en: "Communication with Earth has a 1.3 second delay. It may sound little, but it's enough to enter any automatic control loop. Therefore, for critical docking maneuvers, we use hardwired logic circuits (hardwired), not software. It is much safer to rely on a diode than on an algorithm that 'thinks' with a delay."
        },

      ]
    }
  },
  {
    // Pagina 1
    stanga: {
      titlu: { ro: "Spatiu", en: "Space" },
      paragrafe: [
        {
          ro: "Un lucru pe care nu-l înveți la facultate: în vidul spațial, electronica se supraîncălzește mult mai repede. Pe Pământ, aerul disipă căldura prin convecție. Aici, singura cale de răcire este radiația termică. Dacă indicatorul de temperatură sare de 80°C, opriți tot sau placa de bază va deveni o pastă de siliciu.",
          en: "In space, electronics heat up much faster than on Earth. On Earth, air dissipates heat by convection. Here, the only cooling method is thermal radiation. If the temperature gauge jumps to 80°C, shut down everything or the base plate will become silicon paste."
        },

      ]
    },
    dreapta: {
      titlu: { ro: "Fun facts", en: "Fun facts" },
      paragrafe: [

        {
          ro: "Praful lunar (regolitul) nu e ca praful de pe Pământ. Este format din particule extrem de abrazive, ca niște cioburi de sticlă microscopice. A intrat în circuitele stației și a cauzat mai multe scurtcircuite decât radiația cosmică. Dacă auziți un zgomot de nisip în ventilație, verificați imediat siguranțele.",
          en: "The lunar dust (regolith) is not like the dust on Earth. It is made of extremely abrasive particles, like tiny glass shards. It entered the station's circuits and caused more short circuits than cosmic radiation. If you hear sand noise in ventilation, check the fuses immediately."
        }
      ]
    }
  }
];

var manualTehnic = {
  titlu: "Manual Tehnic",
  totalPagini: manualPageDefs.length,
  pagini: manualPageDefs
};

var jurnalData = {
  titlu: "Jurnal",
  totalPagini: jurnalPageDefs.length,
  pagini: jurnalPageDefs
};
