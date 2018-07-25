-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2018-07-24 19:44:28.936

-- tables
-- Table: Categoria
CREATE TABLE Categoria (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Nome varchar(255) NOT NULL COMMENT 'Coluna referente a nome da categoria.',
    CONSTRAINT ID PRIMARY KEY (ID)
) COMMENT 'Tabela de categorias de produtos.';

-- Table: Cidade
CREATE TABLE Cidade (
    ID int NOT NULL AUTO_INCREMENT,
    Nome varchar(255) NOT NULL,
    Estado_ID int NOT NULL,
    CONSTRAINT Cidade_pk PRIMARY KEY (ID)
);

-- Table: Cor
CREATE TABLE Cor (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Nome varchar(255) NOT NULL COMMENT 'Coluna referente ao nome da cor.',
    CONSTRAINT Cor_pk PRIMARY KEY (ID)
) COMMENT 'Tabela de cores para tintas e carimbos.';

-- Table: Endereco_entrega
CREATE TABLE Endereco_entrega (
    ID int NOT NULL AUTO_INCREMENT,
    Rua varchar(255) NOT NULL,
    Numero varchar(255) NOT NULL,
    Complemento varchar(255) NOT NULL,
    Cep varchar(255) NOT NULL,
    Usuario_ID int NOT NULL,
    Cidade_ID int NOT NULL,
    CONSTRAINT Endereco_entrega_pk PRIMARY KEY (ID)
);

-- Table: Estado
CREATE TABLE Estado (
    ID int NOT NULL AUTO_INCREMENT,
    Nome varchar(255) NOT NULL,
    Sigla varchar(255) NOT NULL,
    CONSTRAINT Estado_pk PRIMARY KEY (ID)
);

-- Table: Forma_pagamento
CREATE TABLE Forma_pagamento (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Nome varchar(255) NOT NULL COMMENT 'Coluna referente ao nome da forma de pagamento.',
    CONSTRAINT Forma_pagamento_pk PRIMARY KEY (ID)
);

-- Table: Imagem
CREATE TABLE Imagem (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Imagem text NOT NULL COMMENT 'Coluna referente a string base64 da imagem.',
    Descricao varchar(255) NOT NULL COMMENT 'Coluna referente ao texto de descrição da imagem para o atributa ALT da TAG <IMG>',
    Produto_ID int NOT NULL COMMENT 'Coluna referente a chave estrangeira da tabela Produto.',
    CONSTRAINT Imagem_pk PRIMARY KEY (ID)
);

-- Table: Pedidos
CREATE TABLE Pedidos (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Status varchar(255) NOT NULL COMMENT 'Coluna referente ao status do pedido.',
    Forma_pagamento_ID int NOT NULL,
    Usuario_ID int NOT NULL,
    CONSTRAINT Pedidos_pk PRIMARY KEY (ID)
);

-- Table: Pedidos_Produto
CREATE TABLE Pedidos_Produto (
    ID int NOT NULL AUTO_INCREMENT,
    Produto_ID int NOT NULL,
    Pedidos_ID int NOT NULL,
    CONSTRAINT Pedidos_Produto_pk PRIMARY KEY (ID)
);

-- Table: Produto
CREATE TABLE Produto (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Nome varchar(255) NOT NULL COMMENT 'Coluna referente ao nome do produto.',
    Descricao varchar(255) NOT NULL COMMENT 'Coluna referente a descrição do produto.',
    Preco decimal(10000,2) NOT NULL,
    Categoria_ID int NOT NULL COMMENT 'Coluna referente a chave estrangeira da tabela Categoria.',
    Cor_ID int NOT NULL COMMENT 'Coluna referente a chave estrangeira da tabela Cor.',
    CONSTRAINT Produto_pk PRIMARY KEY (ID)
) COMMENT 'Tabela de produtos';

-- Table: Usuario
CREATE TABLE Usuario (
    ID int NOT NULL AUTO_INCREMENT COMMENT 'Coluna referente a chave primaria.',
    Nome varchar(255) NOT NULL COMMENT 'Coluna referente ao nome e sobrenome do usuário.',
    Email varchar(255) NOT NULL COMMENT 'Coluna referente ao e-mail do usuario.',
    Senha varchar(255) NOT NULL,
    Telefone varchar(255) NULL,
    CONSTRAINT Usuario_pk PRIMARY KEY (ID)
);

-- foreign keys
-- Reference: Cidade_Estado (table: Cidade)
ALTER TABLE Cidade ADD CONSTRAINT Cidade_Estado FOREIGN KEY Cidade_Estado (Estado_ID)
    REFERENCES Estado (ID);

-- Reference: Endereco_entrega_Cidade (table: Endereco_entrega)
ALTER TABLE Endereco_entrega ADD CONSTRAINT Endereco_entrega_Cidade FOREIGN KEY Endereco_entrega_Cidade (Cidade_ID)
    REFERENCES Cidade (ID);

-- Reference: Endereco_entrega_Usuario (table: Endereco_entrega)
ALTER TABLE Endereco_entrega ADD CONSTRAINT Endereco_entrega_Usuario FOREIGN KEY Endereco_entrega_Usuario (Usuario_ID)
    REFERENCES Usuario (ID);

-- Reference: Imagem_Produto (table: Imagem)
ALTER TABLE Imagem ADD CONSTRAINT Imagem_Produto FOREIGN KEY Imagem_Produto (Produto_ID)
    REFERENCES Produto (ID);

-- Reference: Pedidos_Forma_pagamento (table: Pedidos)
ALTER TABLE Pedidos ADD CONSTRAINT Pedidos_Forma_pagamento FOREIGN KEY Pedidos_Forma_pagamento (Forma_pagamento_ID)
    REFERENCES Forma_pagamento (ID);

-- Reference: Pedidos_Produto_Pedidos (table: Pedidos_Produto)
ALTER TABLE Pedidos_Produto ADD CONSTRAINT Pedidos_Produto_Pedidos FOREIGN KEY Pedidos_Produto_Pedidos (Pedidos_ID)
    REFERENCES Pedidos (ID);

-- Reference: Pedidos_Produto_Produto (table: Pedidos_Produto)
ALTER TABLE Pedidos_Produto ADD CONSTRAINT Pedidos_Produto_Produto FOREIGN KEY Pedidos_Produto_Produto (Produto_ID)
    REFERENCES Produto (ID);

-- Reference: Pedidos_Usuario (table: Pedidos)
ALTER TABLE Pedidos ADD CONSTRAINT Pedidos_Usuario FOREIGN KEY Pedidos_Usuario (Usuario_ID)
    REFERENCES Usuario (ID);

-- Reference: Produto_Categoria (table: Produto)
ALTER TABLE Produto ADD CONSTRAINT Produto_Categoria FOREIGN KEY Produto_Categoria (Categoria_ID)
    REFERENCES Categoria (ID);

-- Reference: Produto_Cor (table: Produto)
ALTER TABLE Produto ADD CONSTRAINT Produto_Cor FOREIGN KEY Produto_Cor (Cor_ID)
    REFERENCES Cor (ID);

-- End of file.

