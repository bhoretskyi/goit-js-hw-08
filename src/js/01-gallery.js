// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");

const imgElements = galleryItems.reduce(
  (acum, item) =>
    (acum += `<div class="gallery__item"> <a class="gallery__item" href="${item.original}"><img class="gallery__image"
      src = "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a></div>`),
  ""
);

imgContainer.insertAdjacentHTML("beforeend", imgElements);
var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
 
});