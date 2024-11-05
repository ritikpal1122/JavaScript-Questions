
//Implement your custom Object.assign
const customAssign = (target, ...sources) => {
    sources.forEach(source => {
      if (source) {
        Object.keys(source).forEach(key => {
          target[key] = source[key];
        });
      }
    });
    return target;
  };
  
  const target = { a: 1 };
  const source = { b: 2 };
  console.log(customAssign(target, source)); // { a: 1, b: 2 }
  