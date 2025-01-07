const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

// converte o array em 1D
const newItems = _.flattenDeep(items)

console.log(newItems)