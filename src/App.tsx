import React from 'react';
import './App.css';
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

const StyledBtn = styled.button`
border: none;
  background-color: #06e186;
  padding: 10px 20px;
  color: white;
  font-size: 16px;

  &:hover {
background-color: #085233;
  }

  &:last-child {
    background-color: #f7f30bec;
  }
`

const Link = styled.a`
  color: #96f30b;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`

const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: red;
  color: greenyellow;
`

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
`

const Menu = styled.nav `
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li > a {
  color: green;
}

li + li {
  margin-left: 20px;
}

`