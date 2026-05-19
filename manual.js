/**
 * OhmSpace — baza de date a manualului tehnic și a jurnalului.
 * Conținut HTML pe pagini, încărcat dinamic în app.js.
 */

var manualData = {
  titlu: "Manual Tehnic — Artemis-Prime",
  totalPagini: 4,

  pagini: [
    {
      id: 0,
      categorie: "teorie",
      stanga: {
        titlu: "Cuprins",
        html: "<h4>Manual de Supraviețuire Electronică</h4><p>Selectează un capitol pentru a sări direct la pagina respectivă:</p><button type=\"button\" class=\"link-capitol\" data-sari-la=\"1\">Cap. 1 — Legea lui Ohm</button><button type=\"button\" class=\"link-capitol\" data-sari-la=\"2\">Cap. 2 — Circuite și Kirchhoff</button><button type=\"button\" class=\"link-capitol\" data-sari-la=\"3\">Jurnal de Bord &amp; Fun Facts</button>"
      },
      dreapta: {
        titlu: "Notă introductivă",
        html: "<p>Acest manual este destinat echipajului stației <strong>Artemis-Prime</strong>. Citește secțiunile de teorie înainte de a modifica circuitele critice ale habitatului.</p><p><em>Regula de aur:</em> verifică tensiunea (U), calculează curentul (I) și alege rezistența (R) astfel încât motoarele să primească puterea necesară fără suprasolicitare.</p>"
      }
    },
    {
      id: 1,
      categorie: "teorie",
      stanga: {
        titlu: "Legea lui Ohm — Definiții",
        html: "<h4>Mărimi de bază</h4><p><strong>Tensiunea (U)</strong> — diferența de potențial electric între două puncte ale circuitului. Unitate: <strong>Volt (V)</strong>. Ea „împinge” electronii prin fire.</p><p><strong>Curentul (I)</strong> — fluxul de sarcină electrică pe unitate de timp. Unitate: <strong>Ampere (A)</strong>.</p><p><strong>Rezistența (R)</strong> — opoziția unui material la trecerea curentului. Unitate: <strong>Ohm (Ω)</strong>.</p>"
      },
      dreapta: {
        titlu: "Formula și triunghiul lui Ohm",
        html: "<p>Într-un circuit liniar, la temperatură constantă:</p><p class=\"text-center font-bold text-lg my-3\">I = U / R</p><p>De aici: U = I · R și R = U / I.</p><div class=\"triunghi-ohm\" aria-hidden=\"true\"><span class=\"poz-u\">U</span><span class=\"poz-i\">I</span><span class=\"poz-r\">R</span></div><p class=\"text-sm\">Acoperă litera pe care o cauți — celelalte două rămân vizibile în poziția corectă (de ex. I = U/R).</p>"
      }
    },
    {
      id: 2,
      categorie: "teorie",
      stanga: {
        titlu: "Circuite — Noțiuni",
        html: "<h4>Ce este un circuit?</h4><p>Un <strong>circuit electric închis</strong> este o cale continuă prin care curentul poate circula de la sursă, prin consumatori (rezistoare, motoare), și înapoi la sursă.</p><p>În baza lunară, panourile solare și bateriile furnizează tensiunea; ventilatoarele și modulele de viață consumă curent.</p>"
      },
      dreapta: {
        titlu: "Legile lui Kirchhoff",
        html: "<p><strong>Legea nodurilor (KCL):</strong> suma curenților care intră într-un nod este egală cu suma curenților care ies.</p><div class=\"schema-kirch\"><span class=\"nod\"></span><span class=\"fir\"></span><span class=\"nod\"></span><span class=\"fir\"></span><span class=\"nod\"></span></div><p class=\"text-sm text-center\">Nod — punct de ramificare</p><p class=\"mt-3\"><strong>Legea mesh-urilor (KVL):</strong> suma algebrică a tensiunilor pe o buclă închisă este zero.</p><div class=\"schema-kirch mt-2\"><span class=\"fir\" style=\"width:20px\"></span><span>+U</span><span class=\"fir\"></span><span>−IR</span><span class=\"fir\" style=\"width:20px\"></span></div><p class=\"text-sm\">Pe o buclă simplă: tensiunea sursei se „împarte” pe elementele serie.</p>"
      }
    },
    {
      id: 3,
      categorie: "poveste",
      stanga: {
        titlu: "Jurnal de Bord — Ziua 47",
        html: "<h4>Baza Artemis-Prime</h4><p><strong>Locație:</strong> Craterul Shackleton, marginea sudică a Lunii.</p><p>O micrometeorită a perforat scutul secundar de praf. Praful lunar (<strong>regolitul</strong>) a pătruns în conductele de aerisire și a blocat turbinele modulului de oxigen. Habitatul e în pericol — ventilatorul Sector Alpha trebuie repornit controlat.</p><p class=\"text-sm italic\">Semnat: Cmdr. Elena V., inginer sistem de viață.</p>"
      },
      dreapta: {
        titlu: "Arhivă educațională",
        html: "<div class=\"caseta-fun-fact\"><strong>Fun Fact Spațial — Lună</strong>Știai că praful lunar (regolitul) este extrem de abraziv, se comportă ca niște cioburi mici de sticlă și miroase a praf de pușcă ars? Acesta plutește din cauza încărcării electrostatice de la Soare și a distrus costumele astronauților din misiunile Apollo!</div><div class=\"caseta-fun-fact\"><strong>Fun Fact Spațial — Electronică</strong>În vidul spațial nu există aer care să preia căldura prin convecție. Componentele electronice (cum sunt rezistori mari) se pot supraîncălzi rapid dacă nu sunt conectate la radiatoare speciale care elimină căldura prin radiație termică!</div>"
      }
    }
  ]
};
