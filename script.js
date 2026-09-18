const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  const light = document.documentElement.classList.contains("light");
  themeBtn.textContent = light ? "☾" : "☼";
  localStorage.setItem("portfolio-theme", light ? "light" : "dark");
});

if (localStorage.getItem("portfolio-theme") === "light") {
  document.documentElement.classList.add("light");
  themeBtn.textContent = "☾";
}

document.getElementById("year").textContent = new Date().getFullYear();

