const submitButton = document.getElementById("submit-button");
let searchResult = document.querySelector("target");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const inputElement = document.getElementById("boxtext");
    const userInput = inputElement.value;
    searchResult = userInput;
    alert(userInput);
    inputElement.value = "";
});

const SEARCH_API_URL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = "AIzaSyBY1qgqkOZzHYXsEM45f0OVAwI0A-R8LmY";
const SEARCH_ENGINE_ID = "178866f9a1b18489c";

let url = new URL(SEARCH_API_URL + "?key=" + API_KEY + "&cx=" + SEARCH_ENGINE_ID + "&q=" + userInput);
