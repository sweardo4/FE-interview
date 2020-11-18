
function mytypeof(data){
    // 基本类型 undefined null boolean number string symbol
    if(data === null){
        return 'null'
    }
    if(typeof data !== 'object'){
        return typeof data
    }
    // end

    // 引用类型 object
    const type = Object.prototype.toString.call(data) // 也可以这样用 toString.call(data)
    switch(type){
        // 包装类型
        case '[object String]':
            return 'string'
            break;
        case '[object Number]':
            return 'number'
            break;
        case '[object Boolean]':
            return 'boolean'
            break;

        // 引用类型 Boolean String Number Array Function Date Math Object RegExp Error Global
        case '[object Function]':
            return 'function'
            break;
        case '[object Object]':
            return 'object'
            break;
        case '[object Array]':
            return 'array'
            break;
        case '[object RegExp]':
            return 'regexp'
            break;
        case "[object Date]":
            return 'date'
            break;
        case '[object Error]':
            return 'error'
            break;

        // 单体内置对象
        case '[object global]':// window global
            return 'global'
            break;
        // 当需要判断dom节点类型时需要更多判断
        case '[object HTMLDocument]':// document
            return 'document'
            break;
        default:
            return 'object'
            break;
    }
    //end
}
