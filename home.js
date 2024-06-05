document.addEventListener('DOMContentLoaded', function() {
    const homeContainer = document.getElementById('home-container');
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.textContent = 'Welcome to Our Channel!';
    homeContainer.appendChild(welcomeMessage);

    const videoList = [
        { title: 'Video 1', description: 'Description for Video 1' },
        { title: 'Video 2', description: 'Description for Video 2' },
        { title: 'Video 3', description: 'Description for Video 3' },
        // Add more videos as needed
    ];

    videoList.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.title;

        const videoDescription = document.createElement('p');
        videoDescription.textContent = video.description;

        videoCard.appendChild(videoTitle);
        videoCard.appendChild(videoDescription);
        homeContainer.appendChild(videoCard);
    });

    homeContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'H3') {
            alert('You clicked on: ' + event.target.textContent);
        }
    });
});
