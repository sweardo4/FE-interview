// 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// (a,b)=>{return a+b}  ----> (a)=>{return (b)=>{return a+b}}

var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    console.log(args)
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};