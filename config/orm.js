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
  createOne: (table, rowValue, cb) => {
    connection.query(`INSERT INTO ?? SET ?`, [table, rowValue], (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  update: (table, updateValues, condition, cb) => {
    connection.query(
      "UPDATE ?? SET ? WHERE ?",
      [table, updateValues, condition],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
};

module.exports = orm;

// orm.selectAll("burgers", (burgers) => console.log(burgers));
// orm.createOne ("burgers", burger_name, "example"], (err, data) => {}
