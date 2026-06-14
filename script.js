const fileInput = document.getElementById('file-input');
const gallery = document.getElementById('gallery');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;

    // Проходим по каждому выбранному файлу
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Проверяем, что это точно картинка
        if (!file.type.match('image.*')) {
            continue;
        }

        const reader = new FileReader();

        // Когда файл прочитан, создаем элементы на странице
        reader.onload = (e) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Загруженное изображение';

            galleryItem.appendChild(img);
            gallery.appendChild(galleryItem);
        };

        // Читаем файл как URL-адрес данных
        reader.readAsDataURL(file);
    }
    
    // Сбрасываем значение инпута, чтобы можно было загрузить те же фото повторно
    fileInput.value = '';
});
