var PENDING = 'pending'
var RESOLVE = 'resolved'
var REJECT = 'rejected'

function MyPromise(fn){
    this.state = PENDING
    const that = this

    that.resolvecallback = []
    that.rejectcallback = []

    function resolve(value){
        if(that.state === PENDING){
            that.state = RESOLVE
            setTimeout(() => {
                that.resolvecallback.forEach(function(callback){
                    callback(value)
                })
            }, 0);
        }
    }
    function reject(value){
        if(that.state === PENDING){
            that.state = REJECT
            setTimeout(() => {
                that.rejectcallback.forEach(function(callback){
                    callback(value)
                })
            }, 0);
        }
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.then = function(fn){
    this.resolvecallback.push(fn)
    return this
}
MyPromise.prototype.catch = function(fn){
    this.rejectcallback.push(fn)
    return this
}
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
    else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

var a = new MyPromise(test)
a.then(res=> {
    console.log('res->', res)
}).catch(err => {
    console.log('err->', err)
})