
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `dataCadastro` date NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `permicoes` int NOT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `clientes` (
  `idclients` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `telefone` varchar(30) NOT NULL,
  `email` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `dataCadastro` date NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `indicacao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idclients`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



CREATE TABLE `fornecedores` (
  `idfornecedor` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `telefone` varchar(30) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  PRIMARY KEY (`idfornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `produtos` (
  `idprodutos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `valor` double NOT NULL,
  `descricao` varchar(300) DEFAULT NULL,
  `dataCadastro` date NOT NULL,
  `quantidade` int NOT NULL,
  `IdFornecedor` int NOT NULL,
  PRIMARY KEY (`idprodutos`),
  KEY `fk_produtos_fornecedores_idx` (`IdFornecedor`),
  CONSTRAINT `fk_produtos_fornecedores` FOREIGN KEY (`IdFornecedor`) REFERENCES `fornecedores` (`idfornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `vendas` (
  `idvendas` int NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `valor` double NOT NULL,
  `desconto` double DEFAULT NULL,
  `promocao` int NOT NULL,
  `idProduto` int NOT NULL,
  `IdCliente` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idvendas`),
  KEY `fk_vendas_produtos1_idx` (`idProduto`),
  KEY `fk_vendas_clientes1_idx` (`IdCliente`),
  KEY `fk_vendas_usuarios1_idx` (`idUsuario`),
  CONSTRAINT `fk_vendas_clientes1` FOREIGN KEY (`IdCliente`) REFERENCES `clientes` (`idclients`),
  CONSTRAINT `fk_vendas_produtos1` FOREIGN KEY (`idProduto`) REFERENCES `produtos` (`idprodutos`),
  CONSTRAINT `fk_vendas_usuarios1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
