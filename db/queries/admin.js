const db = require('../connection');

const getAdmin = () => {
  return db.query('SELECT * FROM admin;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAdmin };
