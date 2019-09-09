/* jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;
const twoSum = require('../Algorithms/twoSum');
const validParentheses = require('../Algorithms/validParentheses');
const reverse = require('../Algorithms/reverseInteger');
const intToRoman = require('../Algorithms/integerToRoman');
const longestCommonPrefix = require('../Algorithms/longestCommonPrefix');

describe(('Algoritms'), () => {
    beforeEach((done) => {
        done();
    });
    describe(('Two Sum'), () => {
        let input = [
            [
                [1, 2, 3, 4, 5], 4
            ],
            [
                [1, 2, 2, 4, 5], 4
            ],
            [
                [1, 24, 3, 42, 5], 29
            ],
            [
                [7, 6, 34, 5], 41
            ]
        ];
        let output_Expected = [
            [0, 2],
            [1, 2],
            [1, 4],
            [0, 2]
        ];
        for (let index = 0; index < input.length; index++) {
            it(`it should return indices ${output_Expected[index]} of the ${input[index][0]} 
            to Sum of it is equal ${input[index][1]}.`, (done) => {
                let result = twoSum(input[index][0], input[index][1]);
                expect(result).to.eql(output_Expected[index]);
                expect(result).to.have.lengthOf(2);
                expect(result).to.be.an('array');
                done();
            });
        }
    });
    describe(('Valid Parentheses'), () => {
        let input = [
            '()[]{}',
            '{[]}',
            '((())){}[',
            '(({}[]'
        ];
        let output_Expected = [
            true, true, false, false
        ];
        for (let index = 0; index < input.length; index++) {
            it(`it should return ${output_Expected[index]} because ${input[index]} 
            ${output_Expected[index] == true?'is':'not'} valid Parentheses`, (done) => {
                let result = validParentheses(input[index]);
                expect(result).to.eql(output_Expected[index]);
                done();
            });
        }
    });
    describe(('Reverse Integer'), () => {
        let input = [
            123,
            4234,
            12300,
            -123123
        ];
        let output_Expected = [
            321, 4324, 321, -321321
        ];
        for (let index = 0; index < input.length; index++) {
            it(`it should return ${output_Expected[index]} for reverse ${input[index]}`, (done) => {
                let result = reverse(input[index]);
                expect(result).to.eql(output_Expected[index]);
                done();
            });
        }
    });
    describe(('Integer to Roman'), () => {
        let input = [
            123,
            4234,
            12300,
            1230
        ];
        let output_Expected = [
            "CXXIII", 0, 0, "MCCXXX"
        ];
        for (let index = 0; index < input.length; index++) {
            it(`it should return ${output_Expected[index]} for convert ${input[index]} to Roman`, (done) => {
                let result = intToRoman(input[index]);
                expect(result).to.eql(output_Expected[index]);
                done();
            });
        }
    });
    describe(('Longest Common Prefix'), () => {
        let input = [
            ["flower", "flow", "flight"],
            ["dog", "racecar", "car"],
            ["candy", "car", "card"],
            ["number", "null", "new"]
        ];
        let output_Expected = [
            "fl", "","ca","n"
        ];
        for (let index = 0; index < input.length; index++) {
            it(`it should return "${output_Expected[index]}" for get longest common prefix of [${input[index]}]`, (done) => {
                let result = longestCommonPrefix(input[index]);
                expect(result).to.eql(output_Expected[index]);
                done();
            });
        }
    });
});