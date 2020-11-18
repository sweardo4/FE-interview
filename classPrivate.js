// 1 使用symbol唯一值
const Persion = (function (){
    let _private = new Symbol()
    class Persion{
        constructor(){
            this[_private] = 'private value'
        }
        getPrivate(){
            return this.[_private]
        }
    }
})()

//2 构造函数中定义函数
class Persion {
    constructor(){
        let _private = 'private value'
        this.getPrivate  = function(){
            return _private
        }
    }
}

//3 最新语法 #代表私有变量 没有的代表共有变量
class Persion{
    #private;
    public;
    constructor(){
        this.#private = 'private value'
        this.public = 'public'
    }
    getPrivate(){
        return this.#private
    }
}
const test = new Persion()
test.getPrivate()


