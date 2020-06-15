import Inputmask from "inputmask";

export const inputController = () => {
  const detailsSEctionForm = document.querySelector(`.details-section__feedback-form`);
  const detailsSEctionInput = document.getElementById(`details-section-user-tel`);
  const contactSectionForm = document.querySelector(`.contact-section__form`);
  const contactSectionInput = document.getElementById(`contact-section-user-tel`);
  Inputmask("+7 (999) 999 99 99").mask(detailsSEctionInput);
  Inputmask("+7 (999) 999 99 99").mask(contactSectionInput);

  detailsSEctionForm.addEventListener("submit", function () {
    detailsSEctionForm.reset();
  });

  contactSectionForm.addEventListener("submit", function () {
    contactSectionForm.reset();
  });

  detailsSEctionInput.addEventListener("input", function () {
    const inputValidity = detailsSEctionInput.validity.patternMismatch;
    if (!inputValidity) {
      detailsSEctionInput.setCustomValidity("");
    } else {
      detailsSEctionInput.setCustomValidity("Введите номер телефона");
    }
  });

  contactSectionInput.addEventListener("input", function () {
    const inputValidity = contactSectionInput.validity.patternMismatch;
    if (!inputValidity) {
      contactSectionInput.setCustomValidity("");
    } else {
      contactSectionInput.setCustomValidity("Введите номер телефона");
    }
  });
};
