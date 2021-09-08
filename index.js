let modalBtn = document.getElementById('searchBtn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')
let globalKeyBorad = document.body
let searchFiled = $('input[name="search"]')

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
        modalBg.classList.add('bg-active');
        // 当 搜索框弹出时，使 input 自动 fouce
        setTimeout(() => { searchFiled.focus() }, 255)
    }
})
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Escape") {
        modalBg.classList.remove('bg-active')
    }
});