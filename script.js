const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    image.classList.toggle("enlarged");
    image.classList.toggle("gallery-image");
  });
});

const tManual = document.querySelector(".t-manual");

// code below is producing weird results

// tManual.addEventListener("click", function () {
//   tManual.classList.toggle("enlarged-manual");
//   tManual.classList.toggle("t-manual");
// });
