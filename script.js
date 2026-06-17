/* ============================================================
   RECOMPILE — script.js
   ============================================================ */

/* ---- Page navigation ---- */
const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.page;
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    // close mobile menu
    document.getElementById('navlinks').classList.remove('open');
  });
});

/* ---- Mobile hamburger ---- */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navlinks').classList.toggle('open');
});

/* ---- Accordion ---- */
function openTool(tool) {
  tool.classList.add('open');
  const body = tool.querySelector('.tool-body');
  const btn  = tool.querySelector('.tool-head');
  if (body) body.hidden = false;
  if (btn)  btn.setAttribute('aria-expanded', 'true');
}
function closeTool(tool) {
  tool.classList.remove('open');
  const body = tool.querySelector('.tool-body');
  const btn  = tool.querySelector('.tool-head');
  if (body) body.hidden = true;
  if (btn)  btn.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('.tool-head').forEach(head => {
  head.addEventListener('click', () => {
    const tool = head.closest('.tool');
    tool.classList.contains('open') ? closeTool(tool) : openTool(tool);
  });
});

/* ---- Expand / Collapse all ---- */
document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.tool').forEach(openTool);
});
document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.tool').forEach(closeTool);
});

/* ---- QR code ---- */
// Change the URL below to the real deployed URL when you have one
const TOOLKIT_URL = window.location.href.split('#')[0];

new QRCode(document.getElementById('qrcode'), {
  text: 'https://jycewan.github.io/foss-toolkit/',
  width: 110,
  height: 110,
  colorDark: '#111111',
  colorLight: '#ffffff',
  correctLevel: QRCode.CorrectLevel.M
});

/* ---- Brochure download ---- */
document.getElementById('downloadBrochure').addEventListener('click', async () => {
  const card = document.getElementById('brochurecard');
  try {
    const canvas = await html2canvas(card, {
      backgroundColor: '#ffffff',
      scale: 3,         // high-res export
      useCORS: true,
      logging: false
    });
    const link = document.createElement('a');
    link.download = 'recompile-brochure.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Brochure export failed:', err);
    alert('Could not export brochure. Try right-clicking the card and saving the image.');
  }
});
