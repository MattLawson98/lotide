# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(...)`: Checks if 2 arrays are equal
* `assertEqual(...)`: Checks if 2 values are equal
* `assertObjectEqual(...)`: Checks to see if 2 objects are equal
* `countletters(...)`: Gives a count of every letter in a phrase
* `countOnly(...)`: Gives a count of any elements you choose in an array
* `eqArrays(...)`: Compares 2 arrays to see if they are the same, will return true or false
* `eqObjects(...)`: Compares 2 objects to see if they are the same, will return true or false
* `findKey(...)`: Returns the key that matches the input value
* `findKeyByValue(...)`: Returns a key that matches the value chosen
* `head(...)`: returns the first element of an array
* `index(...)`: Has reference to any utility functions within this folder
* `letterPositions(...)`: Returns where a chosen letter sits within a phrase
* `map(...)`: Goes through an array and returns whatever values you choose for each element
* `middle(...)`: Returns the middle value(s) of an array
* `tail(...)`: Returns the last value of an array
* `takeUntil(...)`: Goes through an array returning its values until reaching a chosen value within the array
* `without(...)`: returns an array with specific element removed from the array while still keeping the original array intact
