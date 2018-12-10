module.exports = {
    sequence: function(func) {
        return function() {
            let run = () => {
                for (let i = 0; f=func[i]; i++) {

                    f.apply(this, arguments);
                }
            }
            return run()
        
        } 

    },
    parallel: function(func) {
        return function() {
            let run = () => {
                for (let i = 0; f=func[i]; i++) {
                    f.apply(this, arguments);
                }
            }
            return run()
        }
    },
    race: function(func) {
        return function() {
            let run = () => {
                for (let i = 0; f=func[i]; i++) {
                    f.apply(this, arguments);
                }
            }
            return run()
        }
    },
} 