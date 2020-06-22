import Inputmask from "inputmask";

export const popupController = () => {
  const mainSection = document.querySelector(`main`);
  const callLink = document.querySelector(`.page-header__link--order`);
  const contactSectionForm = document.querySelector(`.contact-section__form`);
  const detailsSectionForm = document.querySelector(`.details-section__feedback-form`);

  const ESC_KEY = 27;

  const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
  };

  const callPopup = () => {
    return (
      `<div class="call-popup">
        <button class="call-popup__close-button" type="button">
          <span class="visually-hidden">закрыть окно</span>
        </button>
        <h2 class="call-popup__heading">Заказать звонок</h2>
        <p class="call-popup__description">
          Оставьте ваши контактные данные, мы свяжемся с вами в течение рабочего дня
          и обязательно поможем найти ответ на ваш вопрос!
        </p>
        <form class="call-popup__form" action="#" method="post">
          <fieldset class="call-popup__fieldset">
            <ul class="call-popup__list">
              <li class="call-popup__item">
                <label class="call-popup__label visually-hidden" for="call-popup-user-name">Ваше имя:</label>
                <input class="call-popup__input input" type="tel" name="call-popup-user-name" id="call-popup-user-name"
                placeholder="ИМЯ" pattern="^[А-Яа-яЁё\s]+$" required>
                <span class="call-popup__input-error input-error">Введите имя русскими буквами</span>
              </li>
              <li class="call-popup__item call-popup__item--req">
                <label class="call-popup__label visually-hidden" for="call-popup-user-tel">Телефон:*</label>
                <input class="call-popup__input input" type="tel" name="call-popup-user-tel" id="call-popup-user-tel" placeholder="ТЕЛЕФОН"
                pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}\s\d{2}\s\d{2}" required>
                <span class="call-popup__input-error input-error">Введите телефон в формате +7 (123) 456 78 90</span>
              </li>
            </ul>
          </fieldset>
          <input class="call-popup__button button" type="submit"><span class="visually-hidden">отправить</span></input>
          <input class="call-popup__checkbox visually-hidden" type="checkbox" name="popup-consent" id="popup-consent" value="true" required>
          <label class="call-popup__label call-popup__label--consent" for="popup-consent">
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных
          </label>
        </form>
      </div>`
    );
  };

  const resultPopup = () => {
    return (
      `<div class="result-popup">
        <button class="result-popup__close-button" type="button">
          <span class="visually-hidden">закрыть окно</span>
        </button>
        <h2 class="result-popup__heading">Заявка принята</h2>
        <p class="result-popup__message">Мы приняли ваши данные и вскоре мы перезвоним вам для уточнения деталей!</p>
        <button class="result-popup__button button">Понятно</button>
      </div>`
    );
  };

  const addCallPopup = () => {
    mainSection.classList.add(`page-main--faded`);
    render(mainSection, callPopup(), `beforeend`);
    const popupCall = document.querySelector(`.call-popup`);
    const closeButton = popupCall.querySelector(`.call-popup__close-button`);
    const popupForm = document.querySelector(`.call-popup__form`);
    const callInput = document.getElementById(`call-popup-user-tel`);
    const userNameInput = document.getElementById(`call-popup-user-name`);
    const popupCheckbox = popupCall.querySelector(`.call-popup__checkbox`);

    userNameInput.focus();

    Inputmask({
      mask: "+7 (999) 999 99 99",
      greedy: false,
    }).mask(callInput);

    callInput.addEventListener(`input`, function () {
      const inputValidity = callInput.validity.patternMismatch;
      if (!inputValidity) {
        callInput.setCustomValidity(``);
      } else {
        callInput.setCustomValidity(`Введите номер телефона`);
      }
    });

    popupCheckbox.setCustomValidity(`Необходимо подтвердить согласие на обработку персональных данных`);

    popupCheckbox.addEventListener(`change`, function () {
      const сheckboxValidity = callInput.validity.valid;
      if (!сheckboxValidity) {
        popupCheckbox.setCustomValidity(`Необходимо подтвердить согласие на обработку персональных данных`);
      } else {
        popupCheckbox.setCustomValidity(``);
      }
    });

    document.body.style.overflow = `hidden`;

    deletePopup(popupCall, closeButton);
    popupForm.addEventListener(`submit`, onPopupResultSubmit);
  };

  const addResultPopup = () => {
    mainSection.classList.add(`page-main--faded`);
    render(mainSection, resultPopup(), `beforeend`);
    const popupResult = document.querySelector(`.result-popup`);
    const closeButton = popupResult.querySelector(`.result-popup__close-button`);
    const okButton = popupResult.querySelector(`.result-popup__button`);

    document.body.style.overflow = `hidden`;

    deletePopup(popupResult, closeButton);
    deletePopup(popupResult, okButton);
  };

  const onPopupResultSubmit = (evt) => {
    evt.preventDefault();
    const popupCall = document.querySelector(`.call-popup`);
    const popupResult = popupCall.querySelector(`.result-popup`);

    popupCall.remove();

    if (!popupResult) {
      addResultPopup();
    }

    document.removeEventListener(`click`, onPopupResultSubmit);
  };

  const deletePopup = (popup, closeButton) => {
    const onPopupClose = function () {
      popup.remove();
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, onPopupEscPress);
      document.removeEventListener(`click`, onPopupClose);
      mainSection.classList.remove(`page-main--faded`);
    };

    const onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEY) {
        onPopupClose();
      }
    };

    closeButton.addEventListener(`click`, onPopupClose);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const onCallLinkClick = (evt) => {
    evt.preventDefault();
    const popupCall = document.querySelector(`.call-popup`);
    if (!popupCall) {
      addCallPopup();
    }
  };

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    const popupResult = document.querySelector(`.result-popup`);
    if (!popupResult) {
      addResultPopup();
    }
  };

  callLink.addEventListener(`click`, onCallLinkClick);
  detailsSectionForm.addEventListener(`submit`, onSubmitButtonClick);
  contactSectionForm.addEventListener(`submit`, onSubmitButtonClick);
};
