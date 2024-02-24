// Function to fetch Discord profile picture
function fetchDiscordProfilePicture(userId) {
    const apiUrl = `https://discordlookup.mesavirep.xyz/v1/user/${userId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const profilePictureUrl = data.avatar.link;
            // Update the Discord icon with the fetched profile picture
            const discordIcon = document.getElementById("discord-icon");
            discordIcon.style.backgroundImage = `url('${profilePictureUrl}')`;

            // Update favicon
            const favicon = document.querySelector("link[rel='icon']");
            favicon.href = profilePictureUrl; // Assuming the profile picture URL is the desired favicon
        })
        .catch(error => console.error('Error fetching Discord profile picture:', error));
}

// Function to update clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call the function to fetch the Discord profile picture with the Discord user ID
fetchDiscordProfilePicture("274178934143451137"); // Replace with the actual Discord user ID

// Call the function to update the clock every second
updateClock();
setInterval(updateClock, 1000);

window.onload = function() {
    /* Fade in the tab on mobile screens */
    if (window.innerWidth <= 768) {
        const leftTab = document.getElementById('left-tab');
        leftTab.style.opacity = '1';
    }
};

