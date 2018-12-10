module.exports = function(arr) {
    let newArr = []

    let _check = (arr) => {
            arr.forEach(e => {
            if (typeof e === 'object') _check(e)
            else newArr.push(e)
        })
        return newArr
    }

    return _check(arr)  
}