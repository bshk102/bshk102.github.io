let clientwidth = document.documentElement.clientWidth
const img = document.querySelector('.main__img')
const line = document.querySelector('.for__line')
const snake = document.querySelector('.for__snake')

if (clientwidth > 1440) {
    img.style.right = (clientwidth - 1440) / 2 + 'px'
    line.style.left = (clientwidth - 1440) / 2 + 'px'
    snake.style.left = 186 + (clientwidth - 1440) / 2 + 'px'
}

console.log(document.documentElement.clientHeight)
console.log(document.documentElement.clientWidth)