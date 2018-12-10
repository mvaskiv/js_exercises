module.exports = function(options, func) {
    options.timeouter(options.toggle, 1)
  
    func()
    // return options.codes[options.message]
}