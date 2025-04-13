function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function closeMenu() {
  document.getElementById("menu").classList.add("hidden");
}

function openSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  closeMenu();
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("menuButton");
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});