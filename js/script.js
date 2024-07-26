var swiper = new Swiper(".swiper", {
    cssMode: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
        },
    }, 
    breakpoints: {
        0: {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            }
        },
        640: {
            slidesPerView: 2,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            }
        },
        925: {
            slidesPerView: 3,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            }

        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});