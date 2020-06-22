import Inputmask from "inputmask";

export const popupController = () => {
  const mainSection = document.querySelector(`main`);
  const callLink = document.querySelector(`.page-header__link--order`);
  const contactSectionForm = document.querySelector(`.contact-section__form`);
  const detailsSectionForm = document.querySelector(`.details-section__feedback-form`);

  const popupCallTemplate = document.querySelector(`#call-popup`).content;
  const popupResultTemplate = document.querySelector(`#result-popup`).content;

  const ESC_KEY = 27;

  const addCallPopup = () => {
    const popupCallContainer = popupCallTemplate.cloneNode(true);
    mainSection.appendChild(popupCallContainer);
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

    callInput.addEventListener("input", function () {
      const inputValidity = callInput.validity.patternMismatch;
      if (!inputValidity) {
        callInput.setCustomValidity("");
      } else {
        callInput.setCustomValidity("Введите номер телефона");
      }
    });

    popupCheckbox.setCustomValidity("Необходимо подтвердить согласие на обработку персональных данных");

    popupCheckbox.addEventListener("change", function () {
      const сheckboxValidity = callInput.validity.valid;
      if (!сheckboxValidity) {
        popupCheckbox.setCustomValidity("Необходимо подтвердить согласие на обработку персональных данных");
      } else {
        popupCheckbox.setCustomValidity("");
      }
    });

    document.body.style.overflow = `hidden`;

    deletePopup(popupCall, closeButton);
    popupForm.addEventListener(`submit`, onPopupResultSubmit);
  };

  const addResultPopup = () => {
    const popupResultContainer = popupResultTemplate.cloneNode(true);
    mainSection.appendChild(popupResultContainer);
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
