document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.getElementById('about-container');
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Us';
    aboutContainer.appendChild(aboutTitle);

    const aboutContent = document.createElement('p');
    aboutContent.textContent = 'We are a team dedicated to providing quality content. Our journey began in...';
    aboutContainer.appendChild(aboutContent);

    const teamMembers = [
        { name: 'John Doe', role: 'Founder' },
        { name: 'Jane Smith', role: 'Content Manager' },
        { name: 'Bob Johnson', role: 'Editor' },
        // Add more team members as needed
    ];

    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;

        memberCard.appendChild(memberName);
        memberCard.appendChild(memberRole);
        aboutContainer.appendChild(memberCard);
    });
});
