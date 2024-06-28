import getIncomeExpenses from "@/actions/getIncomeExpenses";
import { addCommas } from "@/lib/utils";

const IncomeExpenses = async () => {
  const { income, expenses } = await getIncomeExpenses();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          ${addCommas(Number(income?.toFixed(2))) ?? 0}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          ${addCommas(Number(expenses?.toFixed(2))) ?? 0}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
