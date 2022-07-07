import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

const makeGalleryItemsEl = ({ preview, original, description } = {}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
};

// const galleryItemsArray = images.map(el => {
//   return makeGalleryItemsEl(el);
// });
const galleryItemsArray = galleryItems.map(makeGalleryItemsEl);

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsArray.join(''));

backdropEl.addEventListener('click', event => {
  event.preventDefault();
});

const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`);

instance.show();
