let value = 0

const button1 = document.getElementById('increaseButton')
const button2 = document.getElementById('decreaseButton')
const button3 = document.getElementById('resetButton')
const counter = document.getElementById('counter')

button1.addEventListener('click', () => {
    value++
    counter.innerText = value
})

button2.addEventListener('click', () => {
    value--
    counter.innerText = value
})

button3.addEventListener('click', () => {
    value = 0
    counter.innerText = value
})

