h4 = document.querySelector("h4");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let year = now.getFullYear();
let date = now.getDate();
let hour = now.getHours(); 
let min = now.getMinutes();

h4.innerHTML = `${day}, ${hour}:${min}`;

function search(event){
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = `Have a sunny day in ${cityInput.value}`;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search)