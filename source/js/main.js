import {questionsController} from "./controllers/questions-controller.js";
import {reviewsController} from "./controllers/reviews-controller.js";
import {galleryController} from "./controllers/gallery-controller.js";
import {popupController} from "./controllers/popup-controller.js";
import {webpController} from "./controllers/webp-controller.js";
import {yandexMapController} from "./controllers/yandex-map.js";

import Blazy from "blazy";

const bLazy = new Blazy({
  selector: 'img' // all images
});

webpController();

// call-popup

popupController();

// Открытие/закрытие ответа на вопрос в questions-section

questionsController();

// Активация слайдера для reviews-section

reviewsController();


// Активация слайдера для gallery-section

galleryController();


// Подключение Яндекс карт

yandexMapController();
