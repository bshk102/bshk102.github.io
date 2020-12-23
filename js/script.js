let clientwidth = document.documentElement.clientWidth
const img = document.querySelector('.main__img')
const line = document.querySelector('.for__line')
const line2 = document.querySelector('.know__line')
const line3 = document.querySelector('.about__line')
const snake = document.querySelector('.for__snake')
const snake2 = document.querySelector('.know__snake')
const snake3 = document.querySelector('.gifts__snake')
const lines = document.querySelectorAll('.line')

if (clientwidth > 1440) {
    img.style.right = (clientwidth - 1440) / 2 + 'px'
    line.style.left = (clientwidth - 1440) / 2 + 'px'
    line2.style.right = (clientwidth - 1440) / 2 + 'px'
    line3.style.left = (clientwidth - 1440) / 2 + 'px'
    snake.style.left = 186 + (clientwidth - 1440) / 2 + 'px'
    snake2.style.left = 106 + (clientwidth - 1440) / 2 + 'px'
    snake3.style.left = 300 + (clientwidth - 1440) / 2 + 'px'
}

if (clientwidth < 1440) {
    line.style.width = 181 - (1440 - clientwidth) / 2 + 'px'
    line2.style.width = 181 - (1440 - clientwidth) / 2 + 'px'
    line3.style.width = 181 - (1440 - clientwidth) / 2 + 'px'
    snake.style.left = 186 - (1440 - clientwidth) / 2 + 'px'
    snake2.style.left = 106 - (1440 - clientwidth) / 2 + 'px'
    snake3.style.left = 300 - (1440 - clientwidth) / 2 + 'px'
}

const scrollingLinks = document.querySelectorAll('.scrolling')
scrollingLinks.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault()
    const blockId = link.getAttribute('href')
    document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}))


const form = document.getElementById('form')
form.addEventListener('submit', formSend)

async function formSend(e) {
    e.preventDefault()
}