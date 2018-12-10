module.exports = function(func) {
    let storage = {}

    return (...arg) => {
        let n = arg.join('/')
        if (n in storage) return storage[n]
        else {
            storage[n] = func(...arg)
            return storage[n]
        }
    }
}