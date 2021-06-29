//  new 操作符

function mynew(fn, ...args){
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance, args);
    return typeof res === 'object' ? res : instance
}