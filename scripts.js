const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

// Small welcome interaction
document.querySelector(".logo").addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
