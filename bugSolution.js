function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-objects
  }
  return x.length;
}

//Alternative solution using optional chaining (ES2020 and later)
function foo(x) {
  return x?.length || 0; // Returns 0 if x?.length is nullish 
}