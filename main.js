const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
// انتظار تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 1. إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        // إذا النقر مو على زر القائمة ولا على القائمة نفسها
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

});