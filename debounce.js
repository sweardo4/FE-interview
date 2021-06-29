// 防抖　在事件触发后time后执行fn
function debounce(fn, time){
    let timer
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
             fn()
             clearTimeout(timer)
        },time)
    }
}
// debounce test
// yes
setInterval(debounce(()=>{console.log('debounce test')}, 1000), 2000)
// no
setInterval(debounce(()=>{console.log('debounce test')}, 1000), 600)


var arr = [...new Array(10)]
for (let index = 1; index < arr.length; index++) {
    setTimeout(function(){
        console.log(index)
    }, 1000*index)
}

// 防抖2 可以接受参数的

function debounce2(func, wait=50){
    let timer = 0;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }
}