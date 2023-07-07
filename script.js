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

