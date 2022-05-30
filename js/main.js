let images = document.querySelectorAll('.image-block__img');
let url = 'https://api.thecatapi.com/v1/images/search';

const getData = async() => {
    try {
        for (let i = 0; i < images.length; i++) {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                images[i].src = data[0].url;
            }
        }
    } catch (error) {
        console.log(error);
    }
}
getData();
