const db = require('../connection');


const addListing = (user_id, name, age, breed, adoption_fee, description, photo_url) => {
  return db.query(`
    INSERT INTO dogs (user_id, name, age, breed, adoption_fee, description, photo_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  ;`, [user_id, name, age, breed, adoption_fee, description, photo_url])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { addListing };
