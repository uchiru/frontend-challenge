// "use strict";


const CATS = `https://api.thecatapi.com/v1/images/search`;
let objLike = [];
let img = null;
let objLike1 = [];
let objLike2 = {};
const buttonNext = document.querySelector('.buttonLike__next');
const buttonLike = document.querySelector('.buttonLike__like');
const buttonList = document.querySelector('.buttonList');
let goodsTitle = document.querySelectorAll('.goods-title');
const listLike = document.querySelector('.listLike');



function service(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.setRequestHeader("x-api-key", "594bbe42-29d2-4378-93df-e4e8a3613f6d");
	const loadHandler = () => {
		callback(JSON.parse(xhr.response));
	}
	xhr.onload = loadHandler;
	xhr.send();
}


class GoodsItem {
	constructor({ url = 'Картинка', id = 'noId', breeds: { 0: { name = 'Котик без имени' } = [] } }) {
		this.img = url;
		this.id = id;
		this.name = name;
		img = url;
	}
	render() {
		return `
		     <div class="goods-item" id="${this.id}">
		 		<img class="img-tovar" src="${this.img}" alt="Kot">
		     </div>
		`
	}
	renderCard() {
		return `
		     <div class="goods-item" id="${this.id}">
				 <div class="goods-title" id="${this.id + 'a'}" > Убрать из любимчиков </div>
		 		<img class="img-tovar" src="${this.img}" alt="Kot">
		     </div>
		`
	}

	renderSlaider() {
		return `
		<div class="item ${this.id}">
		<div class="goods-title" id="${this.id + 'a'}" > Убрать из любимчиков </div>
		<a class="blockSlaider" href="#"><img class="catImg" src="${this.img}" alt="котик"></a>
		<div class="slideText">${this.name}</div>
	</div>
		`
	}
}

class GoodsList {
	fetchData(callback) {
		service(CATS, (data) => {
			this.list = data;
			objLike2 = data;
			callback();
		});
	}

	render() {
		let goodsList = this.list.map(item => {
			const goodsItem = new GoodsItem(item);
			return goodsItem.render()

		}).join('');

		document.querySelector('.goods-list').innerHTML = goodsList;



	}
}

let goodsList = new GoodsList;
goodsList.fetchData(() => {
	goodsList.render();
});

buttonLike.addEventListener('click', e => {
	e.preventDefault();
	objLike.push(img)
	objLike1.push(objLike2[0]);


	let slider = objLike1.map(item => {
		const imgObj = new GoodsItem(item);
		return imgObj.renderSlaider()

	}).join('');
	slider = slider + '				<a class="prev" onclick="minusSlide()">&#10094;</a>	<a class="next" onclick="plusSlide()">&#10095;</a>'
	document.querySelector('.slider').innerHTML = slider;
	showSlides(slideIndex);
}, false);


buttonNext.addEventListener('click', e => {
	e.preventDefault();
	goodsList = new GoodsList;
	goodsList.fetchData(() => {
		goodsList.render();
	});

}, false);



document.addEventListener('click', s => {
	goodsTitle.forEach(
		item => {
			item.addEventListener('click', e => {

				let jod = String(item.id);
				let qq = jod.slice(0, -1);
				block = document.getElementById(qq);
				let ee = "item ";
				let ww = String(ee + qq);
				let blockSli = document.getElementsByClassName(ww);


				blockSli[0].remove();
				block.remove();
				objLike1.forEach(item => {
					if (item.id === qq) {

						objLike1.splice(item, 1);
					}
				})


			}
			)
		}
	)
}, false);





buttonList.addEventListener('click', e => {
	e.preventDefault();

	let textBlock = objLike1.map(item => {
		const imgObj = new GoodsItem(item);
		return imgObj.renderCard()

	}).join('');
	document.querySelector('.listLike').innerHTML = textBlock;
	let block = null;
	goodsTitle = document.querySelectorAll('.goods-title');



}, false);




//слайдер

/* Индекс слайда по умолчанию */
var slideIndex = 1;


/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("item");
	var dots = document.getElementsByClassName("slider-dots_item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	//dots[slideIndex - 1].className += " active";
}


var timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer() {
	clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
	timer = setInterval(function () {
		slideIndex++;
		showSlides(slideIndex);
	}, 5000);
}

