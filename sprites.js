/**
 * OhmSpace — sprite-uri SVG inline.
 */

var componentSprites = {
  baterie24:
    '<svg class="svg-piesa" viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">' +
    '<rect x="4" y="12" width="48" height="24" rx="3" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>' +
    '<rect x="52" y="18" width="8" height="12" rx="1" fill="#fbbf24"/>' +
    '<text x="32" y="28" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace">24V</text></svg>',

  baterie12:
    '<svg class="svg-piesa" viewBox="0 0 56 40" width="56" height="40" aria-hidden="true">' +
    '<rect x="4" y="10" width="40" height="20" rx="2" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>' +
    '<rect x="44" y="14" width="6" height="12" rx="1" fill="#4ade80"/>' +
    '<text x="24" y="24" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">12V</text></svg>',

  baterie6:
    '<svg class="svg-piesa" viewBox="0 0 52 36" width="52" height="36" aria-hidden="true">' +
    '<rect x="4" y="8" width="36" height="18" rx="2" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>' +
    '<rect x="40" y="12" width="6" height="10" rx="1" fill="#22d3ee"/>' +
    '<text x="22" y="21" text-anchor="middle" fill="#22d3ee" font-size="8" font-family="monospace">6V</text></svg>',

  ventilator:
    '<svg id="svg-ventilator" class="svg-piesa svg-ventilator" viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">' +
    '<circle cx="32" cy="32" r="29" fill="#0f172a" stroke="#475569" stroke-width="2"/>' +
    '<circle cx="32" cy="32" r="24" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="3 4"/>' +
    '<g class="grup-elice">' +
    '<path d="M32 32 L32 9 Q34 9 34 11 L32 32Z" fill="#22d3ee" opacity="0.9"/>' +
    '<path d="M32 32 L55 32 Q55 34 53 34 L32 32Z" fill="#22d3ee" opacity="0.9"/>' +
    '<path d="M32 32 L32 55 Q30 55 30 53 L32 32Z" fill="#22d3ee" opacity="0.9"/>' +
    '<path d="M32 32 L9 32 Q9 30 11 30 L32 32Z" fill="#22d3ee" opacity="0.9"/>' +
    '</g>' +
    '<circle cx="32" cy="32" r="7" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>' +
    '<circle cx="32" cy="32" r="3" fill="#64748b"/></svg>',

  sursa:
    '<svg class="svg-piesa" viewBox="0 0 56 44" width="56" height="44" aria-hidden="true">' +
    '<rect x="6" y="10" width="44" height="24" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>' +
    '<circle cx="28" cy="22" r="6" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>' +
    '<text x="28" y="25" text-anchor="middle" fill="#22d3ee" font-size="6" font-family="monospace">PWR</text></svg>',

  diodaDreapta:
    '<svg class="svg-piesa svg-dioda" viewBox="0 0 64 32" width="64" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="20" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polygon points="20,8 20,24 36,16" fill="#a78bfa" stroke="#c4b5fd" stroke-width="1"/>' +
    '<line x1="36" y1="8" x2="36" y2="24" stroke="#c4b5fd" stroke-width="2"/>' +
    '<line x1="36" y1="16" x2="60" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="48" y="12" fill="#a78bfa" font-size="8" font-family="monospace">→</text></svg>',

  diodaStanga:
    '<svg class="svg-piesa svg-dioda" viewBox="0 0 64 32" width="64" height="32" aria-hidden="true">' +
    '<line x1="60" y1="16" x2="44" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polygon points="44,8 44,24 28,16" fill="#a78bfa" stroke="#c4b5fd" stroke-width="1"/>' +
    '<line x1="28" y1="8" x2="28" y2="24" stroke="#c4b5fd" stroke-width="2"/>' +
    '<line x1="28" y1="16" x2="4" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="16" y="12" fill="#a78bfa" font-size="8" font-family="monospace">←</text></svg>',

  cap05:
    '<svg class="svg-piesa" viewBox="0 0 48 40" width="48" height="40" aria-hidden="true">' +
    '<line x1="4" y1="20" x2="12" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<line x1="12" y1="8" x2="12" y2="32" stroke="#22d3ee" stroke-width="2"/>' +
    '<line x1="36" y1="8" x2="36" y2="32" stroke="#22d3ee" stroke-width="2"/>' +
    '<line x1="36" y1="20" x2="44" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="24" y="24" text-anchor="middle" fill="#22d3ee" font-size="8" font-family="monospace">0.5F</text></svg>',

  cap2:
    '<svg class="svg-piesa" viewBox="0 0 48 40" width="48" height="40" aria-hidden="true">' +
    '<line x1="4" y1="20" x2="12" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<line x1="12" y1="8" x2="12" y2="32" stroke="#4ade80" stroke-width="2"/>' +
    '<line x1="36" y1="8" x2="36" y2="32" stroke="#4ade80" stroke-width="2"/>' +
    '<line x1="36" y1="20" x2="44" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="24" y="24" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">2F</text></svg>',

  cap10:
    '<svg class="svg-piesa" viewBox="0 0 48 40" width="48" height="40" aria-hidden="true">' +
    '<line x1="4" y1="20" x2="12" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<line x1="12" y1="8" x2="12" y2="32" stroke="#e879f9" stroke-width="2"/>' +
    '<line x1="36" y1="8" x2="36" y2="32" stroke="#e879f9" stroke-width="2"/>' +
    '<line x1="36" y1="20" x2="44" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="24" y="24" text-anchor="middle" fill="#e879f9" font-size="8" font-family="monospace">10F</text></svg>',

  grid:
    '<svg id="svg-grid" class="svg-piesa" viewBox="0 0 56 56" width="52" height="52" aria-hidden="true">' +
    '<rect x="8" y="8" width="40" height="40" rx="2" fill="#0f172a" stroke="#64748b" stroke-width="2"/>' +
    '<line x1="8" y1="20" x2="48" y2="20" stroke="#334155" stroke-width="1"/>' +
    '<line x1="8" y1="36" x2="48" y2="36" stroke="#334155" stroke-width="1"/>' +
    '<line x1="20" y1="8" x2="20" y2="48" stroke="#334155" stroke-width="1"/>' +
    '<line x1="36" y1="8" x2="36" y2="48" stroke="#334155" stroke-width="1"/>' +
    '<circle cx="28" cy="28" r="4" fill="#22d3ee" opacity="0.5"/></svg>',

  antena:
    '<svg id="svg-antena" class="svg-piesa" viewBox="0 0 48 64" width="48" height="64" aria-hidden="true">' +
    '<line x1="24" y1="40" x2="24" y2="58" stroke="#64748b" stroke-width="2"/>' +
    '<path d="M24 8 L8 40 L40 40 Z" fill="none" stroke="#22d3ee" stroke-width="2"/>' +
    '<circle cx="24" cy="20" r="4" fill="#22d3ee" opacity="0.5"/></svg>',

  laser:
    '<svg id="svg-laser" class="svg-piesa" viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">' +
    '<rect x="8" y="16" width="48" height="24" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="2"/>' +
    '<circle cx="20" cy="28" r="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>' +
    '<line x1="28" y1="28" x2="52" y2="28" stroke="#f43f5e" stroke-width="2" opacity="0.6"/>' +
    '<polygon points="52,28 58,24 58,32" fill="#f43f5e" opacity="0.8"/></svg>',

  rezistor2:
    '<svg class="svg-piesa" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#22d3ee" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#22d3ee" font-size="8" font-family="monospace">2Ω</text></svg>',

  rezistor12:
    '<svg class="svg-piesa" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#4ade80" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">12Ω</text></svg>',

  rezistor50:
    '<svg class="svg-piesa" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#e879f9" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#e879f9" font-size="8" font-family="monospace">50Ω</text></svg>',

  potentiometru:
    '<svg class="svg-piesa svg-potentiometru" viewBox="0 0 72 48" width="72" height="48" aria-hidden="true">' +
    '<line x1="4" y1="28" x2="18" y2="28" stroke="#94a3b8" stroke-width="2"/>' +
    '<rect x="18" y="18" width="36" height="20" rx="3" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>' +
    '<line x1="54" y1="28" x2="68" y2="28" stroke="#94a3b8" stroke-width="2"/>' +
    '<circle cx="36" cy="28" r="10" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>' +
    '<line x1="36" y1="28" x2="36" y2="16" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>' +
    '<text x="36" y="44" text-anchor="middle" fill="#fbbf24" font-size="7" font-family="monospace">POT</text></svg>',

  seraLed:
    '<svg id="svg-sera-led" class="svg-piesa" viewBox="0 0 80 52" width="72" height="48" aria-hidden="true">' +
    '<rect x="6" y="10" width="68" height="32" rx="3" fill="#0f172a" stroke="#64748b" stroke-width="2"/>' +
    '<rect class="led-bec" x="14" y="18" width="10" height="16" rx="1" fill="#14532d" stroke="#166534" stroke-width="1"/>' +
    '<rect class="led-bec" x="28" y="18" width="10" height="16" rx="1" fill="#14532d" stroke="#166534" stroke-width="1"/>' +
    '<rect class="led-bec" x="42" y="18" width="10" height="16" rx="1" fill="#14532d" stroke="#166534" stroke-width="1"/>' +
    '<rect class="led-bec" x="56" y="18" width="10" height="16" rx="1" fill="#14532d" stroke="#166534" stroke-width="1"/>' +
    '<text x="40" y="8" text-anchor="middle" fill="#4ade80" font-size="6" font-family="monospace">LED</text></svg>'
};

function cheieSpritePiesa(tip, val, orientare) {
  if (tip === "baterie") {
    return "baterie" + val;
  }
  if (tip === "dioda") {
    return orientare === "stanga" ? "diodaStanga" : "diodaDreapta";
  }
  if (tip === "capacitor") {
    if (val === 0.5) {
      return "cap05";
    }
    if (val === 2) {
      return "cap2";
    }
    if (val === 10) {
      return "cap10";
    }
  }
  if (tip === "rezistor") {
    if (val === 2) {
      return "rezistor2";
    }
    if (val === 12) {
      return "rezistor12";
    }
    if (val === 50) {
      return "rezistor50";
    }
  }
  if (tip === "potentiometer") {
    return "potentiometru";
  }
  return null;
}
