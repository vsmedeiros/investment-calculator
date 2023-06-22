export const calculateHandler = (event, formData) => {
  event.preventDefault();

  const yearlyData = []; // per-year results

  let currentSavings = Number(formData.currentSavings);

  const yearlyContribution = Number(formData.yearlyContribution);

  const expectedReturn = Number(formData.expectedReturn) / 100;

  const duration = Number(formData.investmentDuration);

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  return yearlyData;
};
