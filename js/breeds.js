//Модуль получения доступных пород
//Функция запроса и вывода в option-ы  определённый selector-ом select доступных пород 
const breedsRequest = (breedsUrl, api_key, selector) => {
    //Создаём массив пород
    let storedBreeds = [];
     //Делаем запрос списка пород на сервер
    fetch(breedsUrl,{headers: {'x-api-key': api_key}})
    
    .then((response) => {
        return response.json();
    })
    
    .then((data) => {
        //Убираем из полученного массива объекты без фото
        data = data.filter(img => img.image?.url != null);
        //Записываем полученный массив данных в рабочий массив
        storedBreeds = data;
        //Проходим по массиву
        for (let i = 0; i < storedBreeds.length; i++) {
            //Записываем объект из массива
            const breed = storedBreeds[i];
            //Если объект не имеет фото переходим к следующему объекту массива
            if(!breed.image) continue
            //Создаём элемент option
            let option = document.createElement('option');
            //Добавляем в атрибут value элемента option идентификатор породы
            option.value = `${breed.id}`;
            //Добавляем название породы в элемент option
            option.innerHTML = `${breed.name}`;
            //Добавляем в DOM в указанный select сформированный элемент option
            selector.appendChild(option);
        }
    })
    
    .catch(error => console.log('error', error));
}

export {breedsRequest};