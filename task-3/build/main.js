"use strict";
fetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: 'application/json'
    }
})
    .then(function (response) {
    return response.json(); // Parse the JSON from the response
})
    .then(function (data) {
    populateJoke(data);
})
    .catch(function (error) {
    console.error("Error fetching the joke:", error);
});
function populateJoke(data) {
    const jokeElement = document.getElementById('joke');
    if (jokeElement && data.joke) {
        jokeElement.textContent = data.joke;
    }
    else {
        console.error("No joke element found or invalid joke data");
    }
}
const newJoke = document.getElementById('newJoke');
newJoke.addEventListener("click", handleNewJoke);
function handleNewJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        populateJoke(data);
    })
        .catch(function (error) {
        console.error("Error fetching the joke:", error);
    });
}
