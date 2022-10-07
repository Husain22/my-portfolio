const menu = document.querySelector(".fa-bars");
const nav = document.querySelector("nav ul");
const x = document.querySelector(".menue p");

menu.addEventListener("click", () => {
  nav.classList.remove("close");
  nav.classList.add("open");
  menu.style.display = "none";
  x.style.display = "inline-block";
});

x.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.classList.add("close");
  x.style.display = "none";
  menu.style.display = "inline-block";
});
