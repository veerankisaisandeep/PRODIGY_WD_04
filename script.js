// Placeholder for any future JavaScript functionality.
console.log("Portfolio website loaded successfullywindow.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const homeSection = document.querySelector('.section-home');
    const skillsSection = document.querySelector('.section-skills');
    const experienceSection = document.querySelector('.section-experience');
    const projectsSection = document.querySelector('.section-projects');
    const contactSection = document.querySelector('.section-contact');

    const sections = [homeSection, skillsSection, experienceSection, projectsSection, contactSection];

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            switch (section.id) {
                case 'home':
                    nav.style.backgroundColor = '#0D1B2A';
                    break;
                case 'skills':
                    nav.style.backgroundColor = '#D4AF37';
                    break;
                case 'experience':
                    nav.style.backgroundColor = '#800020';
                    break;
                case 'projects':
                    nav.style.backgroundColor = '#0D1B2A';
                    break;
                case 'contact':
                    nav.style.backgroundColor = '#D4AF37';
                    break;
                default:
                    nav.style.backgroundColor = '#0D1B2A';
            }
        }
    });
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#F5CBA7';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#D4AF37';
    });
});

