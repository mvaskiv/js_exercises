module.exports = async function throttle(timeout, func) {
    let throttle
    let lastCall

    let _th = async function() {
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

    return _th()
}