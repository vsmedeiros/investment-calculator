import React from "react";
import { Table, Thead, Tbody, TableCell, TableHeader } from "./style";

export default function ResultsTable({ investmentResults, formData }) {
  const formatCurrencyString = (string) =>
    `R$ ${string.toFixed(2).replace(".", ",")}`;
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
        {investmentResults.map((result) => {
          const totalInterest =
            result.savingsEndOfYear -
            (result.yearlyContribution * result.year + formData.currentSavings);
          return (
            <tr>
              <TableCell>{result.year.toFixed(0)}</TableCell>
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
                    formData.currentSavings
                )}
              </TableCell>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
