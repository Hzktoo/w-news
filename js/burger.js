//alert('test')
const btnLines = document.querySelector('.header_burger-lines')
console.log(btnLines);
const btnCross = document.querySelector('.header_burger-cross')
console.log(btnCross);

const navElement = document.querySelector('nav')
console.log(navElement);

btnLines.addEventListener('click', ()=>{
	navElement.classList.add('active_menu')
})

btnCross.addEventListener('click', ()=>{
	navElement.classList.remove('active_menu')
})