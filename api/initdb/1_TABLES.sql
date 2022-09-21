create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name TEXT not null,
    last_name TEXT not null,
    age int null
);

create table kittens
(
    id bigint auto_increment,
    constraint kittens_pk
        primary key (id),
    first_name TEXT not null,
    fur TEXT not null,
    race TEXT not null,
    age int null,
    imagepath TEXT not null,
    sex TEXT not null
);

create table reviews
(
    id bigint auto_increment,
    constraint reviews_pk
        primary key (id),
    date TEXT not null,
    rating int null,
    text TEXT not null,
    userid LONG null,
    kittenid LONG null
);
