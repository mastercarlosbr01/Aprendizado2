const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{  "a": 1, "b": 2, "c": 3 , "d": "Carlos", "e": true, "f": {}, "g": [] }'))

obj.a = 45
console.log(obj)