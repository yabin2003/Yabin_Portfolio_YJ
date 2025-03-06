
document.addEventListener('DOMContentLoaded', function() 
{
    const menu = document.getElementById('menu-icon');
    menu.addEventListener('click', () => {
        document.body.classList.toggle('show');
    });
    document.getElementById('slider').addEventListener('click', () => {
        
        document.body.classList.toggle('no-animation'); 
                
    });
    
});

function createConfetti() {

    confetti({
        particleCount: 700,
        startVelocity: 20,
        spread: 360,
        gravity: 1,
        drift: 0,
        ticks: 200,  

    });   
}

// WhatsApp Integration
function openWhatsApp() {
    const message = 'Hi! Yabin';
    const phoneNumber = "919342901190";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}


/*
function close_window()
{
    window.close();
}
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }

        const formData = { name, email, message };

        try {
            const response = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                contactForm.reset();
            } else {
                alert('Failed to submit the contact form.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
    });
});

*/