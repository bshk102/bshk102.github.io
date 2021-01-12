//адаптирование под ширину экрана
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

//плавный переход по ссылке
const scrollingLinks = document.querySelectorAll('.scrolling')
scrollingLinks.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault()
    const blockId = link.getAttribute('href')
    document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}))


// отправка формы
const form = document.getElementById('form')
form.addEventListener('submit', formSend)

async function formSend(e) {
    e.preventDefault()
    let error = formValidate(form)
    let formData = new FormData(form)

    if (error === 0) {
        form.classList.add('gifts__form-sending')
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            let result = await response.json()
            alert(result.message)
            form.reset()
            form.classList.remove('gifts__form-sending')
        } else {
            alert('Error')
            form.classList.remove('gifts__form-sending')
        }
    } else {
        alert('Заполните все поля')
    }
}

function formValidate(form) {
    let error = 0
    let inputs = form.querySelectorAll('input')

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error')

        if (inputs[i].classList.contains('_email')) {
            if (emailTest(inputs[i])) {
                inputs[i].classList.add('error')
                error++
            }
        } else {
            if (inputs[i].value === '') {
                inputs[i].classList.add('error')
                error++
            }
        }
    }
    return error
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}