//  instanceOf 实现
function myinstanceof(instance, onClass){
    let prot = Object.getPrototypeOf(instance)
    while(true){
        if(prot === null) return false;
        if(prot === onClass.prototype) return true;
        prot = Object.getPrototypeOf(prot)
    }
}