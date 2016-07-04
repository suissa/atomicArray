'use strict'

const create = require('./atomicArray')

console.log('Array:', create.atomicArray(10, ()=>0))