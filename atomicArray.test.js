'use strict'

const expect = require('chai').expect
const create = require('./randomAtomicArray')

describe('randomAtomicArray', () => {  
  const testNameTruey = 'a create function is needed!'
  describe(testNameTruey,  () => {
    it('testing if '+testNameTruey, () => {
      try {
        // let randomEven = create.randomAtomicArray(10, 9)
      } catch(e) {
        expect(create.randomAtomicArray(10, 9)).to.throw(new Error('A create function is needed!'))
      }
      // 
    });
  });
  const testNameLength = 'the length of returned Array'
  describe(testNameLength,  () => {
    it('testing if '+testNameLength+' is equal to 10', () => {
      expect(create.randomAtomicArray(10, ()=>0).length).to.equal(10)
    });
  });
  const testNameValues = 'the values of returned Array'
  describe(testNameValues,  () => {
    it('testing if '+testNameValues+' is equal to 0', () => {
      const _arr = create.randomAtomicArray(10, ()=>0)
      _arr.forEach( (element, index) => {
        expect(element).to.equal(0)
      });
      
    });
  });
});