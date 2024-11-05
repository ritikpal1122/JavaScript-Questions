
// /Execute “n” async tasks in series, parallel and throttling promises

const executeSeries = (tasks) => tasks.reduce((p, task) => p.then(task), Promise.resolve());

// Usage
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3)
];
executeSeries(tasks).then(console.log); // Logs: 3


/// parelllel

const executeParallel = (tasks) => Promise.all(tasks.map(task => task()));

// Usage
executeParallel(tasks).then(console.log);



// throtlling

const throttlePromises = (tasks, limit) => {
    let index = 0;
    const results = [];
    const promises = [];
  
    const enqueue = () => {
      if (index === tasks.length) return Promise.resolve();
      const task = tasks[index++];
      const promise = task().then(result => results.push(result)).then(enqueue);
      promises.push(promise);
      return promise;
    };
  
    return Promise.all(Array(limit).fill().map(enqueue)).then(() => results);
  };
  
  // Usage
  const delayedTask = (delay) => () => new Promise(resolve => setTimeout(resolve, delay));
  const throttledTasks = [delayedTask(1000), delayedTask(2000), delayedTask(3000)];
  throttlePromises(throttledTasks, 2).then(console.log);
  