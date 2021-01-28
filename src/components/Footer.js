import React from "react";
import styled from "styled-components";

const Footertje = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height:2.5rem;
`;

export default function Footer() {
  return (
    <Footertje>
      <p>© 2021 - AFAC - Cnaepkens Yoeri - Eindopdracht </p>
    </Footertje>
  );
}
