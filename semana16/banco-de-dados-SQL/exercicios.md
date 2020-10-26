### Exercicios de Bancos de dados e SQL

#### Exercício 1

a)
1. **VARCHAR** que é string
2. **DATE** representa uma data (YYYY-MM-DD)
3. **PRIMARY KEY** que é um identificador unico da tabela.

b)
1. **SHOW  DATABASE** retornou as information_schema e jackson-michelle-louzada
2. **SHOW TABLES** Mostrou a tabela que criei de Actor

c) mostra os detalhes da tabela, como cada coluna e o tipo da coluna, key, default e extra, em formato de tabela

#### Exercício 2

a) 
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1.200000,
  "1963-08-23", 
  "female"
);
~~~

b) 
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
A principal razão pela qual o erro foi gerado é porque já existe um valor 1 para o ID da coluna em que você o define como PRIMARY KEY (os valores são únicos) na tabela que você está inserindo.

c) 
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1. Esse erro acontece por que a query só possui 3 entradas pré definidas (id, name, salary), quando na verdade essa tabela precisa receber 5 entradas, então ficaria assim :
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~
Adicionando o birth_date e o gender.

d) 
Código de erro: 1364. O campo 'nome' não tem um valor padrão. Isso ocorre por que a query de entrada não ta recebendo nome nenhum, e receber entrada de nome é obrigatório, sendo assim o correto seria:
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Reynaldo Gianecchini",
  400000,
  "1949-04-18", 
  "male"
);
~~~
Adicionando o valor (name) e o nome "Reynaldo Gianecchini".

e)
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
A data que estava na query estava fora "" então não reconhecia, o certo é:
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~
Antes estava 1979-03-26 sem os "".

f)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rodrigo Santoro",
  819333.33,
  "1975-08-22", 
  "male"
);
~~~

#### Exercício 3
 
 a) 
~~~SQL
SELECT * from Actor WHERE gender = "female"
~~~
 b) 
~~~SQL
SELECT salary from Actor WHERE name = "Tony Ramos"
~~~

c) ele retornou uma tabela vazia.

d) 
~~~SQL
SELECT id, name, salary from Actor WHERE salary <= 500000;
~~~

e) 
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'.
Isso é por que ele recebe um name, e não um "nome" em portugues, o certo é:

~~~SQL
SELECT id, name from Actor WHERE id = "002"
~~~

#### Exercício 4

a) A query tá verificando os parenteses primeiro, se alguem começa com a letra A ou J, o resultado dessa busca vai pra condição 2, todos que começarem com letra A ou J tem que ter salário maior que 300.000 pra filtrar.

b)
~~~SQL
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000
~~~

c)
~~~SQL
SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%"
~~~

d)
~~~SQL
SELECT * from Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000
~~~

#### Exercício 5

a)
~~~SQL
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sipnose TEXT NOT NULL,
    release_data DATE NOT NULL,
	avaliação TINYINT NOT NULL
);
~~~

b)
~~~SQL
INSERT INTO Movies (id, name, sipnose, release_data, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
~~~

c)
~~~SQL
INSERT INTO Movies (id, name, sipnose, release_data, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
~~~
d)
~~~SQL
INSERT INTO Movies (id, name, sipnose, release_data, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02", 
  8
);
~~~
e)
~~~SQL
INSERT INTO Movies (id, name, sipnose, release_data, rating)
VALUES(
  "004", 
  "Tropa de Elite",
  "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
  "2007-10-05", 
  9
);
~~~
#### Exercício 6

a) 
~~~SQL
SELECT id, name, rating from Movies WHERE id = "001"
~~~

b) 
~~~SQL
SELECT * FROM Movies WHERE name = "Tropa de Elite"
~~~

c) 
~~~SQL
SELECT id, name, sipnose from Movies WHERE rating >= 7;
~~~

#### Exercício 7

a) 
~~~SQL
SELECT * FROM Movies WHERE name LIKE "%vida%"
~~~

b) 
~~~SQL
SELECT * FROM Movies WHERE name LIKE "%vida%" OR sipnose LIKE "%ar%";
~~~