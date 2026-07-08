// Переменные
const faqItemTitles = document.querySelectorAll(".faq__item-title");
const faqItemTexts = document.querySelectorAll(".faq__item-text");

// Стили
faqItemTexts.forEach(text => text.classList.add("none"));

// Логика
faqItemTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        const textByIndex = faqItemTexts[index];
        
        if(textByIndex.classList.contains("none")) {
            textByIndex.classList.remove("none");
        } else {
            textByIndex.classList.add("none");
        };
    });
});