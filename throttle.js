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