if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        const arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this))
        }
        return arr
    }
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback, context) {
        const arr = []
        for (let i = 0; i < this.length; i++) {
            if (callback.call(context, this[i], i, this)) {
                arr.push(this[i])
            }
        }
        return arr
    }
}

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            if (accumulator !== undefined) {
                accumulator = callback.call(undefined, accumulator, this[i], i, this)
            } else {
                accumulator = this[i]
            }
        }
        return accumulator
    }
}



