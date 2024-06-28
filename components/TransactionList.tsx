import { Transactions } from "@/types/Transactions";
import getTransactions from "@/actions/getTransactions";
import TransactionItem from "./TransactionItem";
const TransactionList = async () => {
  const { error, transactions } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction: Transactions) => {
            return (
              <TransactionItem key={transaction.id} transaction={transaction} />
            );
          })}
      </ul>
    </>
  );
};

export default TransactionList;
