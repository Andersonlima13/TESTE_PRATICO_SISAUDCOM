INSERT INTO admin (id, nome, senha)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'Administrador',
    '$2a$10$TjXVNQAxNLvlcMPfOPht0u9BmE195XWk.CW9gyYMEtyj9uXsSlL9q'
);

INSERT INTO funcionario (id, nome, data_admissao, salario, ativo)
VALUES (
    '22222222-2222-2222-2222-222222222222',
    'Funcionario Exemplo',
    DATE '2024-01-15',
    3500.00,
    TRUE
);
