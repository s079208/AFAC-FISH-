import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  width: 50vw;
  margin:2rem 0 ;
  position: relative;
  right: 0rem;
  background-color: #00707a;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;
