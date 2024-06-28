"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getIncomeExpenses(): Promise<{
  income?: number;
  expenses?: number;
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
    });

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
      .filter((amount) => amount > 0)
      .reduce((acc, item) => acc + item, 0);
    const expenses = amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => acc + item, 0);

    return { income, expenses: Math.abs(expenses) };
  } catch (error) {}
  return {
    error: "Database Error",
  };
}

export default getIncomeExpenses;
