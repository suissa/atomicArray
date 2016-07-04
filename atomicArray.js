const atomicArray = (length, create) => Array.from({ length }, create)
module.exports = { create: atomicArray }
