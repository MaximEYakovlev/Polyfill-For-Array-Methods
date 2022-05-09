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





