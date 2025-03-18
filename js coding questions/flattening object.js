/*flat the object with below structure
{a: 1,
    b: {
        c: 2,
        d: {
            e: 3        
        }
    }
}  
output: {a:1, b.c:2, b.d.e:3} 
*/

const flattenObj = (obj) => {
	let flatObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			let flatObject = flattenObj(obj[key]);
			for (let y in flatObject) {
				flatObj[key + '_' + y] = flatObject[y];
			}
		} else {
			flatObj[key] = obj[key];
		}
	}
	return flatObj;
};

const flattenObj1 = (obj, parentKey = '', result = {}) => {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			const newKey = parentKey ? (key ? `${parentKey}.${key}` : parentKey) : key;
			if (Array.isArray(obj[key])) {
				obj[key].forEach((item, index) => {
					const arraKey = `${newKey}.${index}`;
					if (typeof item === 'object' && item !== null) {
						flattenObj1(item, arraKey, result);
					} else {
						result[arraKey] = item;
					}
				});
			} else if (typeof obj[key] === 'object' && obj[key] !== null) {
				flattenObj1(obj[key], newKey, result);
			} else {
				result[newKey] = obj[key];
			}
		}
	}
	return result;
};

//console.log(flattenObj1({ a: 1, b: { c: 2, d: { e: 3 } } }));
// console.log(flattenObj1({ a: 1, b: { c: 2, '': { e: 3 } } }));
console.log(flattenObj1({ a: { b: [1, 2, 3], c: ['foo'] } }));
console.log(
	flattenObj1({
		a: 5,
		b: 6,
		c: {
			f: 9,
			g: {
				m: 17,
				n: 3,
			},
		},
	})
);
