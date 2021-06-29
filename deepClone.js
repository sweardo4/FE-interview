// 简易版

function deepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }
    let deep = {}
    if(Array.isArray(obj)){
        deep = []
    }
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            deep[i] = deepClone(obj[i])
        }
    }
    return deep;
}

// 兼容函数版

function deepClone2(obj){
    if(typeof obj === 'object' && obj !== null){
        let target = Array.isArray(obj) ? [] : {};
        for(let o in obj){
            if(obj.hasOwnProperty(o)){
                target[o] = deepClone2(obj[o])
            }
        }
        return target
    } 
    return obj
}