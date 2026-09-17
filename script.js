// แสดงข้อความเมื่อกดปุ่มดูผลงาน
const buttons = document.querySelectorAll(".work-card button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("กำลังเปิดดูรายละเอียดผลงาน");
    });
});

// เอฟเฟกต์เมื่อเลื่อนหน้า
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// ตั้งค่าเริ่มต้นของ Section
sections.forEach(function(section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
});