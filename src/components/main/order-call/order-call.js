import { fog } from "../../fog/fog";

export const orderCall = () => {
  const button_close_order_call_1 = document.querySelector(
    ".order-call__close-button"
  );
  const button_close_order_call_2 = document.querySelector(
    ".order-call__close-button-form"
  );

  button_close_order_call_1.onclick = () => {
    openOrderCall(false);
  };

  button_close_order_call_2.onclick = () => {
    openOrderCall(false);
  };
};

export const openOrderCall = (s) => {
  const order_call_block = document.querySelector(".order-call");
  const input_autofocus_1 = document.querySelector("#input_autofocus_1");

  if (s) {
    order_call_block.classList.remove("order-call_none");

    order_call_block.classList.add("order-call_active");

    input_autofocus_1.focus();

    fog(true);
  } else {
    order_call_block.classList.remove("order-call_active");

    order_call_block.classList.add("order-call_none");

    fog(false);
  }
};
