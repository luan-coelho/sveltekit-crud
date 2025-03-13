CREATE TABLE "`user`" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"surname" varchar(255),
	"cpf" varchar(11),
	"email" varchar(255),
	CONSTRAINT "`user`_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "`user`_email_unique" UNIQUE("email")
);
