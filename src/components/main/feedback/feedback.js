import { fog } from "../../fog/fog";

export const feedback = () => {
  const button_close_feedback_1 = document.querySelector(
    ".feedback__close-button"
  );
  const button_close_feedback_2 = document.querySelector(
    ".feedback__close-button-form"
  );

  button_close_feedback_1.onclick = () => {
    openFeedback(false);
  };

  button_close_feedback_2.onclick = () => {
    openFeedback(false);
  };
};

export const openFeedback = (s) => {
  const feedback_block = document.querySelector(".feedback");
  const input_autofocus_2 = document.querySelector("#input_autofocus_2");

  if (s) {
    feedback_block.classList.remove("feedback_none");

    feedback_block.classList.add("feedback_active");

    input_autofocus_2.focus();

    fog(true);
  } else {
    feedback_block.classList.remove("feedback_active");

    feedback_block.classList.add("feedback_none");

    fog(false);
  }
};
