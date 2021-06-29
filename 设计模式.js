// js设计模式

// 单例模式
    // 首先创建单例方法
    var getSingle = function (fn) { // 创建单例方法
        var result // 通过闭包保存创建过的对象
        return function () {
            return result || (result = fn.apply(this, arguments))
        }
    }

    // 使用单例创建对象
    var createPerson = getSingle(function (name) {
        return {name: name}
    })
    // 使用单例对象
    createPerson('a') // a
    createPerson('b') // a
// 工厂模式

// 发布订阅者模式

// MVC模式

// MVVM模式

// 适配器模式

// 策略模式

// 中介者模式

// 代理模式

// 组合继承模式

// 寄生组合式继承
