function red(){
	console.log("red")
}
function green(){
	console.log("green")
}
function yellow(){
 console.log("yellow")
}
function timer(time, fn){
	return new Promise((resolve,reject)=>{
		let c = setTimeout(()=>{
			fn()
            resolve(true)
			clearTimeout(c)
		}, time)
	})
}
function cb(){
    Promise.resolve(222).then(res=>{
        return timer(3000, red)
    }).then(()=>{
        return  timer(2000, yellow)
    }).then(()=>{
        return  timer(1000, green)
    }).then(()=>{
        cb()
    })
}
cb()