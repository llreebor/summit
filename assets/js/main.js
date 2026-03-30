// Mobile Menu
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

// Read more animation
function initReadMoreToggle() {
  const btn = document.querySelector(".read__on-btn");
  const content = document.querySelector(".read__on-hidden");

  if (!btn || !content) return;

  let isOpen = false;

  btn.addEventListener("click", () => {
    isOpen = !isOpen;
    slideToggle(content);
    btn.textContent = isOpen ? "Close" : "Read On";
  });
}
initReadMoreToggle();
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
