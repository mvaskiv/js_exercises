module.exports = function throttle(func, timeout) {
    let throttle
    let lastCall

    let _th = function() {
        let time = Date.now()

        if (!throttle) {
            func.apply(this, arguments)
            lastCall = time + 1
            throttle = setTimeout(() => func.apply(this, arguments), timeout)
        }
        else {
            clearTimeout(throttle)
            throttle = setTimeout(() => {
                func.apply(this, arguments)
                lastCall = time
            }, timeout - (time - lastCall))
        }
    }

    return _th
}