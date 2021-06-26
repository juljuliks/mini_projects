const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeEl = document.getElementById('time');
const board = document.querySelector('.board');
let time = 0;
let score = 0;
let intervalId
startBtn.addEventListener('click', (e) => {
	e.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
	if (e.target.classList.contains('time-btn')) {
		time = +e.target.getAttribute('data-time');
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle')) {
		score++;
		e.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	intervalId = setInterval(decreaseTime, 1000);
	createRandomCircle();
	setTime(time);
}

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let currrent = --time;
		if (currrent < 10) {
			currrent = `0${currrent}`;
		}
		setTime(currrent);
	}
}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
	timeEl.parentNode.classList.add('hide');
	board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
    clearInterval(intervalId)
}

function createRandomCircle() {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);
	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
    circle.style.backgroundColor = `#${getRandomColor()}`
	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const colors = ['E1749E', 'FF9770', 'FFD670', 'E9FF70', 'ADEACD', '76CFDA', 'D27B7D', 'F09C6B', 'EEDF92', '76CEDE']
    return colors[getRandomNumber(0, colors.length - 1)]
}

function winTheGame() {
	function kill() {
		const circle = document.querySelector('.circle')
		if (circle) {
			circle.click()
		}
	}
	setInterval(kill, 75)
}