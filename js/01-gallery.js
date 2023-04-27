import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const addGalleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = addGalleryMarkup;
// console.log(galleryList);

galleryList.addEventListener("click", onImageClick);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
      <li class="gallery__item">
       <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"/>
        </a>
    </li>`
    )
    .join("");
}

function onImageClick(event) {
  //* зображення обгорнуте посиланням, заборона браузеру відкривати картинку
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  //   console.log(event.target);
  //   console.log(isGalleryImage);
  //* перевірка, якщо не картинка - виходимо
  if (!isGalleryImage) {
    return;
  }
  //* else: картинка тоді виконуємо бібліотеку Lightbox (підключена в 01-gallery.html) ВІДКРИВАЄМО

  const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  //* ЗАКРИВАЄМО
  galleryList.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
