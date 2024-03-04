/**
 * 
 Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).

Example:

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.
 */

function flattenDictionary(dict) {
  //   let map = new Map();
  let output = {};

  function recurse(parentKey, obj) {
    if (obj === null) return;
    Object.entries(obj).forEach(([key, value]) => {
      let copykey = '';
      if (parentKey === '') copykey = `${key}`;
      else if (key === '') copykey = `${parentKey}`;
      else copykey = `${parentKey}.${key}`;

      if (typeof value !== 'object') {
        // map.set(copykey, value);
        output[copykey] = value;
      } else {
        recurse(copykey, value);
      }
    });
  }

  recurse('', dict);
  console.log(Object.keys(output));
  return output;
}

const dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: {
        '': '1',
      },
    },
  },
};

console.log(flattenDictionary(dict));
