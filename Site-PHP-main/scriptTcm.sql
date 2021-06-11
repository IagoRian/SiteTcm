create database phptcm 
default character set utf8
default collate utf8_general_ci;

use phptcm;

create table curriculo(
Id_Curriculo int primary key auto_increment,
Nome varchar(80) not null,
Email varchar(80) not null,
Sexo char(1) not null,
telefone char
Experiencia varchar(250),
Formacao varchar(250) not null,
DataDeNascimento date not null,
Linguas varchar(50),
Estado char(2) not null
)