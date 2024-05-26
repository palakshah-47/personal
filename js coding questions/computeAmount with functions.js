const computeAmount = function () {
  // constructor() {
  this.totalAmount = 0;
  // }

  this.lacs = function (amount) {
    this.totalAmount += amount * 100000;
    return this;
  };

  this.crore = function (amount) {
    this.totalAmount += amount * 10000000;
    return this;
  };

  this.thousand = function (amount) {
    this.totalAmount += amount * 1000;
    return this;
  };

  this.value = function () {
    return this.totalAmount;
  };

  return this;
};

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
