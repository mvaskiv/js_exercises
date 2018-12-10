module.exports = function(arr, query) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === query) return i
    }
    return -1
}