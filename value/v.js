module.exports = function (v) {
    while (typeof v === 'function') v = v()
    return v
}