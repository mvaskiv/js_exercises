module.exports = function(func) {
  
    function curry(i, arr) {
        return(...x) => {
            if (i - x.length <= 0) {
                return(func(...arr, ...x))
            }
            return curry(i - x.length, [...arr, ...x])
        }
    }

    return curry(func.length, [])
}
