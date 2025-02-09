# JavaScript Bug: Handling Null and Undefined Values

This repository demonstrates a common JavaScript error: attempting to access a property of a null or undefined object.  The bug is explained in detail, and a solution is provided.

## Bug Description
The `foo` function attempts to access the `length` property of the input `x`. If `x` is null or undefined, or if it is an object that lacks a `length` property, a `TypeError` is thrown.

## Solution
The solution involves explicitly checking if `x` is null or undefined *before* attempting to access its `length` property.  It also provides an alternative approach using optional chaining.