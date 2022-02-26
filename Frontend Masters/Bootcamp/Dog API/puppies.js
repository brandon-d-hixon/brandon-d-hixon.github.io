const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addPuppy() {
  fetch(BREEDS_URL)
    // show loading spinner
    .then((response) => response.json())
    .then((data) => {
      let img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute Puppy";

      document.querySelector(".puppies").appendChild(img);
    });

  // stop showing loading spinner
}

let puppyButton = document.querySelector(".add-puppy");

puppyButton.addEventListener("click", addPuppy);
