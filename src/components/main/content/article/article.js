export const article = () => {
  let stateArticle = false;

  const readMore = document.querySelector(".article__read-more");
  const readMoreText = document.querySelector(".article__read-more-text");
  const readMoreItem = document.querySelector(".article__text_read-more");

  readMore.onclick = () => {
    if (stateArticle) {
      stateArticle = false;

      readMoreItem.classList.remove("article__text_active");
      readMoreItem.classList.add("article__text_none");

      readMoreText.innerText = "Читать далее";
    } else {
      stateArticle = true;

      readMoreItem.classList.remove("article__text_none");
      readMoreItem.classList.add("article__text_active");

      readMoreText.innerText = "Закрыть";
    }
  };
};
