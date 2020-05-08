CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(40),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);