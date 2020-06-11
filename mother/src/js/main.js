/*faq accordion*/
const faqAccordions = document.querySelectorAll('.faq__item');

faqAccordions.forEach((accordion) => {
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