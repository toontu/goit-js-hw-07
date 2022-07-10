import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('div.gallery');

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

galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsArray.join(''));

let instance;

const onImageClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
};

galleryListEl.addEventListener('click', onImageClick);

const onEscBtnPush = event => {
  if (event.code !== 'Escape') {
    return;
  }

  instance.close();
};

window.addEventListener('keydown', onEscBtnPush);
