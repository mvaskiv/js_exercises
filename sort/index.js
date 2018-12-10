module.exports = function(arr) {

    let sort = function () {
        for (l = arr.length; l > 0; l--) {
            for (i = 1; i < l; i++ ) {
                if (arr[i] < arr[i - 1]) {
                    let smax = arr[i - 1]
                    arr[i - 1] = arr[i]
                    arr[i] = smax
                }
            }
        }
        return arr
    }
    
    return sort()
}