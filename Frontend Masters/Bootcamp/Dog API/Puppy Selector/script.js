//setting main URLs
const breedsURL = "https://dog.ceo/api/breeds/list/all";
// pull select element from dom
let domList = document.querySelector("#breedList");
let mainImage = document.querySelector("#main");
let loadingImg = document.querySelector("#loadingImg");

// fetch breeds list from url
fetch(breedsURL)
  // parse as JSON
  .then((response) => response.json())
  .then(function (data) {
    // pull keys from response object
    let breedsArray = Object.keys(data.message);
    // create an option element for each breed in the array / set the values for option and append it to the dom element
    breedsArray.forEach(function (item) {
      let option = document.createElement("option");
      option.value = item;
      option.innerHTML = item;
      domList.appendChild(option);
    });
  })
  .catch((response) => console.log("No response from server"));

// --------------------------------------------------------------------------------------------------------

function getDog(url) {
  loadingImg.classList.add("show");
  mainImage.classList.remove("show");
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      mainImage.src = data.message;
    });
}

mainImage.addEventListener("load", function () {
  loadingImg.classList.remove("show");
  mainImage.classList.add("show");
});

domList.addEventListener("change", function (event) {
  let returnedURL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDog(returnedURL);
});

// domList.addEventListener("change", function (event) {
//   let selectedBreed = event.target.value;
//   let url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => (mainImage.src = data.message));
// });

// make url

// show loading spinner

// fetch from API

// use the URL to change the current image

// stop showing loading spinner
