import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear - // القيمة النهائية
    resultData[0].interest - // الفائدة
    resultData[0].annualInvestment; // الاستثمار السنوي
  console.log(resultData);
  return (
    <div className="center">
      <table id="result">
        <thead className="center">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <th>{yearData.year}</th>
                <th>{formatter.format(yearData.valueEndOfYear)}</th>
                <th>{formatter.format(yearData.interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{formatter.format(totalAmountInvested)}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
