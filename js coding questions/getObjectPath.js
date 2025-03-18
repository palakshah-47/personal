/*
* Write get function to get value at the path of object. If the path is not correct, 
and value is undefined return defaultValue if provided else undefined.
get(object, path, defaultValue)
input: get({john: {profile: {name: { firstName: 'John', lastName: 'Doe}}, age: 20, gender: 'Male}}, 
'profile.name.firstName')
output: 'John'
input: get({ a: [{b: {c: 3}}]}, 'a.0.b.c)
*/

function get(object, pathParam, defaultValue) {
  const pathArray = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let count = 0;
  function helper(obj, key, defaultValue) {
    if ((obj && obj.hasOwnProperty(key)) || Array.isArray(obj)) {
      console.log(obj[key]);
      return obj[key];
    } else {
      return defaultValue ?? undefined;
    }
  }

  for (let i = 0; i < pathArray.length; i++) {
    object = helper(object, pathArray[i], defaultValue);
    count += 1;
    if (Array.isArray(object)) {
      i = Math.min(i + 1, pathArray.length - 1);
      for (let index = 0; index < object.length; index++) {
        object = helper(object, pathArray[i], defaultValue);
        count++;
        if (count === pathArray.length) {
          return object;
        }
      }
    }
    if (count === pathArray.length) return object;
  }
}

// console.log(
//   get(
//     {
//       profile: { name: { firstName: 'John', lastName: 'Doe' } },
//       age: 20,
//       gender: 'Male',
//     },
//     'profile.name.firstName'
//   )
// );
console.log(
  get({ a: { b: [1, 2, 3, { c: 'bar' }], c: { d: 0 } }, c: 1 }, 'a.b.3.c')
);
