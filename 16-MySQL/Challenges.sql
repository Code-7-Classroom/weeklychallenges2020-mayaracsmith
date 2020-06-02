DROP DATABASE IF EXISTS challenges;
CREATE DATABASE challenges;
USE challenges;

-- easy 
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date DATE, 
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("The Missing Piece", "1976-04-14", "Shel", "Silverstein"),
("Becoming", "2018-11-13", "Michelle", "Obama"),
("Don't Make Me Think", "2000-01-01", "Steve", "Krug"),
("Harry Potter and the Philosopher's Stone", "1997-06-26", "J.K.", "Rowling"),
("Harry Potter and the Deathly Hallows", "2007-07-21", "J.K.", "Rowling");

-- Inserts two books into the books table
INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Harry Potter and the Chamber of Secrets", "1998-07-02", "J.K.", "Rowling"),
("Harry Potter and the Prisoner of Azkaban", "1999-07-08", "J.K.", "Rowling");

-- Delete the oldest book by publish date
DELETE FROM books ORDER BY publish_date LIMIT 1;

SELECT * FROM books;

-- Counts the number of Books in the table by book title
SELECT COUNT(title) FROM books;