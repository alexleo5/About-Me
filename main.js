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
    const menuLength = menuItem.length;
    for(let i = 0; i < menuLength; i++){
        if(menuItem[i].href === currentLocation){
            menuItem[i].className = 'active';
        }
    }
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

// Dropdown menu for smaller screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
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

// Interactive elements - Tooltip
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', function() {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip-text';
        tooltipElement.textContent = tooltipText;
        tooltip.appendChild(tooltipElement);
    });

    tooltip.addEventListener('mouseout', function() {
        const tooltipText = tooltip.querySelector('.tooltip-text');
        if (tooltipText) {
            tooltipText.remove();
        }
    });
});

// Additional interactive elements - Carousel
const carousel = document.querySelector('.carousel');
const carouselImages = [
    'image1.jpg',
    'image2.jpg',
    // Add more images as needed
];

let currentImageIndex = 0;

function changeImage() {
    carousel.style.backgroundImage = `url(${carouselImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
}

setInterval(changeImage, 3000);

// More complex form validation
contactForm.addEventListener('input', function(e) {
    const input = e.target;
    if (input.validity.valid) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
});
