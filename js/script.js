'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

li.forEach (( cadaLi, i) => {
    li[i].addEventListener('click', () => {
        li.forEach(( cadaLi, i) => {
            li[i].classList.remove('active')
            bloque[i].classList.remove('active')
        })
        li[i].classList.add('active')
        bloque[i].classList.add('active')
    })
})