 export default class Food {
     constructor(map) {
             this.map = map
                 // 自己创建一个食物
             this.food = document.createElement('div')
                 // 添加了类名
             this.food.className = 'food'
                 // 插入地图
             this.map.appendChild(this.food)
                 // 准备两个坐标
             this.x = 0
             this.y = 0
             this.newFood()
         }
         // 1. 准备方法制作随机坐标
     newFood() {
         // 计算横向纵向能放多少食物
         const xNum = this.map.clientWidth / 20
         const yNum = this.map.clientHeight / 20
             // 随机出现0 - 40 和0 - 39 的随机数
         const x = Math.floor(Math.random() * xNum) * 20
         const y = Math.floor(Math.random() * yNum) * 20
         this.x = x
         this.y = y
             // 给this.food赋值坐标
         this.food.style.left = x + 'px';
         this.food.style.top = y + 'px';
         // 吃到食物的时候更新位置既可 即执行newFood()
     }


 }