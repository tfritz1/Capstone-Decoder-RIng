// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar")

describe("caesar", () => {
    it("should return false if shift is 0 or not present", () => {
        const shift = 0
        const input = "thinkful"
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    
    it("should return false if shift is less than -25", () => {
        const shift = -26
        const input = "thinkful"
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })

    it("should return false if shift is more than 25", () => {
        const shift = 99
        const input = "thinkful"
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })

    it("should maintain spaces as well as other non-alphabetic symbols", () => {
        const shift = 8
        const input = "This is a secret message!"
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const shift = 8
        const input = "This is a secret message!"
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })

    it("should wrap around to the front of the alphabet if letter is shifted 'off' the alphabet", () => {
        const shift = 8
        const input = "t"
        const expected = "b"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
})