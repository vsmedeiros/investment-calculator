import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 1rem;
  max-width: 50rem;
  margin: 1rem auto;
  border-radius: .5rem;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  padding: 1rem;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
  &:focus-visible {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  
  
`;
export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  width: 6rem;
  border: none;
  border-radius: 0.25rem;
  background: transparent;
  color: #c2e9e0;
  outline: solid 1px #ffffff;
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
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 0.25rem;
  color: #c2e9e0;
  outline: solid 1px #ffffff;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    outline: none;
    background: #000000;
    color: #ffffff;
  }
  transition: all 0.2s ease-in-out;
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
`;
