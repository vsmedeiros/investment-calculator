import React from "react";
import { Table, Thead, Tbody, TableCell, TableHeader } from "./style";

export default function ResultsTable({ investmentResults, formData }) {
  console.log(investmentResults);
  const formatCurrencyString = (string) =>
    `R$ ${Number(string).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  return (
    <Table>
      <Thead>
        <tr>
          <TableHeader>Ano</TableHeader>
          <TableHeader>Reserva total</TableHeader>
          <TableHeader>Redimento (Anual)</TableHeader>
          <TableHeader>Rendimento total</TableHeader>
          <TableHeader>Capital Investido</TableHeader>
        </tr>
      </Thead>
      <Tbody>
        {investmentResults.map((result,index) => {
          const totalInterest =
            result.savingsEndOfYear -
            (result.yearlyContribution * result.year + Number(formData.currentSavings));
          return (
            <tr key={index}>
              <TableCell>{result.year}</TableCell>
              <TableCell>
                {formatCurrencyString(result.savingsEndOfYear)}
              </TableCell>
              <TableCell>
                {formatCurrencyString(result.yearlyInterest)}
              </TableCell>
              <TableCell>{formatCurrencyString(totalInterest)}</TableCell>
              <TableCell>
                {formatCurrencyString(
                  result.yearlyContribution * result.year +
                    Number(formData.currentSavings)
                )}
              </TableCell>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
