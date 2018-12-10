module.exports = class {
    constructor() {
        this.arr = []
    }
    
    use(opt) {
        this.arr.push(opt)
    }
    
    async go(cb) {
        this.arr.forEach(fn => {
            fn.apply(null, arguments)
            
        })
        return () => cb.apply(null, arguments)
    }

}