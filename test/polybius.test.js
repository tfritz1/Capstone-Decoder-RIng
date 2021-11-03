const expect = require("chai").expect
const {polybius} = require("../src/polybius")

describe("polybius", () => {
    it("should maintain spaces when encoding", () => {
        const actual = polybius("hello world", true)
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces when decoding", () => {
        const actual = polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const actual = polybius("Hello world", true)
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })

    it("should translate i and j to 42 when encoding", () => {
        const actual = polybius("ij",true)
        const expected = "4242"
        expect(actual).to.equal(expected)
    })

    it("should translate 42 to i/j when decoding", () => {
        const actual = polybius("42", false)
        const expected = "i/j"
        expect(actual).to.equal(expected)
    })
})
