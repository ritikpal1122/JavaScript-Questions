//Implement deep flatten for arrays, objects, primitives

const deepFlatten = (input) => {
    let result = [];
  
    const flatten = (item) => {
      if (Array.isArray(item)) {
        item.forEach(flatten);
      } else if (typeof item === 'object' && item !== null) {
        Object.values(item).forEach(flatten);
      } else {
        result.push(item);
      }
    };
  
    flatten(input);
    return result;
  };
  
  console.log(deepFlatten([1, [2, [3, { a: 4, b: [5, 6] }]], 7])); // [1, 2, 3, 4, 5, 6, 7]
  