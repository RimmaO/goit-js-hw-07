import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const addGalleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = addGalleryMarkup;
console.log(galleryList);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
      <li class="gallery__item">
       <a class="gallery__link" href="${item.original}">
          <img
            loading="lazy"
            class="gallery__image lazyload"
            data-src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"/>
        </a>
    </li>`
    )
    .join("");
}

if ("loading" in HTMLImageElement.prototype) {
  console.log("Browser use it");
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  console.log("Browser do not use");

  const scriptForLazysizes = document.createElement("script");
  scriptForLazysizes.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  scriptForLazysizes.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  scriptForLazysizes.crossOrigin = "anonymous";
  scriptForLazysizes.referrerPolicy = "no-referrer";

  document.body.appendChild(scriptForLazysizes);
}
