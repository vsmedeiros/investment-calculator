import React from "react";
import { HeaderWrapper, Logo } from "./style";
import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="logo" />
      <h1>Calculadora de Investimentos</h1>
    </HeaderWrapper>
  );
}
