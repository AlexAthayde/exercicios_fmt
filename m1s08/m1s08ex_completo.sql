create table Departamento (
	id serial primary key,
	nome varchar(100)not null,
	dataCriacao date not null
);

create table Funcionario (
	id serial primary key,
	nome varchar(100) not null,
	idade int not null,
	cargo varchar(100) not null,
	salario decimal(18, 2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references Departamento (id),
	check (idade >= 14)
);

select * from Departamento;
select * from Funcionario;
  
insert into Departamento (nome, dataCriacao) values 
('Vendas', '2023-01-01'),
('Marketing', '2023-02-01'),
('Recursos Humanos', '2023-03-01');

insert into Funcionario (nome, idade, cargo, salario, idDepartamento) values
('Ana Costa', 28, 'Analista de marketing', 4500.00, 2),
('Bruno Santos', 35, 'Gerente de vendas', 8000.00, 1),
('Camila Ribeiro', 22, 'Recrutadora', 3000.00, 3);

select
f.nome as Funcionario,
f.idade,
f.cargo,
f.salario,
d.nome as Departamento,
d.dataCriacao
from Funcionario as f
inner join Departamento as d
on f.idDepartamento = d.id;

update Departamento set nome = 'Trade Marketing' where id = 2;
update Funcionario set idade = 30 where id = 3;

delete from Funcionario where idDepartamento in (select id from Departamento where id = 1);
delete from Departamento where id = 1;

drop table Funcionario;
drop table Departamento;