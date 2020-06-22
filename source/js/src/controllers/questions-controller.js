export const questionsController = () => {
  const questionsList = document.querySelector(`.questions-section__list`);
  const questionItems = questionsList.querySelectorAll(`.questions-section__item`);

  questionItems.forEach((item) => {
    item.classList.add(`questions-section__item--closed`);
  });

  questionsList.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `BUTTON` || evt.target.tagName === `P` || evt.target.tagName === `LI`) {
      let questionItem = evt.target.parentElement;
      if (evt.target.tagName === `LI`) {
        questionItem = evt.target;
      }
      const questionDescription = questionItem.querySelector(`.questions-section__item-description`);

      if (questionItem.classList.contains(`questions-section__item--closed`)) {
        questionItem.classList.remove(`questions-section__item--closed`);
        questionItem.classList.add(`questions-section__item--open`);
        questionDescription.classList.add(`answer-show`);
      } else {
        questionItem.classList.add(`questions-section__item--closed`);
        questionItem.classList.remove(`questions-section__item--open`);
        questionDescription.classList.remove(`answer-show`);
      }

    }
  });
};
