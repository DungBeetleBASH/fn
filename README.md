# @dbb/fn
A small functional programming utility library for Node.js.

[![Build Status](https://travis-ci.org/DungBeetleBASH/fn.png)](https://travis-ci.org/DungBeetleBASH/fn)
[![npm version](https://badge.fury.io/js/%40dbb%2Ffn.png)](https://badge.fury.io/js/%40dbb%2Ffn)

## Installation

`npm install @dbb/fn`

## Docs

* * *

### compose() 

Performs right to left function composition

**Parameters**

**arguments**: `...Function`

**Returns**: `Function`


### curry(func) 

Create a curried function

**Parameters**

**func**: `Function`

**Returns**: `Function`


### fork(lastly, func1, func2) 

Returns a function for performing a forking/convergence operation

**Parameters**

**lastly**: `Function`

**func1**: `Function`

**func2**: `Function`

**Returns**: `Function`


### partial(func) 

Create a partially applied function

**Parameters**

**func**: `Function`

**arguments**: `...Mixed`

**Returns**: `Function`


### pipe() 

Performs left to right function composition

**Parameters**

**arguments**: `...Function`

**Returns**: `Function`


### previous(arr, index) 

Returns the previous element in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `Mixed`


### next(arr, index) 

Returns the next element in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `Mixed`


### last(arr) 

Returns the last element in an array

**Parameters**

**arr**: `Array`

**Returns**: `Mixed`


### range(count, startIndex) 

Returns an array of numbers of length 'count', starting at 'start'
If a number < 1 is passed as count, an empty array is returned.

**Parameters**

**count**: `Number`

**startIndex**: `Number`

**Returns**: `Array`



* * *






