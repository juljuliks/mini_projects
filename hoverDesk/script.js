const board = document.querySelector('#board');
const squaresNumber = 500;
const colors = ['E1749E', 'FF9770', 'FFD670', 'E9FF70', 'ADEACD', '76CFDA', 'D27B7D', 'F09C6B', 'EEDF92', '76CEDE'];
for (let i = 0; i < squaresNumber; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		setColor(square);
	});

	square.addEventListener('mouseleave', () => {
		removeColor(square);
	});

	board.append(square);
}

function setColor(el) {
    const color = getRandomColor()
	el.style.backgroundColor = `#${color}`;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function removeColor(el) {
	el.style.backgroundColor = '#1d1d1d';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
