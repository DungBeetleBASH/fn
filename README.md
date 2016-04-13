# fn
A small functional programming utility library for JavaScript.

## Docs

* * *

### compose(arguments) 

Performs right to left function composition

**Parameters**

**arguments**: `function`

**Returns**: `function`


### curry(func) 

Create a curried function

**Parameters**

**func**: `function`

**Returns**: `function`


### fork(lastly, func1, func2) 

Returns a function for performing a forking/convergence operation

**Parameters**

**lastly**: `function`

**func1**: `function`

**func2**: `function`

**Returns**: `function`


### partial(func, arguments) 

Create a partially applied function

**Parameters**

**func**: `function`

**arguments**: `*`

**Returns**: `function`


### pipe(arguments) 

Performs left to right function composition

**Parameters**

**arguments**: `function`

**Returns**: `function`


### previousIndex(arr, index) 

Returns the previous index in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `Number`


### nextIndex(arr, index) 

Returns the next index in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `Number`


### previous(arr, index) 

Returns the previous element in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `*`


### next(arr, index) 

Returns the next element in an array in a cyclic manner

**Parameters**

**arr**: `Array`

**index**: `Number`

**Returns**: `*`


### last(arr) 

Returns the last element in an array

**Parameters**

**arr**: `Array`

**Returns**: `*`



* * *






