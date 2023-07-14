// pure image zoom
const zoomer = document.querySelector(".swiper-slide");
const wrapImg = document.querySelector(".swiper-slide .image");
const result = document.querySelector(".swiper-slide .result");
const size = 3;

wrapImg.addEventListener("mousemove", function (e) {
result.classList.remove('hide')

const img = wrapImg.querySelector("img");
let x = (e.offsetX / this.offsetWidth) * 100;
let y = (e.offsetY / this.offsetHeight) * 100;

// move result
let posX = e.pageX - zoomer.offsetLeft;
let posY = e.pageY - zoomer.offsetTop;
result.style.cssText = `
            background-image: url(${img.src});
            background-size: ${img.width * size}px ${img.height * size}px;
            background-position : ${x}% ${y}%;
            left: ${posX - 100}px;
            top: ${posY - 100}px;
        `;
});
