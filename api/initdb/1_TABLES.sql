CREATE TABLE users
(
    id         BIGSERIAL       PRIMARY KEY,
    first_name VARCHAR(255) not null,
    last_name  VARCHAR(255) not null,
    age        INT          null,
    email      VARCHAR(255)
);

CREATE TABLE kittens
(
    id       BIGSERIAL       PRIMARY KEY,
    first_name VARCHAR(255) not null,
    fur        VARCHAR(255) not null,
    race       VARCHAR(255) not null,
    age        INT          null,
    imagepath  VARCHAR(255) not null,
    sex        VARCHAR(255) not null
);

CREATE TABLE reviews
(
    id       BIGSERIAL       PRIMARY KEY,
    date     VARCHAR(255) not null,
    rating   INT         null,
    text     VARCHAR(255) not null,
    userid   BIGINT       null,
    kittenid BIGINT      null
);
