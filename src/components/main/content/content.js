export const content = () => {
  const contentButtons = document.querySelectorAll(".content__button");

  contentButtons[0].onclick = () => {
    console.log("открыть оставить заявку");
  };

  contentButtons[1].onclick = () => {
    console.log("открыть статус ремонта");
  };

  const selectedContentButtons = document.querySelectorAll(
    ".navigation-services_none-active"
  );

  selectedContentButtons.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
      for (let i = 0; i < 6; i++) {
        selectedContentButtons[i].classList.remove(
          "navigation-services_active"
        );
      }

      buttonItem.classList.add("navigation-services_active");
    });
  });
};
