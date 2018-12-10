module.exports = function throttle(func, timeout) {
    let debounce

    let _dbnc = function() {
        clearTimeout(debounce)
        debounce = setTimeout(() => func.apply(this, arguments), timeout)
    }

    return _dbnc
}