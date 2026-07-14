const currectPhoneInputSybmols = ["+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const heroDownloadBtn = document.querySelector(".hero__download-btn");
const profitabilityBtn = document.querySelector(".profitability__btn");
const portfolioBtn = document.querySelector(".portfolio__btn");
const faqLeftBtn = document.querySelector(".faq-left__btn");

const catalogModal = document.querySelector(".catalog-modal");
const catalogModalBox = document.querySelector(".catalog-modal .catalog-modal__box");
const catalogModalMain = document.querySelector(".catalog-modal__main");
const catalogModalForm = document.querySelector(".catalog-modal .catalog-modal__form");
const catalogModalFormInputs = document.querySelectorAll(".catalog-modal__input");
const catalogModalFormError = document.querySelector(".catalog-modal__error");
const catalogModalCloseBtn = document.querySelector(".catalog-modal__close-btn");
const catalogModalSuccess = document.querySelector(".catalog-modal__success");
const catalogModalSuccessText = document.querySelector(".catalog-modal__success-text");

const consultModal = document.querySelector(".consult-modal");
const consultModalBox = document.querySelector(".consult-modal .consult-modal__box");
const consultModalMain = document.querySelector(".consult-modal__main");
const consultModalForm = document.querySelector(".consult-modal .consult-modal__form");
const consultModalFormInputs = document.querySelectorAll(".consult-modal__input");
const consultModalFormError = document.querySelector(".consult-modal__error");
const consultModalCloseBtn = document.querySelector(".consult-modal__close-btn");
const consultModalSuccess = document.querySelector(".consult-modal__success");

const allModals = [catalogModal, consultModal];
const closeCatalogModalArgs = [catalogModal, catalogModalFormInputs, catalogModalSuccess, catalogModalMain];
const closeConsultModalArgs = [consultModal, consultModalFormInputs, consultModalSuccess, consultModalMain];
const closeAllModalArgs = [closeCatalogModalArgs, closeConsultModalArgs];

const faqItemTitles = document.querySelectorAll(".faq__item-title");
const faqItems = document.querySelectorAll(".faq__item");
const faqItemTexts = document.querySelectorAll(".faq__item-text");

// Modal
const closeModal = (modal, modalFormInputs, modalSuccess, modalMain) => {
    modal.classList.remove("open");
    modalFormInputs.forEach(input => input.value = "");
    modalSuccess.classList.add("none");
    modalMain.classList.remove("none");
};
const closeAllModals = () => {
    for (let i = 0; i <= allModals.length; i++) {
        closeModal(...closeAllModalArgs[i]);
    };
};

// CatalogModal
catalogModalSuccess.classList.add("none");
catalogModalFormError.classList.add("none");

[heroDownloadBtn, profitabilityBtn, portfolioBtn].forEach(btn => btn.addEventListener("click", () => catalogModal.classList.add("open")));
catalogModalBox.addEventListener("click", (e) => e._isClickWithInModal = true);
catalogModalCloseBtn.addEventListener("click", closeAllModals);
catalogModal.addEventListener("click", (e) => {
    if(e._isClickWithInModal) return;
    closeAllModals();
});

catalogModalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentCatalogModalFormInputs = document.querySelectorAll(".catalog-modal__input");
    let areAllInputsFilled = true;
    let isNameInputValueCorrect = true;
    let isPhoneInputValueCorrect = true;

    // Проверки
    if(currentCatalogModalFormInputs[0].value.trim().length < 3) isNameInputValueCorrect = false;
    if(currentCatalogModalFormInputs[2].value.trim().replaceAll(" ", "").length < 12) isPhoneInputValueCorrect = false;
    for (const input of currentCatalogModalFormInputs) {
        if(input.value.trim() == "") {
            areAllInputsFilled = false;
            break;
        };
    };
    for (const char of currentCatalogModalFormInputs[2].value.trim().replaceAll(" ", "")) {
        if(!currectPhoneInputSybmols.includes(char)) {
            isPhoneInputValueCorrect = false;
            break;
        };
    };

    if(areAllInputsFilled && isNameInputValueCorrect && isPhoneInputValueCorrect) {
        catalogModalSuccessText.innerHTML = `Каталог отправлен на ${currentCatalogModalFormInputs[1].value.trim()}`;
        catalogModalSuccess.classList.remove("none");
        catalogModalMain.classList.add("none");
        catalogModalFormError.classList.add("none");
    } else {
        catalogModalFormError.classList.remove("none");

        if(!areAllInputsFilled) {
            catalogModalFormError.innerHTML = "Заполните все поля!";
            return;
        };
        if(!isNameInputValueCorrect) {
            catalogModalFormError.innerHTML = "Введите корректное имя!";
            return;
        };
        if(!isPhoneInputValueCorrect) {
            catalogModalFormError.innerHTML = "Введите корректный телефон!";
            return;
        };
    };
});

// СonsultModal
consultModalSuccess.classList.add("none");
consultModalFormError.classList.add("none");

[faqLeftBtn].forEach(btn => btn.addEventListener("click", () => consultModal.classList.add("open")));
consultModalBox.addEventListener("click", (e) => e._isClickWithInModal = true);
consultModalCloseBtn.addEventListener("click", closeAllModals);
consultModal.addEventListener("click", (e) => {
    if(e._isClickWithInModal) return;
    closeAllModals();
});

consultModalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentConsultModalFormInputs = document.querySelectorAll(".consult-modal__input");
    let areAllInputsFilled = true;
    let isNameInputValueCorrect = true;
    let isPhoneInputValueCorrect = true;

    // Проверки
    if(currentConsultModalFormInputs[0].value.trim().length < 3) isNameInputValueCorrect = false;
    if(currentConsultModalFormInputs[2].value.trim().replaceAll(" ", "").length < 12) isPhoneInputValueCorrect = false;
    for (const input of currentConsultModalFormInputs) {
        if(input.value.trim() == "") {
            areAllInputsFilled = false;
            break;
        };
    };
    for (const char of currentConsultModalFormInputs[2].value.trim().replaceAll(" ", "")) {
        if(!currectPhoneInputSybmols.includes(char)) {
            isPhoneInputValueCorrect = false;
            break;
        };
    };

    if(areAllInputsFilled && isNameInputValueCorrect && isPhoneInputValueCorrect) {
        consultModalSuccess.classList.remove("none");
        consultModalMain.classList.add("none");
        consultModalFormError.classList.add("none");
    } else {
        consultModalFormError.classList.remove("none");

        if(!areAllInputsFilled) {
            consultModalFormError.innerHTML = "Заполните все поля!";
            return;
        };
        if(!isNameInputValueCorrect) {
            consultModalFormError.innerHTML = "Введите корректное имя!";
            return;
        };
        if(!isPhoneInputValueCorrect) {
            consultModalFormError.innerHTML = "Введите корректный телефон!";
            return;
        };
    };
});

// FaqItemTexts
faqItemTexts.forEach(text => text.classList.add("none"));

faqItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const textByIndex = faqItemTexts[index];
        
        if(textByIndex.classList.contains("none")) {
            textByIndex.classList.remove("none");
        } else {
            textByIndex.classList.add("none");
        };
    });
});