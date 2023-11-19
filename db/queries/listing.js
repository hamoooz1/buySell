const db = require('../connection');

const getlisting = () => {
  return db.query('SELECT * FROM listing;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getlisting };
