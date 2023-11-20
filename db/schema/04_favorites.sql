DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    User_id INT,
    listing_id INT
);
