import React from "react";
import { Table, Thead, Tbody } from "./style";
export default function ResultsTable({ investmentResults, formData }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </Thead>
      <Tbody>
        {investmentResults.map((result) => {
          const totalInterest =
            result.savingsEndOfYear -
            (result.yearlyContribution * result.year + formData.currentSavings);
          return (
            <tr>
              <td>{result.year.toFixed(0)}</td>
              <td>{result.savingsEndOfYear.toFixed(2).replace('.',',')}</td>
              <td>{result.yearlyInterest.toFixed(2).replace('.',',')}</td>
              <td>{totalInterest.toFixed(2).replace('.',',')}</td>
              <td>
                {(
                  result.yearlyContribution * result.year +
                  formData.currentSavings
                ).toFixed(2).replace('.',',')}
              </td>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
