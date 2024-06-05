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
