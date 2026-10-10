document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Formspree URL ko yahan sahi se format kiya gaya hai
    fetch("https://formspree.io", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: document.querySelector('input[type="email"]')?.value || '',
            phone: document.querySelector('input[type="tel"]')?.value || document.querySelector('input[placeholder*="phone" i]')?.value || '',
            shoot_type: document.querySelector('select')?.value || '',
            details: document.querySelector('textarea')?.value || ''
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Booking Request Successfully Sent!");
            this.reset(); // Yeh form ko successfully clear kar dega
        } else {
            alert("Oops! Request accept nahi hui. ID check karein.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Network error! Code check karein.");
    });
});

