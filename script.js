let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-time')
    searchBar.classList.remove('active')
};

menu.addEventListener('click', () =>{
    searchBtn.classList.remove('fa-time')
    searchBar.classList.remove('active')
    menu.classList.toggle('fa-time')
    navbar.classList.toggle('active')
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-time')
    searchBar.classList.toggle('active')
});

const videoSlider = document.getElementById('video-slider');
const vidBtns = document.querySelectorAll('.vid-btn');

vidBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Lấy đường dẫn video từ thuộc tính data-src
    const videoSrc = btn.getAttribute('data-src');

    // Thay đổi video
    videoSlider.src = videoSrc;

    // Xóa lớp active khỏi tất cả các nút
    vidBtns.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Thêm lớp active vào nút được nhấp chuột
    btn.classList.add('active');
  });
});

// random số bàn
function bookTable() {
    // Tạo số bàn ngẫu nhiên từ 1 đến 10
    const tableNumber = Math.floor(Math.random() * 10) + 1;
  
    // Tạo một chữ cái viết hoa ngẫu nhiên
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
    // Hiển thị thông báo với số bàn ngẫu nhiên và chữ cái viết hoa ngẫu nhiên
    alert(`You have successfully booked your table: 
    Your table number is ${tableNumber}${randomChar} 
    Good luck with this experience 🥂`);
  }

// slide review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay:{
    delay: 2500,
    disableOnInteraction:false,
  },
  breakpoints:{
    640:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
  },
});

// slide bramd

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay:{
    delay: 2500,
    disableOnInteraction:false,
  },
  breakpoints:{
    450:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
    },
    991:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 5,
    },
  },
});


document.addEventListener('DOMContentLoaded', function () {
  var bookLink = document.querySelector('a[href="#book"]');
  var reviewLink = document.querySelector('a[href="#review"]');

  bookLink.addEventListener('click', function (event) {
    event.preventDefault();
    var bookSection = document.getElementById('book');
    bookSection.scrollIntoView({ behavior: 'smooth' });
  });

  reviewLink.addEventListener('click', function (event) {
    event.preventDefault();
    var reviewSection = document.getElementById('review');
    reviewSection.scrollIntoView({ behavior: 'smooth' });
  });
});


//food
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});


// Lắng nghe sự kiện click trên biểu tượng fa-heart
document.querySelectorAll('.dishes .box-container .box .fas.fa-heart').forEach(function(heart) {
  heart.addEventListener('click', function() {
    // Toggle lớp CSS "active" cho biểu tượng
    this.classList.toggle('active');
  });
});

// thông baos đặt món thành công
document.querySelectorAll('.dishes .box-container .box button').forEach(function(button) {
  button.addEventListener('click', function() {
    // Tạo phần tử thông báo
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = '👏You have successfully added the dish, please wait for our service for a while👏';

    // Thêm thông báo vào trang web
    document.body.appendChild(notification);

    // Xóa thông báo sau 3 giây
    setTimeout(function() {
      notification.remove();
    }, 4000);
  });
});


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
