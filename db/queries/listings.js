const db = require('../connection');

const getListings = (fee) => {
  return db.query(`
  SELECT dogs.*
  FROM dogs
  WHERE dogs.adoption_fee <= $1
  ;`, [fee] )
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log("error from listings", error)
    });
};

module.exports = { getListings };
