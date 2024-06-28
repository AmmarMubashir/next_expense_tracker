"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Transactions } from "@/types/Transactions";

async function getTransactions(): Promise<{
  transactions?: Transactions[];
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transactions };
  } catch (error) {}
  return { error: "Database Error" };
}

export default getTransactions;
