// Масив зображень
const images = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    }
  ];
  
  // Функція для створення розмітки галереї
  function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    }).join('');
  }
  
  // Додавання розмітки в DOM
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(images);
  galleryContainer.innerHTML = galleryMarkup;
  
  // Делегування подій і відкриття модального вікна
  galleryContainer.addEventListener('click', onGalleryClick);
  
  function onGalleryClick(event) {
    event.preventDefault(); // Забороняємо відкриття зображення у новій вкладці
  
    const isGalleryImage = event.target.classList.contains('gallery-image');
  
    if (!isGalleryImage) {
      return;
    }
  
    const largeImageURL = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);
  
    instance.show();
  }