// 回到顶部按钮
let backToTop = document.createElement('div')
backToTop.innerText = '↑'
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #409eff;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    transition: all 0.3s;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
`
document.body.appendChild(backToTop)

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block'
    } else {
        backToTop.style.display = 'none'
    }
}

backToTop.onclick = function() {
    document.documentElement.scrollTop = 0
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    })
})

// ===== 弹窗效果 =====
// 页面打开时弹出提示
window.onload = function() {
    alert('hello world！欢迎来到陈思怡的简历页面~')

    // 弹出输入框，问用户怎么称呼
    let visitor = prompt('请问怎么称呼你？', '同学')
    if (visitor) {
        alert('你好，' + visitor + '！很高兴见到你~')
    }
}