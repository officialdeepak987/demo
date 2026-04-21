document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            // Close other open items
            const currentActive = document.querySelector('.faq-item.active');
            if(currentActive && currentActive !== item) {
                currentActive.classList.remove('active');
                currentActive.querySelector('.faq-body').style.maxHeight = null;
            }

            // Toggle current item
            item.classList.toggle('active');
            const body = item.querySelector('.faq-body');
            
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });

    // --- WhatsApp Booking Form ---
    const whatsappForm = document.getElementById('whatsappForm');
    
    if(whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const department = document.getElementById('department').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;

            // Formulate WhatsApp Message
            let whatsappText = `*New Appointment Request* \n\n`;
            whatsappText += `*Name:* ${name}\n`;
            whatsappText += `*Phone:* ${phone}\n`;
            whatsappText += `*Department:* ${department}\n`;
            whatsappText += `*Preferred Date:* ${date}\n`;
            
            if(message) {
                whatsappText += `*Notes:* ${message}\n`;
            }

            // Encode for URL
            const encodedText = encodeURIComponent(whatsappText);
            
            // Clinic WhatsApp Number (From provided data)
            const clinicNumber = "918368151142";
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodedText}`;
            
            // Open in new tab
            window.open(whatsappURL, '_blank');
            
            // Optional: Reset form
            whatsappForm.reset();
        });
    }
});
