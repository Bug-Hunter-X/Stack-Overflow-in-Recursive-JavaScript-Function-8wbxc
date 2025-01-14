# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common stack overflow error in JavaScript caused by unbounded recursion. The `foo()` function uses recursion to check for a condition.  However, without a base case for larger inputs, it leads to excessive recursive calls, resulting in a stack overflow.

The solution uses dynamic programming to eliminate the recursive calls and efficiently solve the problem for all inputs, avoiding the stack overflow error.