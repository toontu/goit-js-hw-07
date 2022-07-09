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

const onImageClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
};

galleryEl.addEventListener('click', onImageClick);

// const visible = basicLightbox.visible();
// console.log(visible);
