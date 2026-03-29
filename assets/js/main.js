function initMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.querySelector(".mobile__menu");

  Object.assign(mobileMenu.style, {
    transform: "translateY(-100%)",
    visibility: "hidden",
  });

  const enableTransition = () => {
    mobileMenu.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  const openMenu = () => {
    enableTransition();
    mobileMenu.style.visibility = "visible";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mobileMenu.style.transform = "translateY(0)";
      });
    });
    burger.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    enableTransition();
    mobileMenu.style.transform = "translateY(-100%)";
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    mobileMenu.addEventListener(
      "transitionend",
      () => {
        mobileMenu.style.visibility = "hidden";
      },
      { once: true },
    );
  };

  burger.addEventListener("click", () => {
    burger.classList.contains("active") ? closeMenu() : openMenu();
  });

  document.querySelectorAll(".mobile__menu-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.classList.contains("active")) closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (
      burger.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

initMobileMenu();
