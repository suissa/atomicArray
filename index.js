'use strict'

const atomicArray = require('./atomicArray')

console.log('Array with 0s:', atomicArray.create(10, ()=>0))