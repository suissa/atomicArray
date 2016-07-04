const atomicArray = (length, create) => (
  Array.from({ length: length }, (x, i) => create())
);
module.exports = { atomicArray }
