export const questionsSwitch = () => {
  const questionsList = document.querySelector(`.questions-section__list`);
  const questionItems = questionsList.querySelectorAll(`.questions-section__item`);

  questionItems.forEach((item) => {
    item.classList.add(`questions-section__item--closed`);
  });

  questionsList.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `BUTTON`) {
      const questionItem = evt.target.parentElement;
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
