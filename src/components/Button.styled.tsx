import styled from "styled-components";
import { MyAnimation } from "../styles/animations/animations";

export const StyledBtn = styled.button`
border: none;
  background-color: #06e186;
  padding: 10px 20px;
  color: white;
  font-size: 16px;

  &:hover {
background-color: #085233;
  }
`

export const SuperBtn= styled(StyledBtn)`
  border-radius: 5px;
  background-color: red;
  color: greenyellow;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
  
`