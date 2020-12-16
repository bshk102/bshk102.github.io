let clientwidth = document.documentElement.clientWidth
const img = document.querySelector('.main__img')

if (clientwidth === 1440) {
    img.style.right = 0
} else if (clientwidth > 1440) {
    img.style.right = clientwidth - 1440 - 110 + 'px'
}