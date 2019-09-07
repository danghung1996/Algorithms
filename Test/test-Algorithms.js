/* jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;
const twoSum = require('../Algorithms/twoSum');
describe(('Algoritms'), () => {
    beforeEach((done) => {
        done();
    });
    describe(('Two Sum'), () => {
        let input_Expected = [
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
        for (let index = 0; index < input_Expected.length; index++) {
            it(`it should return indices ${output_Expected[index]} of the ${input_Expected[index][0]} 
            to Sum of it is equal ${input_Expected[index][1]}.`, (done) => {
                let result = twoSum(input_Expected[index][0], input_Expected[index][1]);
                expect(result).to.eql(output_Expected[index]);
                expect(result).to.have.lengthOf(2);
                expect(result).to.be.an('array');
                done();
            });
        }
    });
});