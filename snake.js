export default class Snake {
    constructor(map) {
            this.map = map
                // 蛇
            this.snake = []
                // 定义一个初始方向
            this.direction = 'right'
            this.creSnake()
        }
        // 计算蛇头应该出现在哪个坐标位置的位置

    pos() {
            // 之负责计算位置， 不进行赋值
            // 首先赋值head等于snack的第0 个。

            const head = this.snake[0]
                // 判断是否有头部出现
            if (!head) return { left: 0, top: 0 }
                // 有头根据方向计算,先得到头的位置 
            const obj = {
                left: head.offsetLeft,
                top: head.offsetTop
            }
            switch (this.direction) {
                case 'top':
                    obj.top -= 20;
                    break;
                case 'left':
                    obj.left -= 20;
                    break;
                case 'right':
                    obj.left += 20;
                    // console.log(obj.left)
                    break;
                case 'bottom':
                    obj.top += 20;
                    break;
            }
            return obj
        }
        // 2. 给蛇加一个头
    creHead() {

            // 先拿到坐标
            const pos = this.pos()
                // 判断原先有没有头

            // console.log(pos)
            const head = this.snake[0]

            if (head) head.className = 'body'
                // 创建一个div头
            const div = document.createElement('div')
            div.className = 'head'
            div.style.left = pos.left + 'px'
            div.style.top = pos.top + 'px'
                // 加到下一个坐标上的位置，

            this.snake.unshift(div)
            this.map.appendChild(div)

        }
        // 准备初始化一个蛇
    creSnake() {
            for (let i = 0; i < 3; i++) { this.creHead() }
        }
        // 准备让蛇移动一格的方法，速度由游戏规则的模块完成
        // 把数组里最后一个删除然后在加一个头
    move() {
        const body = this.snake.pop()
            // 把这一节从页面中删除
        body.remove()
        this.creHead()
    }

    // 准备一个方法判断蛇是否死亡,同时循环遍历数组有相同时就死亡
    isDie() {
            const head = this.snake[0]
            const x = head.offsetLeft
            const y = head.offsetTop
                // 判断
            if (x < 0 || y < 0 || x >= this.map.clientWidth || y >= this.map.clientHeight) {
                return true
            } else {
                const tmp = this.snake.slice(1)
                let flag = false
                tmp.forEach(item => {
                    if (x === item.offsetLeft && y === item.offsetTop) {
                        flag = true
                    }
                })
                return flag
            }
        }
        // 准备一个方法判断是不是吃到了食物
    isEat(food) {
        const x = this.snake[0].offsetLeft
        const y = this.snake[0].offsetTop
        if (x === food.x && y === food.y) {
            return true
        } else {
            return false
        }
    }
}