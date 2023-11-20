DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
    listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE
);
