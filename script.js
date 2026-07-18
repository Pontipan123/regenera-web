// Videos click-to-play: la foto propia es la portada; el iframe de YouTube se crea al click.
document.querySelectorAll(".media[data-video] .play-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const media = btn.closest(".media");
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + media.dataset.video + "?autoplay=1&rel=0";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = btn.getAttribute("aria-label");
    media.appendChild(iframe);
  });
});

// Carrusel de logos: un solo renglón con flechas; las flechas solo aparecen si hay overflow.
const ARROW = (d) =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const isEnglish = document.documentElement.lang === "en";

document.querySelectorAll(".logos-grid").forEach((grid) => {
  const wrap = document.createElement("div");
  wrap.className = "logos-carousel";
  grid.parentNode.insertBefore(wrap, grid);
  wrap.appendChild(grid);

  const prev = document.createElement("button");
  prev.className = "carousel-btn prev";
  prev.setAttribute("aria-label", isEnglish ? "Previous logos" : "Logos anteriores");
  prev.innerHTML = ARROW("M15 18l-6-6 6-6");

  const next = document.createElement("button");
  next.className = "carousel-btn next";
  next.setAttribute("aria-label", isEnglish ? "More logos" : "Más logos");
  next.innerHTML = ARROW("M9 18l6-6-6-6");

  wrap.appendChild(prev);
  wrap.appendChild(next);

  const step = () => grid.clientWidth * 0.9;
  prev.addEventListener("click", () => grid.scrollBy({ left: -step() }));
  next.addEventListener("click", () => grid.scrollBy({ left: step() }));

  const update = () => {
    const overflow = grid.scrollWidth > grid.clientWidth + 4;
    prev.classList.toggle("is-hidden", !overflow);
    next.classList.toggle("is-hidden", !overflow);
    if (!overflow) return;
    prev.disabled = grid.scrollLeft <= 4;
    next.disabled = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 4;
  };
  grid.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
});
