import React from 'react';
import './App.css';
import {StyledBtn} from './components/Button.styled'
import {SuperBtn} from './components/Button.styled'
import {Link} from './components/Link.styled'
import {Menu} from './components/Menu.styled'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Box>
        <Menu>
          <ul>
            <li><a href="">menu item 1</a></li>
            <li><a href="">menu item 2</a></li>
            <li><a href="">menu item 3</a></li>
          </ul>
        </Menu>
            <StyledBtn as={Link} href={"#"}>LinkComponent
            </StyledBtn >
            <StyledBtn as="a" href={"#"}>Link
            </StyledBtn >
            <StyledBtn>hello
            </StyledBtn >
            <SuperBtn>Super</SuperBtn>
        </Box>

    </div>
  );
}

export default App;

const Box = styled.div `
display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
}
`
