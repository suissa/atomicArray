const expect = require('chai').expect
const atomicArray = require('./atomicArray')

describe('atomicArray', () => {  
  const testNameTruey = 'a create function is needed!'
  describe(testNameTruey,  () => {
    it('testing if '+testNameTruey, () => {
      try {
        atomicArray.create(10)
      } catch(e) {
        expect(e).to.be.an('error')
      }
    })
  })
  const testNameLength = 'the length of returned Array'
  describe(testNameLength,  () => {
    it('testing if '+testNameLength+' is equal to 10', () => {
      expect(atomicArray.create(10, ()=>0).length).to.equal(10)
    })
  })
  const testNameValues = 'the values of returned Array'
  describe(testNameValues,  () => {
    it('testing if '+testNameValues+' is equal to 0', () => {
      const _arr = atomicArray.create(10, ()=>0)
      _arr.forEach( (element, index) => {
        expect(element).to.equal(0)
      })
    })
  })
})