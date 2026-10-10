// Form Submission Handle karne ke liye
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Aapki enquiry submit ho gayi hai! Hum jaldi hi aapse contact karenge.');
    this.reset();
});
