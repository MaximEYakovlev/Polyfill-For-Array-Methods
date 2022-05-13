const expect = require('chai').expect

const polyfills = require('./index')

describe('Testing polyfills', () => {
    before(() => {
        polyfills()
    })

    describe('Testing map', () => {
        it('Check — wrong type', () => {
            function badFn() {
                Array.prototype.map.call(true, (value) => value)
            }
            expect(badFn).to.throw(TypeError)
        })

        it('Check — no callback', () => {
            function badFn() {
                [1, 2, 3].map()
            }
            expect(badFn).to.throw(TypeError)
        })
    })

    describe('Testing reduce', () => {
        it('Check — wrong type', () => {
            function badFn() {
                Array.prototype.reduce.call(true, (acc, value) => acc + value)
            }
            expect(badFn).to.throw(TypeError)
        })

        it('Check — no callback', () => {
            function badFn() {
                [1, 2, 3].reduce()
            }
            expect(badFn).to.throw(TypeError)
        })
    })
})