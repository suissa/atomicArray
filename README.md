# Atomic Array

```js
const atomicArray = require('atomic-array')
atomicArray.create(length, functionToCreateTheValue)
```

For example lets create an Array with 10 elements filling with value 0:

```js
atomicArray.create(10, () => 0)
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

And how it´s a create function expected we can easily create random numbers using external modules like: [random-numbers](https://www.npmjs.com/package/random-numbers), [random-even-numbers](https://www.npmjs.com/package/random-even-numbers), [random-odd-numbers](https://www.npmjs.com/package/random-odd-numbers), etc.

```js
const atomicArray = require('atomic-array')
const randomNumbers= require('random-numbers')

const arr = atomicArray.create(10, randomNumbers.create)
// [ 88, 23, 55, 13, 4, 99, 16, 72, 81, 2 ]
```