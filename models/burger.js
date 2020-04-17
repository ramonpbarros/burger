const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", cb);
  },
};

module.exports = burger;

// burger.all((burger) => console.log(burger));
