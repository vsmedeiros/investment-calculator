import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 1rem;
  max-width: 40rem;
  margin: 1rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Input = styled.input`
  width: 16rem;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
  &:focus-visible {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  width: 5rem;
  border: none;
  border-radius: 0.25rem;
  background: #17493d;
  color: #c2e9e0;
  outline: solid 1px #17493d;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    outline: none;
    color: #2d8f6d;
    background: #ffffff;
  }
  transition: all 0.2s ease-in-out;
`;
export const CancelButton = styled.button`
  border: none;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 0.25rem;
  color: #c2e9e0;
  outline: solid 1px #c2e9e0;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    outline: none;
    background: #000000;
    color: #91e1d0;
  }
  transition: all 0.2s ease-in-out;
`;
