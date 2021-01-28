import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";

const Navke = styled.nav`
  margin-bottom: 2rem;
`;



export default function Navigation() {
  return (
    <Navke>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/visplek">Visplekken</Link>
        </li>
        <li>
          <Link to="/azen">Azen</Link>
        </li>
        <li>
          <Link to="/vissoort">Vissoorten</Link>
        </li>
        <li>
          <Link to="/record">Records</Link>
        </li>
        <li>
          <Link to="/winkel">Winkels</Link>
        </li>
      </ul>
    </Navke>
  );
}
