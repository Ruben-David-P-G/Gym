CREATE TABLE grupo_sucursal(
  pk_sucursal int(11) PRIMARY KEY AUTO_INCREMENT,
  registro date NOT NULL,
  grupo varchar(20) NOT NULL,
  no_sucursal int(11) NOT NULL,
  nombre_comercial varchar(100) NOT NULL,
  direccion varchar(200) NULL,
  ciudad varchar(50) NULL,
  estado varchar(50) NULL,
  telefono varchar(18) NULL,
  email varchar(200) NULL,
  estatus varchar(25) NOT NULL DEFAULT 'ACTIVO'
);

CREATE TABLE categoria_articulo (
  pk_categoria_articulo int(11) NOT NULL,
  registro datetime NOT NULL,
  nombre varchar(100) NOT NULL,
  descripcion longtext,
  fk_sucursal int(11) NOT NULL,
  FOREIGN KEY (fk_sucursal) REFERENCES grupo_sucursal (pk_sucursal)
);

CREATE TABLE articulo(
  pk_articulo int(11) NOT NULL,
  registro datetime NOT NULL,
  nombre varchar(100) NOT NULL,
  descripcion longtext,
  estatus varchar(25) NOT NULL,
  stock int(11) NOT NULL,
  stock_asignado int(11) NOT NULL,
  fk_categoria_articulo int(11) NOT NULL,
  fk_sucursal int(11) NOT NULL,
  FOREIGN KEY (fk_sucursal) REFERENCES grupo_sucursal (pk_sucursal),
  FOREIGN KEY (fk_categoria_articulo) REFERENCES categoria_articulo (pk_categoria_articulo)
);

CREATE TABLE proveedor(
  pk_proveedor int(11) NOT NULL,
  nombre_ejecutivo varchar(200) NOT NULL,
  nombre_empresa varchar(200) NOT NULL,
  descripcion longtext,
  telefono varchar(30) NULL,
  correo varchar(200) NULL,
  fk_sucursal int(11) NOT NULL,
  FOREIGN KEY (fk_sucursal) REFERENCES grupo_sucursal (pk_sucursal)
);

CREATE TABLE compra(
  pk_compra int(11) NOT NULL,
  fecha_registro date NOT NULL,
  folio_compra varchar(50) DEFAULT NULL,
  grupo varchar(20) NOT NULL,
  fk_agencia int(11) NOT NULL,
  login varchar(255) NOT NULL,
  fk_proveedor int(11) NOT NULL
);

CREATE TABLE compra_lista(
  pk_lista_compra int(11) NOT NULL,
  cantidad int(11) NOT NULL,
  fecha_compra date NOT NULL,
  tiempo_garantia varchar(25) NOT NULL,
  vencimiento_garantia date NOT NULL,
  modelo varchar(200) DEFAULT NULL,
  serie varchar(200) DEFAULT NULL,
  fk_categoria int(11) NOT NULL,
  fk_articulo int(11) NOT NULL,
  fk_compra int(11) NOT NULL
);

CREATE TABLE usuario(
  pk_usuario SMALLINT(6) PRIMARY KEY AUTO_INCREMENT,
  usuario varchar(30) not null,
  nombre varchar(80) not null,
  password varchar(80) not null,
  telefono varchar(15) not null,
  celular varchar(15) not null,
  direccion varchar(200) not null,
  estatus varchar(20) not null,
  tipo varchar(20) not null,
  fk_sucursal int(11) NOT NULL,
  FOREIGN KEY (fk_sucursal) REFERENCES grupo_sucursal (pk_sucursal)
);

cliente
pago_mensualidad