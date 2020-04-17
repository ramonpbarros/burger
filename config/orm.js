const connection = require("./connection");

const orm = {
  selectAll: (table, cb) => {
    connection.query(`SELECT * FROM ??`, table, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
};

module.exports = orm;

// orm.selectAll("burgers", (burgers) => console.log(burgers));
