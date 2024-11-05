
//  Execute currying with placeholders
const curry = (fn) => {
    const curried = (...args) =>
      args.length >= fn.length && !args.includes(curry.placeholder)
        ? fn(...args)
        : (...nextArgs) => curried(...args.map(a => a === curry.placeholder ? nextArgs.shift() : a), ...nextArgs);
    
    return curried;
  };
  
  curry.placeholder = Symbol();
  
  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);
  console.log(curriedAdd(1, curry.placeholder, 3)(2)); // 6
  