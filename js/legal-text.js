const SVG_NS = 'http://www.w3.org/2000/svg';

// Extracts the plain-text content of the original legal block from the raw SVG markup.
export function extractDefaultLegalText(rawSvg) {
  const m = rawSvg.match(/<text class="st26"[\s\S]*?<\/text>/);
  if (!m) return '';
  return m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Rebuilds the .st26 legal text element (in any document — XML doc or live DOM)
// by word-wrapping `text` to fit the flyer's legal text box.
export function applyLegalText(doc2, text, opts = {}) {
  const el = doc2.querySelector('text.st26');
  if (!el) return;

  const fontSize   = opts.fontSize   || 7;
  const lineHeight = opts.lineHeight || 11;
  const maxWidth   = opts.maxWidth   || 583;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px Poppins, sans-serif`;

  const words = (text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  words.forEach(word => {
    const test = current ? current + ' ' + word : word;
    if (current && ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);

  while (el.firstChild) el.removeChild(el.firstChild);
  lines.forEach((line, i) => {
    const tspan = doc2.createElementNS(SVG_NS, 'tspan');
    tspan.setAttribute('x', '0');
    tspan.setAttribute('y', String(i * lineHeight));
    tspan.textContent = line;
    el.appendChild(tspan);
  });
}
