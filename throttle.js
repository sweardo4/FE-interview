//截流　事件触发在time内仅仅执行1次
function throttle(fn, time){
    let oldtime = Number(new Date())
    let newtime = Number(new Date())
    if(newtime - oldtime >= time){
        fn()
        oldtime = Number(new Date())
    }
}

// test
setInterval(throttle(()=>{console.log("test throttle")}, 1000), 500)


// 节流2 可接受参数

var throttle2 = (func, wait = 50) =>{
    let lasttime = 0;
    return function(...args){
        let now = +new Date();
        if(now - lasttime > wait){
            lasttime = now;
            func.apply(this, args)
        }
    }
}