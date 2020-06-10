export const webpController = () => {
  const canUseWebp = () => {
    let elem = document.createElement(`canvas`);
    if (!(elem.getContext && elem.getContext(`2d`))) {
      return elem.toDataURL(`image/webp`).indexOf(`data:image/webp`) === 0;
    }
    return false;
  };

  document.addEventListener(`DOMContentLoaded`, () => {
    if (canUseWebp()) {
      let images = document.querySelectorAll(`[data-bg]`);
      images.forEach((image) => {
        const webpClass = image.classList[0] + `--webp-on`;
        image.classList.add(webpClass);
      });
    }
  });
};
