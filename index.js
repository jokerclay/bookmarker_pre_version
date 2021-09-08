let modalBtn = document.getElementById('searchBtn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')
let globalKeyBorad = document.body

// 响应鼠标 点击时 弹窗
modalBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active')
})
modalClose.addEventListener('click', () => {

    modalBg.classList.remove('bg-active')
})

// 响应键盘 点击时 弹窗
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "S") {
        modalBg.classList.add('bg-active')
    }
})
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Escape") {
        modalBg.classList.remove('bg-active')
    }
})