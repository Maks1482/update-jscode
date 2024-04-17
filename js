window.onload = function() {
    // Отримання всіх зображень у галереї
    var galleryImages = document.querySelectorAll('.gallery img');

    // Додавання обробників подій для кожного зображення
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('mouseover', function(event) {
            showImage(event.target);
            console.log("Mouseover event fired.");
        });
        galleryImages[i].addEventListener('mouseout', function() {
            hideImage();
            console.log("Mouseleave event fired.");
        });
    }
}

function showImage(img) {
    // Оновлення фонового зображення та тексту
    document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
    document.querySelector('#image').innerHTML = img.alt;
    console.log(`Image focused: ${img.alt}`);
}

function hideImage() {
    // Скидання фонового зображення та тексту
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Наведіть курсор на зображення нижче, щоб відобразити його тут";
    console.log("Image blur.");
}
