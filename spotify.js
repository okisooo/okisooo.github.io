// spotify.js
async function fetchCurrentlyPlaying(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { 'Authorization': `Bearer ${accessToken}` },
    });

    if (response.ok) {
        const data = await response.json();
        return {
            name: data.item.name,
            artist: data.item.artists[0].name,
            album: data.item.album.name,
            image: data.item.album.images[0].url,
            url: data.item.external_urls.spotify,
        };
    } else {
        console.error('Failed to fetch currently playing track:', response);
        return null;
    }
}

const accessToken = 'your-access-token';  // Replace with your actual access token

window.onload = async function() {
    const currentlyPlaying = await fetchCurrentlyPlaying(accessToken);

    if (currentlyPlaying) {
        document.getElementById('album-art').src = currentlyPlaying.image;
        document.getElementById('track-name').textContent = currentlyPlaying.name;
        document.getElementById('artist-name').textContent = currentlyPlaying.artist;
        document.getElementById('album-name').textContent = currentlyPlaying.album;
        document.getElementById('spotify-link').href = currentlyPlaying.url;
    }
};