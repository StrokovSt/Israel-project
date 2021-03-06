export const galleryController = () => {
  const galleryContainer = document.querySelector(`.gallery-section`);
  const galleryControlsContainer = galleryContainer.querySelector(`.gallery-section__controls-container`);
  const sliderItems = galleryContainer.querySelectorAll(`.gallery-section__item`);
  const sliderPointsContainer = galleryContainer.querySelector(`.gallery-section__slider-points`);
  const sliderPoints = galleryContainer.querySelectorAll(`.gallery-section__slider-point`);

  const showControls = () => {
    if (!galleryControlsContainer.classList.contains(`gallery-section__controls-container--on`) && galleryContainer.offsetWidth < 1024) {
      galleryControlsContainer.classList.add(`gallery-section__controls-container--on`);
    }
  };

  showControls();

  const slides = [];
  let clickCount = 0;

  sliderItems.forEach(function (slide, index) {
    slides.push({
      slide,
      index,
    });
  });

  let slideStep = -parseFloat(getComputedStyle(sliderItems[0]).width);
  sliderPoints[clickCount].classList.add(`gallery-section__slider-point--active`);

  galleryControlsContainer.addEventListener(`click`, function () {
    sliderPoints.forEach((item) => {
      item.classList.remove(`gallery-section__slider-point--active`);
    });

    sliderPoints[clickCount].classList.add(`gallery-section__slider-point--active`);
  });

  sliderPointsContainer.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `LI`) {
      clickCount = evt.target.dataset.point;
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + (slideStep - 35) * clickCount + `px)`;
      });
    }
  });

  window.addEventListener(`resize`, function () {
    if (galleryContainer.offsetWidth < 1024) {
      showControls();
      slideStep = -parseFloat(getComputedStyle(sliderItems[0]).width);
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + (slideStep - 35) * clickCount + `px)`;
      });
    } else {
      galleryControlsContainer.classList.remove(`gallery-section__controls-container--on`);
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + 0 + `px)`;
      });
    }
  }, false);
};
