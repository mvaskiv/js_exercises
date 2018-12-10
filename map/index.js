module.exports = _map = (arr, func) => {
    let newArr = []
    
    arr.forEach((e, i) => {
        newArr.push(func.apply(this, [e, i, arr]))
    })

    return newArr
}