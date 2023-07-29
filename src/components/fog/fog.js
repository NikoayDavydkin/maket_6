import { sideMenuOpen } from "../main/side-menu/side-menu";
import { openOrderCall } from "../main/order-call/order-call";
import { openFeedback } from "../main/feedback/feedback";

export const fog = (s) => {
  let fog_state = false;
  fog_state = s;
  const fog = document.querySelector(".fog");

  if (fog_state) {
    fog.classList.remove("fog_none");
    fog.classList.add("fog_active");
  } else {
    fog.classList.remove("fog_active");
    fog.classList.add("fog_none");
  }

  fog.onclick = () => {
    fog_state = false;

    fog.classList.remove("fog_active");
    fog.classList.add("fog_none");

    sideMenuOpen(false);
    openOrderCall(false);
    openFeedback(false);
  };
};
