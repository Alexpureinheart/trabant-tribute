const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    image.classList.toggle("enlarged");
    image.classList.toggle("gallery-image");
  });
});
