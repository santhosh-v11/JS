
  const buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".icon");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
      }
    });
  });
