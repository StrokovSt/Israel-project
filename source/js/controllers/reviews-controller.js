export const reviewsSlider = () => {
  const sliderContainer = document.querySelector(`.reviews-section__slider`);
  const sliderWrapper = sliderContainer.querySelector(`.reviews-section__slider-wrapper`);
  const sliderItems = sliderContainer.querySelectorAll(`.reviews-section__slider-item`);
  const sliderControllers = sliderContainer.querySelector(`.reviews-section__controls-container`);

  const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width);
  const slideWidth = parseFloat(getComputedStyle(sliderItems[0]).width);

  const items = [];

  sliderItems.forEach(function (item, index) {
    items.push({ item: item, position: index, transform: 0 });
  });

  console.log(items[0].position);

  sliderControllers.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `BUTTON`) {
      console.log(items[0].position);
    }
  });
};
