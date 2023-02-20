const hero = document.getElementById('hero');
const block = document.getElementById('block');
const btn = document.querySelector('.btn');

const jump = () => {
	if (hero.classList != 'animate') {
		hero.classList.add('animate');
	}
	setTimeout(function () {
		hero.classList.remove('animate');
	}, 500);
};

const youAreDead = setInterval(function () {
	const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));

    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 20 && blockLeft > 0 && heroTop >= 130) {
        block.style.animation = 'none'
        block.style.display = 'none'
        alert('you lose');
    }

}, 10);

btn.addEventListener('click', jump);
