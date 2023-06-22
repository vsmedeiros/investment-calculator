import React from "react";
import { calculateHandler } from "../utils/calculateHandler";
import {
  SubmitButton,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  CancelButton,
  ButtonsGroup,
  InputRow,
} from "./style";
import { preventNotNumberCharacters } from "../utils/preventNotNumberCharacters";

export default function Form({ formData, setFormData, setInvestmentResults }) {
  const handleChange = (event, path) => {
    setFormData((prev) => ({
      ...prev,
      [path]: event.target.value,
    }));
  };
  const handleReset = (event, path) => {
    setFormData(() => ({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      investmentDuration: 0,
    }));
  }
  return (
    <FormWrapper
      onSubmit={(event) =>
        setInvestmentResults(calculateHandler(event, formData))
      }
    >
      <InputRow>
        <InputWrapper>
          <Label htmlFor="currentSavings">Poupança atual (R$)</Label>
          <Input
            onKeyDown={(evt) => preventNotNumberCharacters(evt)}
            type="number"
            required
            id="currentSavings"
            min='1'
            value={formData.currentSavings}
            onChange={(event) => handleChange(event, "currentSavings")}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="yearlyContribution">Aporte Anual (R$)</Label>
          <Input
            onKeyDown={(event) => preventNotNumberCharacters(event)}
            type="number"
            min='1'
            required
            id="yearlyContribution"
            value={formData.yearlyContribution}
            onChange={(event) => handleChange(event, "yearlyContribution")}
          />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <Label htmlFor="expectedReturn">Juros esperados (% por ano)</Label>
          <Input
            onKeyDown={(event) => preventNotNumberCharacters(event)}
            type="number"
            min='1'
            required
            id="expectedReturn"
            value={formData.expectedReturn}
            onChange={(event) => handleChange(event, "expectedReturn")}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="investmentDuration">
            Duração do investimento (anos)
          </Label>
          <Input
            onKeyDown={(event) => preventNotNumberCharacters(event)}
            type="number"
            min='1'
            required
            id="investmentDuration"
            value={formData.investmentDuration}
            onChange={(event) => handleChange(event, "investmentDuration")}
          />
        </InputWrapper>
      </InputRow>
      <ButtonsGroup className="actions">
        <CancelButton type="reset" className="buttonAlt" onClick={handleReset}>
          LIMPAR
        </CancelButton>
        <SubmitButton type="submit" className="button">
          CALCULAR
        </SubmitButton>
      </ButtonsGroup>
    </FormWrapper>
  );
}
