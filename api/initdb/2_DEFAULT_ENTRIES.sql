INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (1, 'Paul', 'Harrohide', 20, 'pharrohide@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (2, 'Harry', 'Covert', 25, 'hcovert@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (3, 'Alain', 'Posteur', null, 'aposteur@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (4, 'Elvire', 'Debord', null, 'edebord@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (5, 'Laurent', 'Barre', 41, 'lbarre@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (6, 'Homer', 'Cipourtoux', 28, 'hcipourtoux@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (7, 'Gaston', 'Laplouz', null, 'glaplouz@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (8, 'Gisèle', 'Detable', null, 'gdetable@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (9, 'Thomas', 'Ouaque', null, 'touaque@epf.fr');
INSERT INTO defaultdb.users (id, first_name, last_name, age, email)
VALUES (10, 'Sacha', 'Telfrize', 23, 'stelfrize@epf.fr');

INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (1, 'Saumon', 'marmelade', 'Unknown', 4, 'Kitten_1.jpg', 'female');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (2, 'Biscotte', 'brown', 'Unknown', 4, 'Kitten_2.jpg', 'male');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (3, 'Chamallow', 'white', 'Unknown', 4, 'Kitten_3.jpg', 'female');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (4, 'Raclette', 'brown', 'Unknown', 4, 'Kitten_4.jpg', 'male');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (5, 'Champignon', 'black', 'Unknown', 6, 'Kitten_5.jpg', 'female');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (6, 'Tartine', 'grey', 'Unknown', 6, 'Kitten_6.jpg', 'male');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (7, 'Ramen', 'white', 'Unknown', 6, 'Kitten_7.jpg', 'female');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (8, 'Carotte', 'black', 'Unknown', 6, 'Kitten_8.jpg', 'male');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (9, 'Framboise', 'black and white', 'Unknown', 2, 'Kitten_9.jpg', 'female');
INSERT INTO defaultdb.kittens (id, first_name, fur, race, age, imagepath, sex)
VALUES (10, 'Bonbon', 'tortoiseshell', 'Unknown', 2, 'Kitten_10.jpg', 'male');

INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (1, '01/09/2003', 3, 'white', 1, 1);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (2, '01/09/2003', 3, 'white', 6, 6);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (3, '01/09/2003', 3, 'black', 7, 7);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (4, '01/09/2003', 3, 'brown', 8, 8);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (5, '01/09/2003', 3, 'yellow', 9, 9);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (6, '01/09/2003', 3, 'grey', 2, 2);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (7, '01/09/2003', 3, 'ginger', 3, 3);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (8, '01/09/2003', 3, 'black', 4, 4);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (9, '01/09/2003', 3, 'black and white', 5, 5);
INSERT INTO defaultdb.reviews (id, date, rating, text, userid, kittenid)
VALUES (10, '01/09/2003', 3, 'brown and black', 10, 10);