// 求最大值方法
var a = [4,2,3,4,5,3,2,0]
// 获取最大值 es6
Math.max(...a)

// 先排序在求最大值
var sort = a.sort((a,b)=>{return a-b})
var max = sort[sort.length-1]

// eval求最大值
eval('Math.max('+a+')')

// apply求最大值

Math.max.apply(null, a)
