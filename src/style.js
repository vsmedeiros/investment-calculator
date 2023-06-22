import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    
    flex-direction: column;
    align-items: center;
`
export const AlertText = styled.p`
    color: #4CAF50;
`
export const GlobalStyle = createGlobalStyle`
@media (max-width: 576px) { html {
  font-size: 35%;
} }  }
@media (min-width: 576px) { html {
  font-size: 45%;
} }  }

@media (min-width: 768px) { html {
  font-size: 40%;
} } 
@media (min-width: 992px) { html {
  font-size: 55%;
} }

@media (min-width: 1200px) { html {
  font-size: 67.5%;
} } 

@media (min-width: 1600px) { html {
  font-size: 90%;
} } 
@media (min-width: 1900px) { html {
  font-size: 100%;
} } 
`;