customMap = function () {
  this.entries = [];

  this.set = function (key, value) {
    const entry = this.entries.find((entry) => entry.key === key);
    if (entry) entry.value = value;
    else {
      this.entries.push({ key, value });
    }
    return this.entries;
  };

  this.get = function (key) {
    const entry = this.entries.find((entry) => entry.key === key);
    return entry ? entry.value : undefined;
  };

  this.delete = function (key) {
    const index = this.entries.findIndex((entry) => entry.key === key);
    if (index !== -1) {
      this.entries.splice(index, 1);
      return true;
    }
    return false;
  };

  this.has = function (key) {
    return this.entries.some((entry) => entry.key === key);
  };

  this.forEach = function (thisArgs, callBack) {
    for (let [key, value] of this.entries) {
      callBack.call(thisArgs, value, key, this);
    }
  };
  return this;
};

// customMap().set(["name", "Palak"], ["age", "41"], ["town", "Rutherford"]);
const map = customMap();
console.log(map.set('name', 'Palak'));
console.log(map.set('age', '41'));
console.log(map.set('town', 'Rutherford'));
console.log(map.get('town'));
console.log(map.delete('town'));
