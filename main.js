document.addEventListener('DOMContentLoaded', () => {
 // Navbar Scroll Animasyonu
 window.addEventListener('scroll', () => {
 const navbar = document.querySelector('.navbar');
 if (window.scrollY > 50) {
 navbar.classList.add('scrolled');
 } else {
 navbar.classList.remove('scrolled');
 }
 });
 // Hero Section Animasyonu
 const heroSection = document.querySelector('.hero');
 if (heroSection) {
 heroSection.style.opacity = "0";
 setTimeout(() => {
 heroSection.style.transition = "opacity 2s";
 heroSection.style.opacity = "1";
 }, 500);
 }
 // Form Gönderme Mesajı
 const form = document.querySelector('form');
 if (form) {
 form.addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Mesajınız başarıyla gönderildi!');
 form.reset();
 });
 }
 // Smooth Scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const targetId = this.getAttribute('href').substring(1);
 const targetSection = document.getElementById(targetId);
 if (targetSection) {
 window.scrollTo({ top: targetSection.offsetTop - 70, behavior:
'smooth' });
 }
 });
 });
});
function acceptCookies() {
 document.querySelector(".cookie-banner").style.display = "none";
 localStorage.setItem("cookiesAccepted", "true");
}
window.onload = function () {
 if (localStorage.getItem("cookiesAccepted")) {
 document.querySelector(".cookie-banner").style.display = "none";
 }
};
