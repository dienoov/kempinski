const nav = document.querySelector("nav");

document.addEventListener("scroll", () => {
    scrollY > 500 ?
        nav.classList.add("scrolled") :
        nav.classList.remove("scrolled");
});

const slider = document.getElementById("slider");
const sliderArticles = slider.querySelectorAll("article");
const sliderIndicators = slider.querySelectorAll(".indicators li");

let sliderIndex = sliderArticles.length;

const sliderSlideTo = (index) => {
    sliderIndex = index;

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
        sliderSlideTo(index);
    });
});

setInterval(() => {
    sliderIndex++;
    sliderIndex = sliderIndex >= sliderArticles.length ? 0 : sliderIndex;
    sliderSlideTo(sliderIndex);
}, 5000);

const about = document.getElementById("about");
const aboutImages = about.querySelectorAll("img");
const aboutIndicators = about.querySelectorAll(".indicators li");

let aboutIndex = aboutImages.length;

const aboutSlideTo = (index) => {
    aboutIndex = index;

    aboutImages.forEach((article) => {
        article.classList.remove("active");
    });
    aboutIndicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });

    aboutImages[index].classList.add("active");
    aboutIndicators[index].classList.add("active");
};

aboutIndicators.forEach((indicator) => {
    indicator.addEventListener("click", (ev) => {
        const index = ev.target.dataset.index;
        aboutSlideTo(index);
    });
});

setInterval(() => {
    aboutIndex++;
    aboutIndex = aboutIndex >= aboutImages.length ? 0 : aboutIndex;
    aboutSlideTo(aboutIndex);
}, 5000);