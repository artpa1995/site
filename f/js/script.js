
let elemss = document.querySelectorAll('button');

for (let elem of elemss) {
	elem.addEventListener('click', function() {
		this.classList.toggle('c');
	});
}
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.classList.add('cc'); // добавляем абзацу класс
	});
}