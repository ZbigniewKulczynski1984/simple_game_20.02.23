const hero = document.getElementById('hero')
const block = document.getElementById('block')
const btn = document.querySelector('.btn')

const jump = () => {
    if(hero.classList != 'animate') {
        hero.classList.add('animate')
    }
    setTimeout(function(){
        hero.classList.remove('animate')
    },500)
}

btn.addEventListener('click', jump)

