const navLinksEl = document.querySelectorAll(".navitem");

navLinksEl.forEach(a => {
  a.addEventListener("click", () => {
    navLinksEl.forEach(item => item.classList.remove("active"));
    a.classList.add("active");
  });
});
