const flatten = require('../flatten')

module.exports = function update(st, commands, prev, prevKey) {

    let state = st

    _push = (arr, item) => {
        flatten(item).forEach(e => {
            arr.push(e)
        })
    }

    _unshift = (arr, item) => {
        flatten(item).forEach(e => {
            arr.unshift(e)
        })
    }

    _splice = (arr, item) => {
        arr.splice(...flatten(item))
    }

    _merge = (arr, item) => {
        Object.keys(item).forEach(k => {
            arr[k] = item[k]
        })
    }

    _set = (arr, item) => {
        switch (typeof item) {
            case 'object':
                return item
            default:
                prev[prevKey] = item
        }
    }

    _apply = (item, func) => {
        return func(item)
    }
    
    for (key in commands) {
        switch(key) {
            case '$push':
                _push(state, commands[key])
                break ;
            case '$unshift':
                _unshift(state, commands[key])
                break ;
            case '$splice':
                _splice(state, commands[key])
                break ;
            case '$merge':
                _merge(state, commands[key])
                break ;
            case '$set':
                state = _set(state, commands[key])
                break ;
            case '$apply':
                state = _apply(state, commands[key])
                break ;
            default: 
                Object.keys(state).forEach(k => update(state[k], commands[k], state, k))
        }
    }
    
    return state
} 