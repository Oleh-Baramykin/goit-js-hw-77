import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryMurkUp = renderGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMurkUp);

function renderGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const onImgClick = (event) => {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.refresh();
};
gallery.addEventListener("click", onImgClick);
