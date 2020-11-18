### ExercÍcios aprofundamento de SQL

#### Exercício 1

a) sim sou a favor desse formato de id contendo strings e numbers numa combinação pois as possibilidades de combinação são quase infinitas

b) implementado no codigo

#### Exercícios 2

a) o codigo acima é criando um user com conexão com banco de dados usando dotenv usando uma função async pra criação de user.

b) 
~~~SQL
CREATE TABLE users_exericio_autenticacao(
	id VARCHAR(36) PRIMARY KEY,
	email VARCHAR(60) NOT NULL,
	password VARCHAR(40) NOT NULL
    );
~~~
