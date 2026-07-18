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

// Marquee continuo de logos: duplica el set y anima en loop infinito.
document.querySelectorAll(".logos-grid:not(.logos-grid--eco)").forEach((grid, i) => {
  const set = document.createElement("div");
  set.className = "logos-set";
  while (grid.firstChild) set.appendChild(grid.firstChild);
  const clone = set.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  const track = document.createElement("div");
  track.className = "logos-track";
  track.append(set, clone);
  grid.classList.add("logos-marquee");
  if (i % 2 === 1) grid.classList.add("logos-marquee--reverse");
  grid.appendChild(track);
});
