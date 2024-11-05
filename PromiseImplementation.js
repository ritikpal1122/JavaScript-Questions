// Implement custom native JavaScript promises

class CustomPromise {
    constructor(executor) {
      this.value = undefined;
      this.state = 'PENDING';
      this.callbacks = [];
  
      const resolve = (value) => {
        this.state = 'FULFILLED';
        this.value = value;
        this.callbacks.forEach(callback => callback(value));
      };
  
      executor(resolve);
    }
  
    then(onFulfilled) {
      return new CustomPromise((resolve) => {
        const handle = () => {
          const result = onFulfilled(this.value);
          resolve(result);
        };
  
        this.state === 'FULFILLED' ? handle() : this.callbacks.push(handle);
      });
    }
  }
  
  // Usage example
  new CustomPromise((resolve) => setTimeout(() => resolve(42), 1000))
    .then(value => console.log(value)); // Logs: 42 after 1 second
  