// spotify.js
async function getAccessToken(clientId, clientSecret) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.access_token;
    } else {
        console.error('Failed to get access token:', response);
        return null;
    }
}

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

window.onload = async function() {
    const clientId = process.env.SPOTIFY_ID;  // Replace with your actual client ID
    const clientSecret = process.env.SPOTIFY_SECRET;  // Replace with your actual client secret
    const accessToken = await getAccessToken(clientId, clientSecret);

    if (accessToken) {
        const currentlyPlaying = await fetchCurrentlyPlaying(accessToken);

        if (currentlyPlaying) {
            document.getElementById('album-art').src = currentlyPlaying.image;
            document.getElementById('track-name').textContent = currentlyPlaying.name;
            document.getElementById('artist-name').textContent = currentlyPlaying.artist;
            document.getElementById('album-name').textContent = currentlyPlaying.album;
            document.getElementById('spotify-link').href = currentlyPlaying.url;
        }
    }
};