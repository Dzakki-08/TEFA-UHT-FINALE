document.getElementById("year").textContent = new Date().getFullYear();

const judul = document.getElementById("successTitle");
if (judul) judul.focus({ preventScroll: true });

const items = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  items.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--delay", (i % 3) * 0.1 + "s");
  });

  const pengintai = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        pengintai.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => pengintai.observe(el));
}
