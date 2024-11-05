// /Memoize/cache identical API requests

const memoizeAPI = (fetchFunction) => {
    const cache = new Map();
  
    return async (url) => {
      if (cache.has(url)) {
        return cache.get(url);
      }
  
      const result = await fetchFunction(url);
      cache.set(url, result);
      return result;
    };
  };
  
  // Usage example
  const fetchAPI = async (url) => fetch(url).then(res => res.json());
  const memoizedFetch = memoizeAPI(fetchAPI);
  
  memoizedFetch('https://api.example.com/data');
  