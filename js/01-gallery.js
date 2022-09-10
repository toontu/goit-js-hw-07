// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// console.log(galleryItems);

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGalleryEl = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
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
};

const galleryItemsArr = galleryItems.map(makeGalleryItem);
// const galleryItemsArr = galleryItems.map(el => {
//   return makeGalleryItem(el);
// });

imageGalleryEl.innerHTML = galleryItemsArr.join('');
// console.log(galleryItemsArr.join(''));

let instance;

const onGalleryItemClick = event => {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
  window.addEventListener('keydown', onEscapeBtnPush);
};

const onEscapeBtnPush = event => {
  if (event.code !== 'Escape') {
    return;
  }

  instance.close();
  window.removeEventListener('keydown', onEscapeBtnPush);
};

imageGalleryEl.addEventListener('click', onGalleryItemClick);
