DROP TABLE IF EXISTS listing CASCADE;

CREATE TABLE listing (
    id INT PRIMARY KEY AUTO_INCREMENT,
    publish_date DATE,
    active BOOLEAN,
    admin_id INT,
    dog_id INT
);
