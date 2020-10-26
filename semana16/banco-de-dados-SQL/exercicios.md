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


