// Swiper

const productsSlider = new Swiper(".products-swiper", {
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },

    slidesPerView: 2.2,
    autoHeight: false,
    watchOverflow: true,
    spaceBetween: 30,
    grid: {
        rows: 2,
    },
});

const CoffeeComboSlider = new Swiper(".coffee-combo-swiper", {
    navigation: {
        nextEl: '.coffee-combo-custom-next',
        prevEl: '.coffee-combo-custom-prev',
    },
    // slidesPerView: 3.4,
    slidesPerView: 3.6,
    autoHeight: false,
    watchOverflow: true,
    spaceBetween: 30,
    slidesPerView: 3.3,
    slidesPerColumn: 1,
});