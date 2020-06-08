import {questionsSwitch} from "./controllers/questions-controller.js";
import {reviewsSlider} from "./controllers/reviews-controller.js";
import {galleryController} from "./controllers/gallery-controller.js";
import {yandexMapController} from "./controllers/yandex-map.js";

// Открытие/закрытие ответа на вопрос в questions-section

questionsSwitch();

// Активация слайдера для reviews-section

reviewsSlider();
yandexMapController();
galleryController();
