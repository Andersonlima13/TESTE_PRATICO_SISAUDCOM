CREATE TABLE admin (
    id UUID PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE funcionario (
    id UUID PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_admissao DATE,
    salario NUMERIC(15,2) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);
