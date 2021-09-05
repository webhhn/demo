// 我只要导入Game就够了
import Game from './game.js'

const g = new Game('.map', '.score')
    // 按照结构书写
    // 给开始按钮绑定事件
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
        g.start()
    })
    // 停止游戏按钮绑定事件
const stopBtn = document.querySelector('.stop')
stopBtn.addEventListener('click', () => {
        g.stop()
    })
    // 重新开始按钮绑定事件
const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', () => {
    g.restart()
})