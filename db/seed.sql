CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INT
);

INSERT INTO houses (name, address, city, state, zip)
VALUES ('Skylars', '123 Pirahna St.', 'Lindon', 'UT', 84042);

INSERT INTO houses (name, address, city, state, zip)
VALUES ('Spencers', '123 Banjo St.', 'Spiral Mountain', 'UT', 84042);

