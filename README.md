# Recompile — FOSS Activist Toolkit 

Case study activist toolkit for CSTS-UH1017 Revolutions and Social Change

## File structure

```
recompile/
├── index.html       all three pages live here
├── style.css        all styles, edit variables in :root to retheme
├── script.js        nav, accordion, QR code, brochure download
├── README.md        
└── images/
    ├── tool#pic.jpg   
  
```

---

## How to add images

Drop the image file into the `images/` folder with the exact name
shown above. The site will automatically display it in the right tool.
If the file is missing, a labelled placeholder appears instead.

---

## How to edit text

Each tool is a `<div class="tool">` block with a unique id:
- `#toolone` through `#toolten`

Open `index.html`, search for the id (e.g. `id="toolfive"`),
and edit the text inside `.tool-text`.

---

## How to change the accent color

Open `style.css`. At the very top, find:

```css
--orange: #d94f1e;
```

Replace the hex value. Everything updates automatically.

---

## How to add a resource link

On page 3, find the relevant `<div class="res-category">` block
and duplicate one of the `<a class="res-link">` entries:

```html
<a class="res-link" href="https://your-url.com" target="_blank" rel="noopener">
  <span class="res-name">Display Name</span>
  <span class="res-url">short-url.com</span>
</a>
```

---

## Deployment options (all free)

### Option A — GitHub Pages (recommended)
1. Create a free account at github.com
2. Create a new repository called `recompile` (set to Public)
3. Upload all files (index.html, style.css, script.js, images/ folder)
4. Go to Settings → Pages → Source: main branch / root
5. Your site is live at: `https://yourusername.github.io/recompile`
6. Paste that URL into `script.js` on the line: `const TOOLKIT_URL = ...`
   so the QR code points to the right address.

### Option B — Open locally (no hosting)
Just double-click `index.html` — works in any browser.
(QR code will point to the local file path, which is fine for demos.)

---

## Brochure download

On the Resources page, click "Download Brochure."
The card exports as a high-resolution PNG (3× scale).
For print, open the PNG in any image editor and set to 300 DPI.
Recommended print size: 5×3 inches (postcard) or A6.

---

## Updating the QR code URL

In `script.js`, find this line near the bottom:

```js
const TOOLKIT_URL = window.location.href.split('#')[0];
```

Once deployed, the QR code auto-reads the live URL.
If you want to hardcode it, replace with:

```js
const TOOLKIT_URL = 'https://yourusername.github.io/recompile';
```
