function foo(x) {
  if (x === null) {
    return 0; // Handle null explicitly
  }
  return x.length; // This will throw an error if x is not an object with a length property
}