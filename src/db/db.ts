import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { laptops, detail } from "@/db/schema";
import postgres from "postgres";

const connectionString = process.env.DB_URL!;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });

export async function getLaptop({
  pekerjaan,
  penggunaan,
  jenis_laptop,
  processor,
}: {
  pekerjaan: string;
  penggunaan: string;
  jenis_laptop: string;
  processor: string;
}) {
  const result = await db
    .select()
    .from(laptops)
    .where(
      and(
        eq(laptops.pekerjaan, pekerjaan),
        eq(laptops.penggunaan, penggunaan),
        eq(laptops.jenis_laptop, jenis_laptop),
        eq(laptops.processor, processor)
      )
    )
    .orderBy(desc(laptops.bobot))
    .limit(1);

  return result;
}

export async function getDetail(id: number) {
  const result = await db.select().from(detail).where(eq(detail.id, id));

  return result;
}
