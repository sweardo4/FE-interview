function sleep(time){
    return new Promise(resolve=>{
          setTimeout(()=>{ resolve(true) }, time)
      })
  }
// Array(10).fill(null)　//　数组每一个值都是null
// Array.apply(null, { length: 10 }) // 数组每一个值都是null
// [...Array(10)] // ...主要是为了合并数组用
// [...Array(10).keys()]　// 快速生成有序的数组
  async function waitPrint1(time){
    let num = 0
    let arr = [...Array(10)] // _toConsumableArray(Array(10));
    while(num < 10){　// bable不会进行额外处理
          await sleep(time)
          console.log(num)
          num = num + 1
    }
    return num
  }
  async function waitPrint2(time){
    let num = 0
    let arr = [...Array(10)]
    for (let i=0;i< arr.length;i++){　// bable不会进行额外处理　此处for循环中的let或var都可　bable会进行相同处理
        await sleep(time)
        console.log(num)
        num = num + 1
    }
    return num
  }
  async function waitPrint3(time){
    let num = 0
    let arr = [...Array(10)]
    for(let i of arr){　//　for of bable进行了很多处理
        await sleep(time)
        console.log(num)
        num = num + 1
    }
    return num
  }
  waitPrint1(2000).then(res=>{console.log('end:' + res)})
  waitPrint2(2000).then(res=>{console.log('end:' + res)})
  waitPrint3(2000).then(res=>{console.log('end:' + res)})


  /**
   * async await 是es2017新加东西 编译成es2016会是Generator yield 
   * 编译成es2015Generator会是一个while(1)循环 内部是switch块 一直循环等待异步请求结果　
   */