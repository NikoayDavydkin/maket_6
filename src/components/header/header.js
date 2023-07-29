import { fog } from "../fog/fog";
import { sideMenuOpen } from "../main/side-menu/side-menu";
import { openOrderCall } from "../main/order-call/order-call";
import { openFeedback } from "../main/feedback/feedback";

export const header = () => {
  const header_buttons = document.getElementsByClassName("header__button");

  header_buttons[0].onclick = () => {
    fog(true);

    sideMenuOpen(true);
  };

  header_buttons[1].onclick = () => {
    fog(true);

    openOrderCall(true);
  };

  header_buttons[2].onclick = () => {
    fog(true);

    openFeedback(true);
  };

  header_buttons[3].onclick = () => {};

  header_buttons[4].onclick = () => {};

  header_buttons[5].onclick = () => {};
};
