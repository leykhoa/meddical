$(".slider-center").slick({
    centerMode: true,
    mobileFirst: true,
    centerPadding: "16px",
    slidesToShow: 1.67,
    arrows: false,
    dots: true,
    autoPlay: true,
    autoplaySpeed: 3000,
    speed: 300,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
                centerPadding: "20px",
                centerMode: false,
            },
        },
    ],
});
$(".slider-one").slick({
    centerPadding: "0",
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoPlay: true,
    autoplaySpeed: 3000,
    speed: 300,
});

//my script

function handleToggle(element) {
    const menu = document.querySelector(".navbar__menu");
    const toggleClose = document.querySelector("#toggle-close");
    const toggleOpen = document.querySelector("#toggle-open");
    console.log(element.id);
    if (menu.classList.value.includes("display-none")) {
        toggleOpen.classList.add("display-none");
        toggleClose.classList.remove("display-none");
        menu.classList.remove("display-none");
    } else {
        toggleClose.classList.add("display-none");
        toggleOpen.classList.remove("display-none");
        menu.classList.add("display-none");
    }
}
