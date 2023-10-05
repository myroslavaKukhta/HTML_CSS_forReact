import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <StyledBtn >Hello </StyledBtn >
    </div>
  );
}

export default App;
const StyledBtn = styled.button`
border: none;
  background-color: rebeccapurple;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`