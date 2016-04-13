# fn
A small functional programming utility library for JavaScript.

# Docs

* * *

### compose() 

Performs right to left function composition

**Parameters**

**compose**: `function`, Performs right to left function composition

**Returns**: `function`


### curry() 

Create a curried function

**Parameters**

**curry**: `function`, Create a curried function

**Returns**: `function`


### fork(lastly, func1, func2) 

Returns a function for performing a forking operation
Also known as "converge"

**Parameters**

**lastly**: `function`, Returns a function for performing a forking operation
Also known as "converge"

**func1**: `function`, Returns a function for performing a forking operation
Also known as "converge"

**func2**: `function`, Returns a function for performing a forking operation
Also known as "converge"

**Returns**: `function`


### partial(func, arguments) 

Create a partially applied function

**Parameters**

**func**: `function`, Create a partially applied function

**arguments**: `*`, Create a partially applied function

**Returns**: `function`


### pipe() 

Performs left to right function composition

**Parameters**

**pipe**: `function`, Performs left to right function composition

**Returns**: `function`


### previousIndex(arr, index) 

Returns the previous index in an array in a cyclic manner

**Parameters**

**arr**: `Array`, Returns the previous index in an array in a cyclic manner

**index**: `Number`, Returns the previous index in an array in a cyclic manner

**Returns**: `Number`


### nextIndex(arr, index) 

Returns the next index in an array in a cyclic manner

**Parameters**

**arr**: `Array`, Returns the next index in an array in a cyclic manner

**index**: `Number`, Returns the next index in an array in a cyclic manner

**Returns**: `Number`


### previous(arr, index) 

Returns the previous element in an array in a cyclic manner

**Parameters**

**arr**: `Array`, Returns the previous element in an array in a cyclic manner

**index**: `Number`, Returns the previous element in an array in a cyclic manner

**Returns**: `*`


### next(arr, index) 

Returns the next element in an array in a cyclic manner

**Parameters**

**arr**: `Array`, Returns the next element in an array in a cyclic manner

**index**: `Number`, Returns the next element in an array in a cyclic manner

**Returns**: `*`


### last(arr) 

Returns the last element in an array

**Parameters**

**arr**: `Array`, Returns the last element in an array

**Returns**: `*`



* * *






