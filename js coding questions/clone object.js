export const cloneObject = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    const newArray = [];
    for (let i = 0; i < obj.length; i++) {
      newArray[i] = cloneObject(obj[i]);
    }
    return newArray;
  }
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = cloneObject(obj[key]);
    }
  }
  return newObj;
};

console.log(
	cloneObject({
		employees: [
			{
				name: 'test',
				id: 345,
			},
			{
				name: 'test2',
				id: 346,
			},
			{
				name: null,
				id: 344,
			},
		],
		educationInfo: {
			bs: 'electronics',
			ms: {
				branch: 'computers',
				grade: '3.65',
			},
		},
		phoneNo: null,
		departmentId: null,
	}),
);
