// / Implement custom Call, Apply, Bind functions


Function.prototype.customCall = function (context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
  };
  
  Function.prototype.customApply = function (context, args = []) {
    return this.customCall(context, ...args);
  };
  
  Function.prototype.customBind = function (context, ...args) {
    return (...newArgs) => this.customCall(context, ...args, ...newArgs);
  };
  
  // Usage example
  function greet(greeting) {
    return `${greeting}, ${this.name}`;
  }
  const person = { name: 'Alice' };
  console.log(greet.customCall(person, 'Hello')); // Hello, Alice
  