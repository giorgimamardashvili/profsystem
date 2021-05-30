function menuToggle() {
  const category = document.querySelector(".menu-category");
  const show = document.querySelector(".menu-category__show");
  const arrow = document.querySelector(".arrow-up");
  const length = document.querySelectorAll(".menu__item").length;
  const total = length * 30 + 80;
  category.style.transition = "height 0.5s";

  if (window.innerWidth <= 1024) {
    show.addEventListener("click", () => {
      category.classList.toggle("active");
      if (category.classList.contains("active")) {
        category.style.height = total + "px";
        arrow.classList.add("active");

        setTimeout(() => {
          category.style.height = "fit-content";
        }, 500);
      }
      if (!category.classList.contains("active")) {
        category.style.height = total + "px";
        arrow.classList.remove("active");
        setTimeout(() => {
          category.style.height = "50px";
        }, 100);
      }
    });
    arrow.addEventListener("click", () => {
      category.classList.toggle("active");
      if (category.classList.contains("active")) {
        category.style.height = total + "px";
        arrow.classList.add("active");

        setTimeout(() => {
          category.style.height = "fit-content";
        }, 500);
      }
      if (!category.classList.contains("active")) {
        category.style.height = total + "px";
        arrow.classList.remove("active");
        setTimeout(() => {
          category.style.height = "50px";
        }, 100);
      }
    });
  }
}

menuToggle();
