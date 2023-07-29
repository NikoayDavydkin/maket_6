import { fog } from "../../fog/fog";
import { openOrderCall } from "../order-call/order-call";
import { openFeedback } from "../feedback/feedback";

export const sideMenu = () => {
  const sideMenuSearch = document.querySelectorAll(".side-menu__search");

  sideMenuSearch[0].onclick = () => {
    fog(false);
    sideMenuOpen(false);
  };

  sideMenuSearch[1].onclick = () => {};

  const selectedButtons = document.querySelectorAll(".selected-item");

  selectedButtons.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
      for (let i = 0; i < 8; i++) {
        selectedButtons[i].classList.remove("selected-item_active");
      }

      buttonItem.classList.add("selected-item_active");
    });
  });

  const sideMenuSearchButtons = document.querySelectorAll(".side-menu__button");

  sideMenuSearchButtons[0].onclick = () => {
    fog(true);
    openOrderCall(true);
    sideMenuOpen(false);
  };

  sideMenuSearchButtons[1].onclick = () => {
    fog(true);
    openFeedback(true);
    sideMenuOpen(false);
  };

  sideMenuSearchButtons[2].onclick = () => {};

  const languagesButtons = document.querySelectorAll(".silver_none-active");

  languagesButtons.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
      for (let i = 0; i < 3; i++) {
        languagesButtons[i].classList.remove("silver_active");
      }

      buttonItem.classList.add("silver_active");
    });
  });
};

export const sideMenuOpen = (s) => {
  const sideMenuSearch = document.querySelectorAll(".side-menu__search");
  const sideMenu = document.querySelector(".side-menu");

  if (s) {
    sideMenuSearch[0].classList.remove("side-menu__close");
    sideMenu.classList.remove("side-menu_none");
    sideMenu.classList.add("side-menu_active");
  } else {
    sideMenuSearch[0].classList.add("side-menu__close");
    sideMenu.classList.remove("side-menu_active");
    sideMenu.classList.add("side-menu_none");
  }
};
