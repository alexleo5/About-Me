// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current page in the navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    menuItem.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
});

// Add a subtle fade-in animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    setTimeout(() => mainContent.style.opacity = 1, 10);
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Form validation and submission
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('submit-form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Form submitted successfully!');
        contactForm.reset();
    })
    .catch(error => {
        alert('Error submitting form. Please try again.');
    });
});

// Dynamic video gallery
const videoGallery = document.querySelector('.video-gallery');
const videos = [
    { id: '1', title: 'Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: '2', title: 'Video 2', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // Add more videos as needed
];

function loadVideos() {
    videos.forEach(video => {
        const videoElement = document.createElement('iframe');
        videoElement.src = video.url;
        videoElement.title = video.title;
        videoElement.frameBorder = '0';
        videoElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        videoElement.allowFullscreen = true;
        videoGallery.appendChild(videoElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadVideos();
});
