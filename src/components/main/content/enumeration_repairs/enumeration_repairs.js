export const enumerationRepairs = () => {
  let stateEnumerationRepairs = false;

  const buttonEnuminationRepairs = document.querySelector(
    ".enumeration-repairs__read-more"
  );
  const enuminationRepairsBlock = document.querySelector(
    ".enumeration-repairs"
  );
  const enuminationRepairsMore = document.querySelector(
    ".enumeration-repairs__buttons-more"
  );
  const enuminationRepairsButtonText = document.querySelector(
    ".enumeration-repairs__read-more-text"
  );

  buttonEnuminationRepairs.onclick = () => {
    if (stateEnumerationRepairs) {
      stateEnumerationRepairs = false;

      enuminationRepairsBlock.classList.remove("enumeration_active");

      enuminationRepairsMore.classList.remove("enumeration-repairs_active");
      enuminationRepairsMore.classList.add("enumeration-repairs_none");

      enuminationRepairsButtonText.innerText = "Показать все";
    } else {
      stateEnumerationRepairs = true;

      enuminationRepairsBlock.classList.add("enumeration_active");

      enuminationRepairsMore.classList.remove("enumeration-repairs_none");
      enuminationRepairsMore.classList.add("enumeration-repairs_active");

      enuminationRepairsButtonText.innerText = "Закрыть";
    }
  };
};
