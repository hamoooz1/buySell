DROP TABLE IF EXISTS listing CASCADE;

CREATE TABLE listings (
    id SERIAL PRIMARY KEY NOT NULL,
    dog_id INT REFERENCES dogs(id) ON DELETE CASCADE
    publish_date DATE NOT NULL,
    adoptable BOOLEAN NOT NULL DEFAULT FALSE,
);





