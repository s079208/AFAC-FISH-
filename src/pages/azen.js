import React from "react";
import Button from "../components/Button";

import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  justify-content: ;
`;

const Lijst = styled.ul`
  display: grid;
  grid-template-columns: 39vw 39vw;
  grid-gap: 2vw;
`;

function ListItem(props) {
  /*return <li><img src={props.value}/></li>;*/
  return (
    <li>
      <Image src={props.value}></Image>
    </li>
  );
}

function NumberList(props) {
  const pictures = props.pictures;
  return (
    <Lijst>
      {pictures.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </Lijst>
  );
}

const pictures = [
  "../img/aas1.jpg",
  "../img/aas4.jpg",
  "../img/aas3.jpg",
  "../img/aas5.jpg",
  "../img/aas2.jpg"
];

export default function Azen() {
  return  <NumberList pictures={pictures}/>;
}
