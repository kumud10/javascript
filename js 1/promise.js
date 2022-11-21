//Promise Catch

const a = () => new Promise((resolve) => setTimeout(() => {console.log('a'), resolve() }, 1000));
const b = () => new Promise((resolve) => setTimeout(() => {console.log('b'), resolve() }, 1000));
const c = () => new Promise((resolve, reject) => setTimeout(() => {console.log('c'), reject('Oops') }, 1000));
const d = () => new Promise((resolve) => setTimeout(() => {console.log('d'), resolve() }, 1000));
Promise.resolve()
 .then(a)
 .then(b)
 .then(c)
 .then(d)
 .catch(console.error)