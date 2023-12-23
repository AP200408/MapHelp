const observer = new IntersectionObserver(
    (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                observer.unobserve(element.target);
                element.target.style.animationPlayState = "running";
            }bfv
        });
    },
    { rootMargins: "0% 0% 0% 0%" }
);

const elements = document.querySelectorAll(".animate-fade-up");

elements.forEach((element) => {
    observer.observe(element);
});
