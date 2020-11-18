//  js 设计模式

// 单例模式 原生js new 关键字
var OneInstance = (function(){
    var instance = null
    return function (name){
        this.name = name
        if(instance){
            return instance
        }else{
            instance = this
            return instance
        }
        this.getName = function() {
            return this.getName
        }
    }
})()

var a = new OneInstance("test")
var b = new OneInstance("test123")

// 原生js 构造静态接口
function OneInstance(name){
    this.name = name
    this.instance = null
    this.getName = function(){
        return this.name
    }
}
// 给oneinstance 一个静态方法
OneInstance.getInstance = function(name){
    if(this.instance){
        return this.instance
    }else{
        this.instance = new OneInstance(name)
        return this.instance
    }
}  

var a = OneInstance.getInstance('test')
var b = OneInstance.getInstance('asd')

// es6 构造静态接口
class OneInstance{
    constructor(name){
        this.name = name
        this.instance = null
    }
    getName(){
        return this.name
    }
    static getInstance(name){ // 构造一个静态接口
        if(this.instance){
            return this.instance
        }else{
            this.instance = new OneInstance(name)
            return this.instance
        }
    }
}
var a = OneInstance.getInstance('test')
var b = OneInstance.getInstance('asd')
