const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", cb);
  },
  create: (burger_name, cb) => {
    orm.createOne("burgers", { burger_name }, cb);
  },
};

module.exports = burger;

// burger.all((burger) => console.log(burger));
