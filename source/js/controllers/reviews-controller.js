export const reviewsController = () => {
  const sliderContainer = document.querySelector(`.reviews-section__slider`);
  const sliderItems = sliderContainer.querySelectorAll(`.reviews-section__slider-item`);
  const sliderControllers = sliderContainer.querySelector(`.reviews-section__controls-container`);
  const sliderCounter = sliderContainer.querySelector(`.reviews-section__control-count`);

  const slideWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
  let slideStep = -slideWidth;

  sliderControllers.classList.add(`reviews-section__controls-container--visible`);

  const items = [];
  let clickCount = 0;
  sliderItems.forEach(function (item) {
    items.push({
      item,
    });
  });
  sliderCounter.innerHTML = `1/${items.length}`;

  sliderControllers.addEventListener(`click`, function (evt) {
    const controlType = evt.target.classList.contains(`reviews-section__control--left`) ? `left` : `right`;
    if (evt.target.tagName === `BUTTON` && controlType === `right`) {
      clickCount += 1;
      if (clickCount >= items.length) {
        clickCount = 0;
      }
    }

    if (evt.target.tagName === `BUTTON` && controlType === `left`) {
      clickCount -= 1;
      if (clickCount < 0) {
        clickCount = items.length - 1;
      }
    }

    items.forEach((item) => {
      item.item.style.transform = `translateX(` + slideStep * clickCount + `px)`;
    });

    sliderCounter.innerHTML = `${clickCount + 1}/${items.length}`;
  });

  window.addEventListener(`resize`, function () {
    slideStep = -parseFloat(getComputedStyle(sliderItems[0]).width);
    items.forEach((item) => {
      item.item.style.transform = `translateX(` + slideStep * clickCount + `px)`;
    });
  }, false);
};
