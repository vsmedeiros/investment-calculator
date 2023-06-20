import React from "react";
import { calculateHandler } from "../utils/calculateHandler";
import { SubmitButton, FormWrapper, Input, InputWrapper, Label, CancelButton } from "./style";
import { preventNotNumberCharacters } from "../utils/preventNotNumberCharacters";

export default function Form() {
  return (
    <FormWrapper onSubmit={calculateHandler}>
      <InputWrapper>
        <p>
          <Label htmlFor="current-savings">Poupança atual (R$)</Label>
          <Input
            onKeyDown={(evt) => preventNotNumberCharacters(evt)}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <Label htmlFor="yearly-contribution">Aporte Anual (R$)</Label>
          <Input
            onKeyDown={(evt) => preventNotNumberCharacters(evt)}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </InputWrapper>
      <InputWrapper>
        <p>
          <Label htmlFor="expected-return">Juros esperados (% por ano)</Label>
          <Input
            onKeyDown={(evt) => preventNotNumberCharacters(evt)}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <Label htmlFor="duration">Duração do investimento (anos)</Label>
          <Input
            onKeyDown={(evt) => preventNotNumberCharacters(evt)}
            type="number"
            id="duration"
          />
        </p>
      </InputWrapper>
      <p className="actions">
        <CancelButton type="reset" className="buttonAlt">
          LIMPAR
        </CancelButton>
        <SubmitButton type="submit" className="button">
          CALCULAR
        </SubmitButton>
      </p>
    </FormWrapper>
  );
}
