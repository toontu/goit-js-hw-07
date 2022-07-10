import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const makeGalleryItemsEl = ({ preview, original, description } = {}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
  `;
};

const galleryItemsArray = galleryItems.map(makeGalleryItemsEl);

galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsArray.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionDelay: 250,
  captionsData: 'alt',
});

// ****** - так не работает:
// const onImageClick = event => {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionSelector: 'img',
//     captionDelay: 250,
//     captionsData: 'alt',
//   });
// };
// *********
