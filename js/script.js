const slider = document.getElementById("slider");
const sliderArticles = slider.querySelectorAll("article");
const sliderIndicators = slider.querySelectorAll(".indicators li");

const slideTo = (index) => {
    sliderArticles.forEach((article) => {
        article.classList.remove("active");
    });
    sliderIndicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });

    sliderArticles[index].classList.add("active");
    sliderIndicators[index].classList.add("active");
};

sliderIndicators.forEach((indicator) => {
    indicator.addEventListener("click", (ev) => {
        const index = ev.target.dataset.index;
        slideTo(index);
    });
});

let index = sliderArticles.length;
setInterval(() => {
    index++;
    index = index >= sliderArticles.length ? 0 : index;
    slideTo(index);
}, 5000);