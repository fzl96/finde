CREATE TABLE IF NOT EXISTS "laptop" (
	"id" serial PRIMARY KEY NOT NULL,
	"merek" text,
	"cpu" integer,
	"gpu" integer,
	"harga" integer,
	"ram" integer,
	"gambar" varchar(256),
	"pekerjaan" varchar(50),
	"penggunaan" varchar(50),
	"jenis_laptop" varchar(50),
	"processor" varchar(50),
	"bobot" double precision
);
