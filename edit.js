// Modo edición de textos — se activa solo con ?edit en la URL.
// Permite editar textos en vivo, guarda en localStorage y exporta el HTML actualizado.
(function () {
  if (!location.search.includes("edit")) return;

  // Selector de textos editables (contenido, no navegación/estructura)
  const SEL = [
    "h1", "h2", "h3", "h4",
    "p.sub", ".section-head p", ".pilar p", ".tranquera li span",
    ".programa .desc", ".origen-texto", ".persona h4", ".persona p",
    ".advisor-pill", ".label", ".num", ".chip", ".stat b", ".stat span",
    ".logo-text", "a.link-flecha", ".btn", ".footer-inner p", ".via p",
  ].join(",");

  const KEY = "regenera-edits:" + location.pathname;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}

  const editable = [];
  document.querySelectorAll(SEL).forEach((el) => {
    if (el.closest("#edit-toolbar")) return;
    el.setAttribute("contenteditable", "true");
    el.setAttribute("spellcheck", "false");
    el.dataset.editId = editable.length;
    if (saved[editable.length] != null) el.innerHTML = saved[editable.length];
    editable.push(el);
  });

  document.documentElement.classList.add("edit-mode");

  // Estilos del modo edición (auto-contenidos)
  const style = document.createElement("style");
  style.id = "edit-style";
  style.textContent = `
    .edit-mode [contenteditable]{outline:1.5px dashed rgba(255,115,0,.45);outline-offset:3px;border-radius:3px;cursor:text;transition:outline-color .2s}
    .edit-mode [contenteditable]:hover{outline-color:rgba(255,115,0,.8)}
    .edit-mode [contenteditable]:focus{outline:2px solid #FF7300;background:rgba(255,115,0,.06)}
    #edit-toolbar{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:9999;
      display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:999px;
      background:#092826;border:1px solid rgba(245,242,233,.15);box-shadow:0 12px 40px rgba(0,0,0,.4);
      font-family:-apple-system,system-ui,sans-serif;color:#F5F2E9}
    #edit-toolbar .et-title{font-size:13px;font-weight:700;white-space:nowrap}
    #edit-toolbar .et-status{font-size:11px;color:#A8C4B2;min-width:66px;font-family:"DM Mono",monospace}
    #edit-toolbar button{border:none;cursor:pointer;font-size:12px;font-weight:700;padding:8px 14px;border-radius:999px;font-family:inherit;transition:filter .2s}
    #edit-toolbar button:hover{filter:brightness(1.12)}
    #edit-toolbar [data-act=download]{background:#00B058;color:#fff}
    #edit-toolbar [data-act=reset]{background:transparent;color:#A8C4B2;border:1px solid rgba(245,242,233,.2)}
    #edit-toolbar [data-act=exit]{background:transparent;color:#A8C4B2;border:1px solid rgba(245,242,233,.2)}
  `;
  document.head.appendChild(style);

  const bar = document.createElement("div");
  bar.id = "edit-toolbar";
  bar.innerHTML =
    '<span class="et-title">✏️ Modo edición</span>' +
    '<span class="et-status"></span>' +
    '<button data-act="download">Descargar HTML</button>' +
    '<button data-act="reset">Restablecer</button>' +
    '<button data-act="exit">Salir</button>';
  document.body.appendChild(bar);
  const setStatus = (s) => { bar.querySelector(".et-status").textContent = s; };

  const persist = () => {
    const data = {};
    editable.forEach((el, i) => { data[i] = el.innerHTML; });
    localStorage.setItem(KEY, JSON.stringify(data));
    setStatus("Guardado ✓");
  };

  let t;
  document.addEventListener("input", (e) => {
    if (!e.target.closest("[contenteditable]")) return;
    setStatus("Editando…");
    clearTimeout(t);
    t = setTimeout(persist, 500);
  });

  // No navegar al clickear links/botones editables
  document.addEventListener("click", (e) => {
    if (e.target.closest("a[contenteditable], .btn[contenteditable]")) e.preventDefault();
  }, true);

  bar.addEventListener("click", (e) => {
    const act = e.target.dataset.act;
    if (act === "download") download();
    if (act === "reset") { if (confirm("¿Descartar todos los cambios?")) { localStorage.removeItem(KEY); location.reload(); } }
    if (act === "exit") location.href = location.pathname;
  });

  function download() {
    persist();
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll("[contenteditable]").forEach((el) => {
      el.removeAttribute("contenteditable");
      el.removeAttribute("spellcheck");
      el.removeAttribute("data-edit-id");
    });
    clone.classList.remove("edit-mode");
    ["#edit-toolbar", "#edit-style"].forEach((s) => {
      const n = clone.querySelector(s); if (n) n.remove();
    });
    const html = "<!DOCTYPE html>\n" + clone.outerHTML + "\n";
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = location.pathname.split("/").pop() || "index.html";
    document.body.appendChild(a); a.click(); a.remove();
    setStatus("Descargado ✓");
  }

  setStatus("Listo");
})();
