import { useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import ResultsTable from "./ResultsTable/ResultsTable";
import { AlertText, Wrapper } from "./style";
function App() {
  const [formData, setFormData] = useState({
    currentSavings: 800,
    yearlyContribution: 400,
    expectedReturn: 10,
    investmentDuration: 10,
  });

  const [investmentResults, setInvestmentResults] = useState(null);
  console.log(investmentResults);
  return (
    <Wrapper>
      <Header />
      <Form
        formData={formData}
        setFormData={setFormData}
        setInvestmentResults={setInvestmentResults}
      />

      {investmentResults ? (
        <ResultsTable investmentResults={investmentResults} formData={formData}/>
      ) : (
        <AlertText >
          Por favor. Insira os dados do investimento.
        </AlertText>
      )}
    </Wrapper>
  );
}

export default App;
