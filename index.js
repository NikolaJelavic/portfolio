let darkToggle = document.querySelector("#darkToggle");
let footer = document.querySelector("footer");
let p = document.querySelector("p");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  footer.classList.toggle("dark");
  //   p.classList.toggle("dark");
});
