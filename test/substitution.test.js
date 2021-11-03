const expect = require("chai").expect
const {substitution} = require("../src/substitution")

describe ("substitution", () => {
    it("should ignore capital letters", () => {
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    
    it("should encode a word", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    
    it("should maintain spaces when encoding", () => { 
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })

    it("should decode a word", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })

    it("should encode a word even if special characters are in the alphabet", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        const expected = "y&ii$r&"
        expect(actual).to.equal(expected)
    })

    it("should decode a word even if special characters are in the alphabet", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })

    it("should return false if the substitution alphabet is not given", () => {
        const actual = substitution("thinkful")
        const expected = false
        expect(actual).to.equal(expected)
    })

    it("should return false if the alphabet does not have exactly 26 characters", () => {
        const actual = substitution("thinkful", "short")
        const expected = false
        expect(actual).to.equal(expected)
    })

    it("should return false if not all the characters in the alphabet are unique", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        const expected = false
        expect(actual).to.equal(expected)
    })
})
