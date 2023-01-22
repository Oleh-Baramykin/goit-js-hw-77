import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const basicLightbox = require("basiclightbox");
const gallery = document.querySelector(".gallery");
const galleryMurkUp = renderGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMurkUp);

function renderGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const onImgClick = (event) => {
  event.preventDefault();
  const linkOriginal = event.target.dataset.source;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${linkOriginal}" width="800" height="600">`);
  instance.show();

  const onEscClick = (event) => {
    if (event.code === "Escape") {
      instance.close();
      gallery.removeEventListener("keydown", onEscClick);
    }
  };
  gallery.addEventListener("keydown", onEscClick);
};

gallery.addEventListener("click", onImgClick);
