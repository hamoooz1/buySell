const db = require('../connection');

const getDog = () => {
  return db.query('SELECT * FROM dog;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getDog };
