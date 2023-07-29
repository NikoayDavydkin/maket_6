export const brands = () => {
  let stateBrands = false;

  const brandsMore = document.querySelector(".brands__read-more");
  const brands = document.querySelector(".brands");
  const brandsButtons = document.querySelector(".brands__buttons-more");
  const brandsMoreText = document.querySelector(".brands__read-more-text");

  brandsMore.onclick = () => {
    if (stateBrands) {
      stateBrands = false;

      brands.classList.remove("brands_active");

      brandsButtons.classList.remove("brands__buttons_active");
      brandsButtons.classList.add("brands__buttons_none");

      brandsMoreText.innerText = "Показать все";
    } else {
      stateBrands = true;

      brands.classList.add("brands_active");

      brandsButtons.classList.remove("brands__buttons_none");
      brandsButtons.classList.add("brands__buttons_active");

      brandsMoreText.innerText = "Закрыть";
    }
  };
};
