let modalBtn = document.getElementById('searchBtn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')
let globalKeyBorad = document.body
let searchFiled = $('input[name="search"]')
let commandLine = document.querySelector('.command-container')
let commandInput = document.querySelector('.command-input')

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
        // 当 搜索框弹出时，使 input 自动 fouce, 因为 弹窗弹出时有一个 250ms 的动画，所以，255ms 后 执行 focus
        setTimeout(() => { searchFiled.focus() }, 255)
    }
})
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Escape") {
        modalBg.classList.remove('bg-active')
    }
});

// 当 按下分号时，进入命令行模式
globalKeyBorad.addEventListener('keydown', e => {
    console.log(e)
    if (e.code == "Semicolon") {
        commandLine.classList.add('c-active');
        commandInput.classList.add('c-input-active')
        setTimeout(() => { $('.command-input').focus() }, 150)
    }
});
// 如果 command 中为 空，添加冒号
if (commandInput.value == "") {
    commandInput.value = ":"
}
// 回车键 按下后，根据命令做出相应的操作
// 退出命令行操作
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Enter" && $('.command-container').is(':visible') && commandInput.value == ":q") {
        commandLine.classList.remove('c-active');
    }
});

// 退出网页操作
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Enter" && $('.command-container').is(':visible') && commandInput.value == ":exit") {
        window.open(window.location, "_blank");
        window.close();
    }
});
// 搜索网页操作
globalKeyBorad.addEventListener('keydown', e => {

    console.log(e)
    if (e.key == "Enter" && $('.command-container').is(':visible') && commandInput.value == ":search") {
        modalBg.classList.add('bg-active');
        // 当 搜索框弹出时，使 input 自动 fouce, 因为 弹窗弹出时有一个 250ms 的动画，所以，255ms 后 执行 focus
        setTimeout(() => { searchFiled.focus() }, 255)

    }
});