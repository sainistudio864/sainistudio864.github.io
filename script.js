
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = this;

    try {
        const response = await fetch(
            'https://formspree.io/f/xgaoyogy',
            {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if (response.ok) {
            alert('Booking Request Successfully Sent!');
            form.reset();
        } else {
            alert('Booking submit nahi hui. Formspree settings check karein.');
        }
    } catch (error) {
        console.error(error);
        alert('Network error! Internet check karein.');
    }
});
