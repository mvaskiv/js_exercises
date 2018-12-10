module.exports = function(func) {
    let exec
    let res

    let _once = function() {
        if (!exec) {
            exec = true
            res = func.apply(this, arguments)
        }
        return res
    }
    
    return _once
}