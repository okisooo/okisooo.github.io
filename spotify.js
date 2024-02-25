import fetch from 'node-fetch';
import express from 'express';
const app = express();

// Middleware to fetch the currently playing track
app.use(async (req, res, next) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const apiUrl = 'https://accounts.spotify.com/api/token';

    // Request access token from Spotify
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64')),
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    const accessToken = data.access_token;

    // Use the access token to get the currently playing track
    const currentlyPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const currentlyPlayingData = await currentlyPlayingResponse.json();

    // Attach the currently playing track to the request object
    req.currentlyPlaying = currentlyPlayingData;

    next();
});

// Route to return the currently playing track as JSON
app.get('/currently-playing', (req, res) => {
    res.json(req.currentlyPlaying);
});

app.listen(3000, () => console.log('Server is running on port 3000'));

// Client-side code to fetch and display the currently playing track
function fetchCurrentlyPlaying() {
    return fetch('/currently-playing')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const trackName = data.item.name;
            const artistName = data.item.artists[0].name;

            return {
                trackName: trackName,
                artistName: artistName
            };
        })
        .catch(error => console.error('Error fetching currently playing track:', error));
}

function displayCurrentlyPlaying() {
    fetchCurrentlyPlaying()
        .then(currentlyPlaying => {
            const currentlyPlayingElement = document.getElementById('currently-playing');
            currentlyPlayingElement.textContent = `Currently playing: ${currentlyPlaying.trackName} by ${currentlyPlaying.artistName}`;
        })
        .catch(error => console.error('Error displaying currently playing track:', error));
}

// Call the function when the script loads
window.onload = displayCurrentlyPlaying();