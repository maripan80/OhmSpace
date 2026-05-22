# 🌑 OhmSpace — Simulator Dinamic de Circuite Electronice

**OhmSpace** este un software educațional interactiv conceput pentru studiul și vizualizarea conceptelor fundamentale din electronică și fizică (curricula de gimnaziu și liceu). Proiectul este dezvoltat special pentru competiția națională **InfoEducație 2026**, secțiunea **Software Educațional**.

Aplicația folosește o paradigmă de tip *gamified sandbox* în care utilizatorul preia rolul unui inginer pe o stație spațială lunară, având ca scop remedierea unor avarii tehnice prin calibrarea corectă a circuitelor electrice.

---

## 🚀 Caracteristici Principale

* **Arhitectură Data-Driven:** Logica motorului de simulare (`app.js`) este complet decuplată de conținutul didactic (`manual.js`). Adăugarea sau modificarea nivelurilor se face fără modificarea codului sursă.
* **Interactivitate în Timp Real:** Include un modul avansat cu potențiometru (rezistență variabilă) controlat prin slider tactil/mouse, oferind feedback matematic instantaneu.
* **Corelație Teorie-Practică (IRL Diagrams):** Sub fiecare schemă abstractă (blueprint), aplicația randează o diagramă cu aspectul fizic real al componentelor din viața de zi cu zi.
* **Interfață Duală Imersivă:** Trecere fluidă între panoul de control digital (stil tehnic SF) și documentația de studiu tipărită pe hârtie texturată (inspirată de estetica *Papers, Please*).
* **Suport Multilingv (I18n):** Sistem integrat pentru comutarea dinamică a limbii (Română / Engleză) la nivelul întregii interfețe.
* **Portabilitate Absolută ($100\%$ Client-Side):** Zero dependențe externe, zero pachete npm sau configurări de server. Rulează instantaneu local pe orice dispozitiv.

---

## 🛠️ Stack Tehnologic

Proiectul este construit exclusiv pe standarde web native, respectând criteriul de eleganță, lizibilitate și optimizare a resurselor:

* **HTML5 Semantic:** Structură curată și accesibilă pentru interpretarea DOM-ului.
* **Tailwind CSS:** Sistem de stilizare fluid, responsive și modular bazat pe clase utilitare.
* **Vanilla JavaScript (ES6+):** Manipulare directă a elementelor web, garantând un timp de răspuns de $0\text{ms}$ (fără latența framework-urilor).

---

## 📦 Structura Proiectului

```text
├── index.html          # Structura UI principală și layout-ul responsive
├── style.css           # Efecte core de animație (efectul de rotație, umbre neon)
├── app.js              # Motorul de joc, logica de validare și manipularea dinamică
├── manual.js           # Baza de date a aplicației (misiuni, formule, manual tehnic, jurnale)
├── README.md           # Documentația tehnică de pornire
└── poze/             # Resursele grafice (diagramele IRL și elementele vizuale)
