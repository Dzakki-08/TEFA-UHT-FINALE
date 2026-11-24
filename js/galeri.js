const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

lightbox.addEventListener("show.bs.modal", (e) => {
  const pemicu = e.relatedTarget;
  lightboxImg.src = pemicu.dataset.img;
  lightboxImg.alt = pemicu.dataset.alt;
  lightboxCaption.textContent = pemicu.dataset.caption;
});
