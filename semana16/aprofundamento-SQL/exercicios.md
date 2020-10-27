### ExercÍcios aprofundamento de SQL

#### Exercício 1

a) esse comando apaga a coluna salary da tabela Actor

b) Altera o nome da coluna, no caso de gender pra sex

c) nesse caso o change ta alterando o valor de caracters que o Varchar pode ter, de (6) pra (255)

d)  o comando para essa seção é:
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

#### Exercícios 2

a) O comando para mudar o nome e a data de nascimento é: 
~~~SQL
UPDATE Actor
SET name = "Miguel Falabella", birth_date = "1956-10-10"
WHERE id = "003";
~~~

b) Comando =
~~~SQL
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";
~~~

para voltar ao anterior
~~~SQL
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
~~~

c)
comando usado para alterar um usuario completo:
~~~SQL
UPDATE Actor
SET name = "Adriana Esteves", birth_date = "1969-12-15", id = "007", salary = 550000, gender = "famale"
WHERE id = "005";
~~~ 
d)
~~~SQL
UPDATE Actor
SET name = "Sonia braga"
WHERE id = "005";
~~~

ele retorna de resposta um ok mas na tabela não exibe nada do usuario com id 005

#### Exercício 3

a)
~~~SQL
DELETE FROM Actor 
WHERE name = 'Fernanda Montenegro';
~~~

b)
~~~SQL
DELETE FROM Actor 
WHERE gender = 'male' AND salary > 1000000;
~~~

#### Exercício 4

a)
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

b)
~~~SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~

c)
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~

d)
~~~SQL
SELECT AVG(salary) FROM Actor;
~~~

#### Exercícios 5

a) ele retorna uma lista com a quantidade de pessoas em cada grupo de genero, no caso female e male

b)
~~~SQL
SELECT id, name FROM Actor ORDER BY name DESC;
~~~

c)
~~~SQL
SELECT * FROM Actor ORDER BY salary;
~~~

d)
~~~SQL
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~

e)
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~

#### Exercícios 6

a)
~~~SQL
ALTER TABLE Movie ADD playing_limit_date DATE;
~~~

b)
~~~SQL
ALTER TABLE Movies CHANGE rating rating FLOAT;
~~~

c)
o que já saiu de cartaz:

~~~SQL
UPDATE Movies
SET playing_limit_date = "2020-10-10"
WHERE id = "001";
~~~

o que anda está em cartaz:

~~~SQL
UPDATE Movies
SET playing_limit_date = "2020-11-10"
WHERE id = "002";
~~~

d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0


Ele aceitou deu ok mas modificou um total de 0 linhas por que esse id foi excluido.

#### Exercício 7 

a) 
~~~SQL
SELECT COUNT(playing_limit_date) FROM Movies WHERE rating > 7.5;
~~~

b) 
~~~SQL
SELECT AVG(rating) FROM Movies;
~~~

c) 
~~~SQL
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
~~~

d) 
~~~SQL
SELECT COUNT(*) FROM Movies WHERE release_data > CURDATE();
~~~

e) 
~~~SQL
SELECT MAX(rating) FROM Movies;
~~~

f) 
~~~SQL
SELECT MIN(rating) FROM Movies;
~~~

#### Exercícios 8

a) 
~~~SQL
SELECT * FROM Movies ORDER BY name ASC;
~~~

b) 
~~~SQL
SELECT * FROM Movies ORDER BY name DESC LIMIT 5;
~~~

c) 
~~~SQL
SELECT * FROM Movies
WHERE release_data < CURDATE() 
ORDER BY release_data DESC 
LIMIT 3;
~~~

d) 
~~~SQL
SELECT * FROM Movies 
ORDER BY rating DESC 
LIMIT 3;
~~~