// 导入食物和蛇
import Food from './food.js';
import Snake from './snake.js';
export default class Game {
    constructor(ele, score) {
            this.map = document.querySelector(ele)
                // 创建一个食物
            this.food = new Food(this.map)
                // 获取积分数
            this.score = document.querySelector(score)
                // 创建一条蛇
            this.snake = new Snake(this.map)
            this.change()
                // 初始化游戏等级
            this.level = 3
                // 准备一个变量接受定时器返回值
            this.timer = 0
                // 准备一个变量用于计数
            this.count = 0
        }
        // 开始游戏
    start() {
            this.timer = setInterval(() => {
                // 让蛇移动
                this.snake.move()

                // 判断是不是吃到食物了
                if (this.snake.isEat(this.food)) {
                    // 吃到了就积分
                    this.updateScore()
                        // 蛇要加一节，食物换位置
                    this.snake.creHead()
                    this.food.newFood()
                }
                // 判断是不是撞上了
                if (this.snake.isDie()) {
                    window.alert('Game over')
                    clearInterval(this.timer)
                }
            }, 500 / this.level);
        }
        // 暂停游戏
    stop() {
            clearInterval(this.timer)
        }
        // 重新开始
    restart() {
            // 重置页面让游戏重新开始
            window.location.reload()
        }
        // 根据按键修改方向给document绑定事件
    change() {

            // document.addEventListener('keydown', () => {
            //     window.scrollTo(0, 0);

            // })
            document.addEventListener('keydown', e => {
                e = e || window.event
                const code = e.keyCode || e.which
                switch (code) {
                    case 37:
                        this.snake.direction = 'left';
                        break
                    case 38:
                        this.snake.direction = 'top';
                        break
                    case 39:
                        this.snake.direction = 'right';
                        break
                    case 40:
                        this.snake.direction = 'bottom';
                        break
                }
            })
        }
        // 判断吃到了食物


    // 准备一个变量更新分数
    updateScore() {
        this.count++;
        this.score.value = this.count * 100 + this.level * 10

        // 判断分数到达一定分数时游戏难度上升
        if (this.count % 15 === 0) {
            this.level++;
            this.stop()
            this.start()
        }
    }
}