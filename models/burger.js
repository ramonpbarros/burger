const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", cb);
  },
  create: (newBurger, cb) => {
    orm.createOne("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, condition, cb) => {
    orm.update("burgers", burgerData, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;

// burger.all((burger) => console.log(burger));
