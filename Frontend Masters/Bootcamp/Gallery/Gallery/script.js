const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImages = document.querySelectorAll(".gallery-img");
let currentGalleryIndex = 0;

nextBtn.addEventListener("click", function () {
  galleryImages[currentGalleryIndex].classList.remove("active");
  currentGalleryIndex++;
  galleryImages[currentGalleryIndex].classList.add("active");
  prevBtn.disabled = false;
  if (galleryImages.length === currentGalleryIndex + 1) {
    nextBtn.disabled = true;
  }
  console.log("current image number: " + (currentGalleryIndex + 1));
});

prevBtn.addEventListener("click", function () {
  nextBtn.disabled = false;
  galleryImages[currentGalleryIndex].classList.remove("active");
  currentGalleryIndex--;
  galleryImages[currentGalleryIndex].classList.add("active");
  if (currentGalleryIndex === 0) {
    prevBtn.disabled = true;
  }
  console.log("current image number: " + (currentGalleryIndex + 1));
});
