if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        const arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this))
        }
        return arr
    }
}





