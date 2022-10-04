drop table users;
create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255) not null,
    age int null,
    email VARCHAR(255)
);

drop table kittens;
create table kittens
(
    id bigint auto_increment,
    constraint kittens_pk
        primary key (id),
    first_name VARCHAR(255) not null,
    fur VARCHAR(255) not null,
    race VARCHAR(255) not null,
    age int null,
    imagepath VARCHAR(255) not null,
    sex VARCHAR(255) not null
);

drop table reviews;
create table reviews
(
    id bigint auto_increment,
    constraint reviews_pk
        primary key (id),
    date VARCHAR(255) not null,
    rating int null,
    text VARCHAR(255) not null,
    userid bigint null,
    kittenid bigint null
);
