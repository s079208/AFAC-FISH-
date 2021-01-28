import React from "react";
import styled from "styled-components";

const Aanwezig = styled.p`
  color: green;
  margin-bottom: 1rem;
`;

const NietAanwezig = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const Li = styled.li`
  list-style-type: square;
  margin-left:5rem;
  margin-bottom: 1rem;
`;




export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>
        Dit is de startpagina van mijn Fish@ applicatie in aanloop van mijn bacherlorproef.
      </p>
      <h2>Over deze toepassing</h2>
      <Aanwezig>Dit is aanwezig op de site
          <ol>
            <Li>Azen</Li>
            <Li>Vissoorten</Li>
            <Li>Records</Li>
          </ol>
      </Aanwezig>
      <NietAanwezig>Dit is nog niet aanwezig -  hier wordt aangewerkt.
          <ol>
            <Li>Winkels</Li>
            <Li>Visplekken</Li>
          </ol>
      </NietAanwezig>
      
    </>
  );
}
