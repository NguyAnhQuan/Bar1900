document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Hiển thị thông báo
        var confirmation = confirm("Đội ngũ Bar1900 rất chân thành cảm ơn khi bạn đã phản hồi tới chúng tôi. Hẹn gặp bạn ở lần ghé thăm tiếp theo.");

        // Nếu người dùng nhấn OK, chuyển đến action của form
        if (confirmation) {
            form.submit();
        }
    });
});


function sendEmail(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định
  
    var subject = document.getElementById('subject').value; // Lấy nội dung từ phần Subject
  
    Email.send({
      Host: "smtp.gmail.com",
      Username: "anhq46724@gmail.com",
      Password: "your_password", // Thay your_password bằng mật khẩu Gmail của bạn
      To: 'anhq46724@gmail.com',
      From: "anhq46724@gmail.com",
      Subject: subject, // Sử dụng nội dung từ phần Subject
      Body: "And this is the body"
    }).then(
      message => {
        alert("Đội ngũ Bar1900 rất chân thành cảm ơn khi bạn đã phản hồi tới chúng tôi. Hẹn gặp bạn ở lần ghé thăm tiếp theo.");
        document.getElementById('contact-form').submit(); // Chuyển đến action của form
      }
    );
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', sendEmail);
  });
  


//FAQ
// Lấy tất cả các nút trong phần FAQ
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    // Kiểm tra trạng thái hiện tại của câu hỏi đã được mở rộng hay chưa
    const itemToggle = this.getAttribute('aria-expanded');
    // Đặt thuộc tính aria-expanded của tất cả các câu hỏi về false (thu gọn tất cả các câu hỏi)
    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    // Nếu câu hỏi chưa được mở rộng, đặt thuộc tính aria-expanded của câu hỏi hiện tại về true (mở rộng câu hỏi này)
    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

// Thêm sự kiện click cho từng câu hỏi
items.forEach((item) => item.addEventListener('click', toggleAccordion));

