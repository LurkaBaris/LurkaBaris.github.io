/*const*/
const popup = document.querySelector('.popup');
const classesToAdd = ['popup_active', 'popup_menu'];
const inputTel = document.querySelectorAll('.popup__input_tel');
const popupBasket = document.querySelector('.popup__basket');
const totalSum = document.querySelector('.popup__price');
const validate = document.querySelector('.popup__validate');
/*const*/

/*obj product*/
const product = [
	{
		name: 'Салаты',
		items: [
			{
				name: 'Загадка',
				price: 85
			},
			{
				name: 'Золотая россыпь',
				price: 60
			},
			{
				name: 'Винегрет',
				price: 60
			},
			{
				name: 'Витаминный',
				price: 85
			},
			{
				name: 'Белый лебедь',
				price: 75
			},
			{
				name: 'Селёдка под шубой',
				price: 75
			},
		]
	},
	{
		name: 'Супы',
		items: [
			{
				name: 'Лагман',
				price: 140
			},
			{
				name: 'Щи с говядиной',
				price: 90
			},
			{
				name: 'Борщ с говядиной',
				price: 90
			},
			{
				name: 'Солянка',
				price: 100
			},
		]
	},
	{
		name: 'Второе блюдо',
		items: [
			{
				name: 'Пельмени жаренные',
				price: 120
			},
			{
				name: 'Запеканка',
				price: 150
			},
			{
				name: 'Манты рубленые с говядиной',
				price: 150
			}
		]
	},
	{
		name: 'Гарниры',
		items: [
			{
				name: 'Рис мозайка',
				price: 35
			},
			{
				name: 'Пюре картофельное',
				price: 35
			},
			{
				name: 'Макароны отварные',
				price: 35
			},
			{
				name: 'Картофель фри',
				price: 50
			},
			{
				name: 'Картофель запечёный',
				price: 45
			},
		]
	},
	{
		name: 'Горячее',
		items: [
			{
				name: 'Сосиски',
				price: 85
			},
			{
				name: 'Котлета по домашнему',
				price: 95
			},
			{
				name: 'Голень куриная жареная',
				price: 50
			},
			{
				name: 'Куриная отбивная',
				price: 125
			},
			{
				name: 'Поджарка из свинины',
				price: 110
			},
		]
	},
	{
		name: 'Блины',
		items: [
			{
				name: 'Блины с мясом',
				price: 70
			},
			{
				name: 'Блины с творогом',
				price: 60
			}
		]
	},
	{
		name: 'Выпечка',
		items: [
			{
				name: 'Эчпочмак',
				price: 45
			},
			{
				name: 'Пирожок с картошкой',
				price: 20
			},
			{
				name: 'Пирожок с капустой',
				price: 25
			},
			{
				name: 'Пицца',
				price: 45
			},
			{
				name: 'Венгерка',
				price: 30
			}
		]
	},
	{
		name: 'Напитки',
		items: [
			{
				name: 'Морс клюквенный',
				price: 55
			},
			{
				name: 'Компот',
				price: 35
			}
		]
	},
];
const total = {
	items: [

	],
	price: 0,
};
/*obj*/

/*input filter*/
function setInputFilter(textbox, inputFilter) {
	["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
		textbox.addEventListener(event, function() {
			if (inputFilter(this.value)) {
				this.oldValue = this.value;
				this.oldSelectionStart = this.selectionStart;
				this.oldSelectionEnd = this.selectionEnd;
			} else if (this.hasOwnProperty("oldValue")) {
				this.value = this.oldValue;
				this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
			} else {
				this.value = "";
			}
		});
	});
}
/*input*/

/*create product in popup*/

	/*popup count btn*/
const btnValueEvent = (minus, btn, value, item) => {
	if (minus) {
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			if (Number(value.innerHTML) > 0) {
				value.innerHTML = String(Number(value.innerHTML) - 1);
				let index = total.items.findIndex(product => product.name === item.name);
				if (value.innerHTML === '0') {
					total.items.splice(index,1);
				} else {
					total.items[index].count = value.innerHTML;
				}
				total.price -= item.price;
				totalSum.innerHTML = total.price + ' ₽';
				validate.classList.remove('popup__validate_active');
			}
		});
	} else {
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			if (Number(value.innerHTML) < 30) {
				value.innerHTML = String(Number(value.innerHTML) + 1);
				if (total.items.find(product => product.name === item.name)) {
					let index = total.items.findIndex(product => product.name === item.name);
					total.items[index].count = value.innerHTML;
				} else {
					total.items.push({name: item.name, count: value.innerHTML});
				}
				total.price += item.price;
				totalSum.innerHTML = total.price + ' ₽';
				validate.classList.remove('popup__validate_active');
			}
		});
	}
};
	/*popup count btn*/

	/*svg in popup-tile*/
const createSvgArrow = () => {
	let arrowSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	arrowSvg.classList.add('popup__arrow');

	let pathArrow = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	pathArrow.setAttribute("d","M-0.000,1.546 L5.500,6.999 L11.000,1.546 L9.440,-0.001 L5.500,3.905 L1.560,-0.001 L-0.000,1.546 Z");

	arrowSvg.append(pathArrow);
	return arrowSvg;
};
	/*svg in popup-tile*/

	/*svg in popup-btn*/
const createSvgBtn = (minus) => {
	const wrapper = document.createElement('div');
	wrapper.className = 'popup__dish-btn';

	const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	svg.setAttribute('width', '15px');
	svg.setAttribute('fill', '#56b01a');
	svg.setAttribute('viewBox', '0 0 24 24');

	let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');

	if (minus) {
		path.setAttribute('d', 'M0 10h24v4h-24z');
	} else {
		path.setAttribute('d', 'M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z');
	}

	svg.append(path);
	return svg;
};
	/*svg in popup-btn*/

	/*btn in popup-count*/
const createBtnValue = (minus) => {
	const dishBtn = document.createElement('div');
	dishBtn.className = 'popup__dish-btn';

	if (minus) {
		dishBtn.append(createSvgBtn(minus));
	} else {
		dishBtn.append(createSvgBtn(minus));
	}

	return dishBtn;
};
	/*btn in popup-count*/

	/*dish item in popup-category*/
const createDish = (item) => {
	const dish = document.createElement('div');
	dish.className = 'popup__dish';

	const dishName = document.createElement('div');
	dishName.className = 'popup__dish-name';
	dishName.innerHTML = item.name;

	const dishCount = document.createElement('div');
	dishCount.className = 'popup__dish-count';

	const dishValue = document.createElement('div');
	dishValue.className = 'popup__dish-value';
	dishValue.innerHTML = '0';

	const dishBtnMinus = createBtnValue(true);
	btnValueEvent(true, dishBtnMinus, dishValue, item);
	const dishBtnPlus = createBtnValue(false);
	btnValueEvent(false, dishBtnPlus, dishValue, item);

	dishCount.append(dishBtnMinus, dishValue, dishBtnPlus);
	dish.append(dishName, dishCount);
	return dish;
};
	/*dish item in popup-category*/

	/*popup accordion*/
const popupAccordion = (item, container) => {
	item.addEventListener("click", () => {
		item.classList.toggle('popup__item_active');
		if (container.style.maxHeight) {
			container.style.maxHeight = null;
		} else {
			container.style.maxHeight = `${container.scrollHeight}px`;
		}
	});
};
	/*popup accordion*/

const createProduct = (items) => {
	items.forEach((obj) => {
		const category = document.createElement('div');
		category.className = 'popup__item';

		const titleCategory = document.createElement('div');
		titleCategory.className = 'popup__item-title';
		titleCategory.innerHTML = obj.name;
		titleCategory.append(createSvgArrow());

		const container = document.createElement('div');
		container.className = 'popup__item-container';

		obj.items.forEach((item) => {
			container.append(createDish(item));
		});
		popupAccordion(category,container);

		category.append(titleCategory, container);
		popupBasket.append(category);
	})
};
/*create product in popup*/

/*open popup basket*/
const openBasket = () => {
	popup.classList.add(...classesToAdd);
};
/*open popup basket*/

/*back call*/
const openCallBack = () => {
	popup.classList.add('popup_active', 'popup_call');
};
/*back call*/

window.onload = () => {
	/*init product in popup*/
	createProduct(product);
	/*init product in popup*/

	/*init filter input*/
	inputTel.forEach((input)=> {
		setInputFilter(input, function(value) {
			return /^-?\d*$/.test(value); });
	});
	/*init filter input*/

	/*faq accordion*/
	document.querySelectorAll('.faq__item').forEach((accordion) => {
		const hiddenSection = accordion.querySelector('.faq__hidden');

		accordion.addEventListener("click", () => {
			accordion.classList.toggle('faq__item_active');
			if (hiddenSection.style.maxHeight) {
				hiddenSection.style.maxHeight = null;
			} else {
				hiddenSection.style.maxHeight = `${hiddenSection.scrollHeight}px`;
			}
		});
	});
	/*faq accordion*/

	/*anchor*/
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
	/*anchor*/

	/*open popup*/
	document.querySelector('.btn_nav').addEventListener('click', openBasket);
	document.querySelector('.btn_header').addEventListener('click', openBasket);
	document.querySelector('.btn_work').addEventListener('click', openBasket);
	document.querySelector('.menu__btn').addEventListener('click', openBasket);
	/*open popup*/

	/*exit popup*/
	document.querySelector('.popup__exit').addEventListener('click', () => {
		popup.classList.remove('popup_active', 'popup_menu', 'popup_faq', 'popup_call');
	});
	/*exit popup*/

	/*open call back*/
	document.querySelector('.btn_faq').addEventListener('click', () => {
		popup.classList.add('popup_active', 'popup_faq')
	});
	document.querySelector('.btn_contact').addEventListener('click',openCallBack);
	document.querySelector('.header-main__call').addEventListener('click', openCallBack);
	document.querySelector('.footer-main__call').addEventListener('click', openCallBack);
	/*open call back*/

	/*check form*/
	const checkInput = (name, tel) => {
		return !name.value.trim().length || !tel.value;
	};
	document.querySelector('.popup__form_faq').addEventListener('submit', function (e) {
		const name = this.querySelector('.popup__input_name');
		const tel = this.querySelector('.popup__input_tel');
		const text = this.querySelector('.popup__textarea');
		if (checkInput(name,tel) || !text.value.trim().length) {
			e.preventDefault();
		}
	});
	/*check form*/

	/*form*/
	const reload = () => {
		popup.classList.add('popup_done');
		setTimeout(function () {
			location.reload();
		}, 3500);
	};
	$(".popup__form_menu").submit(function (e) {
		const client = this.querySelector('.popup__input_name');
		const tel = this.querySelector('.popup__input_tel');
		// const validate = this.querySelector('.popup__validate');
		if (checkInput(client,tel) || total.price === 0 || total.price < 350) {
			if (total.price < 350) {
				validate.classList.add('popup__validate_active');
				this.addEventListener('focusin', (e) => {
					validate.classList.remove('popup__validate_active');
				});
			}
			e.preventDefault();
		} else {
			total.client = this.querySelector('.popup__input_name').value;
			total.tel = this.querySelector('.popup__input_tel').value;
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: {
					data: JSON.stringify(total),
				},
			}).done(function () {
				reload();
			});
			return false;
		}
	});

	$(".popup__form_call").submit(function (e) {
		const client = this.querySelector('.popup__input_name');
		const tel = this.querySelector('.popup__input_tel');
		if (checkInput(client,tel)) {
			e.preventDefault();
		} else {
			const objData = {
				client: client.value,
				tel: tel.value
			};
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: {
					data: JSON.stringify(objData),
				},
			}).done(function () {
				reload();
			});
			return false;
		}
	});

	$(".popup__form_faq").submit(function (e) {
		const client = this.querySelector('.popup__input_name');
		const tel = this.querySelector('.popup__input_tel');
		const text = this.querySelector('.popup__textarea');

		if (checkInput(client,tel) || !text.value.trim().length) {
			e.preventDefault();
		} else {
			const objData = {
				client: client.value,
				tel: tel.value,
				text: text.value
			};
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: {
					data: JSON.stringify(objData),
				},
			}).done(function () {
				reload();
			});
			return false;
		}
	});
	/*form*/
};