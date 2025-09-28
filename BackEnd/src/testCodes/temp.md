## Code Review: `sum`
### Issues Found:
- Undefined variables `a` and `b`. This will cause a `ReferenceError` if run.
### Fix:
```javascript
function sum(a, b) {
return a + b;
}
```
### Test:
```javascript
console.log(sum(5, 3)); // Expected output: 8
```