const expect = require('chai').expect
const create = require('./atomicArray')

describe('atomicArray', () => {  
  const testNameTruey = 'a create function is needed!'
  describe(testNameTruey,  () => {
    it('testing if '+testNameTruey, () => {
      try {
        create.atomicArray(10)
      } catch(e) {
        expect(e).to.be.an('error')
      }
    })
  })
  const testNameLength = 'the length of returned Array'
  describe(testNameLength,  () => {
    it('testing if '+testNameLength+' is equal to 10', () => {
      expect(create.atomicArray(10, ()=>0).length).to.equal(10)
    })
  })
  const testNameValues = 'the values of returned Array'
  describe(testNameValues,  () => {
    it('testing if '+testNameValues+' is equal to 0', () => {
      const _arr = create.atomicArray(10, ()=>0)
      _arr.forEach( (element, index) => {
        expect(element).to.equal(0)
      })
    })
  })
})