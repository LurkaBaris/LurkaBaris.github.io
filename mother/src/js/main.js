/*const*/
const popup = document.querySelector('.popup');
const classesToAdd = ['popup_active', 'popup_menu'];
const inputTel = document.querySelector('#input_tel');
const inputName = document.querySelector('#input_name');
/*const*/

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

/*input*/
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

setInputFilter(inputTel, function(value) {
	return /^-?\d*$/.test(value); });
/*input*/

/*open popup basket*/
const openBasket = () => {
	popup.classList.add(...classesToAdd);
};

document.querySelector('.btn_nav').addEventListener('click', openBasket);
document.querySelector('.btn_header').addEventListener('click', openBasket);
document.querySelector('.btn_work').addEventListener('click', openBasket);
document.querySelector('.menu__btn').addEventListener('click', openBasket);
/*open popup basket*/

/*exit popup*/
document.querySelector('.popup__exit').addEventListener('click', () => {
	popup.classList.remove(...classesToAdd);
});
/*exit popup*/

/*popup accordion*/
const popupAccordion = document.querySelectorAll('.popup__item');

popupAccordion.forEach((item) => {
	const hiddenPart = item.querySelector('.popup__item-container');

	item.addEventListener("click", () => {
		item.classList.toggle('popup__item_active');
		if (hiddenPart.style.maxHeight) {
			hiddenPart.style.maxHeight = null;
		} else {
			hiddenPart.style.maxHeight = `${hiddenPart.scrollHeight}px`;
		}
	});
});
/*popup accordion*/

/*popup count btn*/
document.querySelectorAll('.popup__dish-count').forEach((item) => {
	let value = item.querySelector('.popup__dish-value');
	let btn = item.querySelectorAll('.popup__dish-btn');

	btn[0].addEventListener('click', (e) => {
		e.stopPropagation();
		if (Number(value.innerHTML) > 0) {
			value.innerHTML = String(Number(value.innerHTML) - 1);
		}
	});

	btn[1].addEventListener('click', (e) => {
		e.stopPropagation();
		if (Number(value.innerHTML) < 30) {
			value.innerHTML = String(Number(value.innerHTML) + 1);
		}
	});
});
/*popup count btn*/

/*back call*/
const openCallBack = () => {
	popup.classList.add(classesToAdd[0]);
};
document.querySelector('.btn_contact').addEventListener('click',openCallBack);
document.querySelector('.header-main__call').addEventListener('click', openCallBack);
document.querySelector('.footer-main__call').addEventListener('click', openCallBack);
/*back call*/

/*check form*/
document.querySelector('.popup__form').addEventListener('submit',(e) => {
	if (!inputName.value.trim().length || !inputTel.value) {
		e.preventDefault();
	}
});
/*check form*/