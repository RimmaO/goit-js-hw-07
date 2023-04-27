import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const addGalleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", addGalleryMarkup);
// console.log(galleryList);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

//* використовуємо бібліотеку SimpleLightbox (підключена в 02-lightbox.html)

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// variant 2 for create Markup

// const createGalleryMarkup = galleryItems.reduce(
//   (previousValue, { preview, original, description }) =>
//     (previousValue += `
// <li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//    </a>
// </li>`),

//   ""
// );
// galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup);
