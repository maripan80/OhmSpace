/**
 * OhmSpace — sprite-uri SVG inline pentru componente.
 * Fără fișiere PNG/JPG externe.
 */

var componentSprites = {
  baterie:
    '<svg class="svg-piesa svg-baterie" viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">' +
    '<rect x="4" y="12" width="48" height="24" rx="3" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>' +
    '<rect x="52" y="18" width="8" height="12" rx="1" fill="#fbbf24"/>' +
    '<rect x="10" y="18" width="36" height="12" rx="2" fill="#422006" opacity="0.6"/>' +
    '<text x="28" y="28" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace">24V</text>' +
    '</svg>',

  rezistor2:
    '<svg class="svg-piesa svg-rezistor" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#22d3ee" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#22d3ee" font-size="8" font-family="monospace">2Ω</text>' +
    '</svg>',

  rezistor12:
    '<svg class="svg-piesa svg-rezistor" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#4ade80" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">12Ω</text>' +
    '</svg>',

  rezistor50:
    '<svg class="svg-piesa svg-rezistor" viewBox="0 0 72 32" width="72" height="32" aria-hidden="true">' +
    '<line x1="4" y1="16" x2="14" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<polyline points="14,16 18,8 22,24 26,8 30,24 34,8 38,24 42,8 46,16 58,16" fill="none" stroke="#e879f9" stroke-width="2"/>' +
    '<line x1="58" y1="16" x2="68" y2="16" stroke="#94a3b8" stroke-width="2"/>' +
    '<text x="36" y="28" text-anchor="middle" fill="#e879f9" font-size="8" font-family="monospace">50Ω</text>' +
    '</svg>',

  ventilator:
    '<svg id="svg-ventilator" class="svg-piesa svg-ventilator" viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">' +
    '<circle cx="32" cy="32" r="28" fill="#1e293b" stroke="#64748b" stroke-width="2"/>' +
    '<g class="grup-elice" transform-origin="32 32">' +
    '<ellipse cx="32" cy="14" rx="6" ry="14" fill="#22d3ee" opacity="0.85"/>' +
    '<ellipse cx="32" cy="50" rx="6" ry="14" fill="#22d3ee" opacity="0.85"/>' +
    '<ellipse cx="14" cy="32" rx="14" ry="6" fill="#22d3ee" opacity="0.85"/>' +
    '<ellipse cx="50" cy="32" rx="14" ry="6" fill="#22d3ee" opacity="0.85"/>' +
    '</g>' +
    '<circle cx="32" cy="32" r="6" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>' +
    '</svg>'
};

/** Cheie sprite după valoarea rezistenței (Ω) */
function cheieRezistor(valoare) {
  if (valoare === 2) return "rezistor2";
  if (valoare === 12) return "rezistor12";
  if (valoare === 50) return "rezistor50";
  return null;
}
