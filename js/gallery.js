var galleryModal = document.getElementById('galleryModal')
var galleryImg = document.querySelectorAll('img.gallery-Img')
var closeModalGallery = document.getElementById('closeGalleryModal')
var imgModal = document.getElementById('imgModal')


galleryImg.forEach(function(element) {
    element.addEventListener('click', function(e) {
        galleryModal.style.display = "block";
        imgModal.src = this.src;
    });
});

closeModalGallery.addEventListener('click', function() {
    galleryModal.style.display = "none";
});