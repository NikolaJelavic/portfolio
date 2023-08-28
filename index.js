let darkToggle = document.querySelector("#darkToggle");
let footer = document.querySelector("footer");
let p = document.querySelector("p");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  footer.classList.toggle("dark");
  //   p.classList.toggle("dark");
});


// Open the modal when the "Preview CV" button is clicked
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

// Close the modal when the close button is clicked
document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
  }
});