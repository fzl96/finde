import {
  integer,
  pgTable,
  serial,
  text,
  varchar,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const laptops = pgTable("laptop", {
  id: serial("id").primaryKey(),
  merek: text("merek"),
  cpu: integer("cpu"),
  gpu: integer("gpu"),
  harga: integer("harga"),
  ram: integer("ram"),
  berat: integer("berat"),
  gambar: varchar("gambar", { length: 256 }),
  pekerjaan: varchar("pekerjaan", { length: 50 }),
  penggunaan: varchar("penggunaan", { length: 50 }),
  jenis_laptop: varchar("jenis_laptop", { length: 50 }),
  processor: varchar("processor", { length: 50 }),
  bobot: doublePrecision("bobot"),
});
