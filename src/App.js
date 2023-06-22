import { useEffect, useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import ResultsTable from "./ResultsTable/ResultsTable";
import { AlertText, GlobalStyle, Wrapper } from "./style";
import Chart from "./Chart/Chart";
function App() {
  const [formData, setFormData] = useState({
    currentSavings: 800,
    yearlyContribution: 400,
    expectedReturn: 10,
    investmentDuration: 10,
  });

  const [investmentResults, setInvestmentResults] = useState(null);
  useEffect(() => {
    setInvestmentResults(null);
  }, [formData]);
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header />
      <Form
        formData={formData}
        setFormData={setFormData}
        setInvestmentResults={setInvestmentResults}
      />

      {investmentResults ? (
        <div>
          <Chart investmentResults={investmentResults} />
          <ResultsTable
            investmentResults={investmentResults}
            formData={formData}
          />
        </div>
      ) : (
        <AlertText>Por favor. Insira os dados do investimento e calcule novamente.</AlertText>
      )}
    </Wrapper>
  );
}

export default App;
