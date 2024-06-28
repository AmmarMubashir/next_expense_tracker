import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransactionList from "@/components/TransactionList";
import { currentUser } from "@clerk/nextjs/server";
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;
