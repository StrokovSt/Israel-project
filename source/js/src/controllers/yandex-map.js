export const yandexMapController = () => {
  const defaultMap = document.querySelector(`.details-section__map`);
  defaultMap.classList.add(`details-section__map--off`);
  const yandexMap = document.querySelector(`.details-section__iframe-container`);
  yandexMap.classList.add(`details-section__iframe-container--on`);
  ymaps.ready(function () {
    const myMap = new ymaps.Map(`map`, {
        center: [55.028522, 82.928281],
        zoom: 18
      }, {
        searchControlProvider: `yandex#search`
      }),

      // Создаём макет содержимого.

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: `Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»`,
        balloonContent: `Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»`
      }, {

        // Опции.
        // Необходимо указать данный тип макета.

        iconLayout: `default#image`,

        // Своё изображение иконки метки.

        iconImageHref: "img/map-pin.png",

        // Размеры метки.

        iconImageSize: [18, 28],
        iconImageOffset: [-25, -55]
      });

    myMap.geoObjects
        .add(myPlacemark);
  });
};
