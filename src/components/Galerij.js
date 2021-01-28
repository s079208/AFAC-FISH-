import React from "react";
import styled from "styled-components";

export default function Comment(props) {
  return (
    <div className="Galerij">
      <h3>{props.avatarUrl1Name}</h3>
      <img className="Avatar" src={props.avatarUrl1} alt={props.avatarUrl1}/>
      <h3>{props.avatarUrl2Name}</h3>
      <img className="Avatar" src={props.avatarUrl2} alt={props.avatarUrl2}/>
      <h3>{props.avatarUrl3Name}</h3>
      <img className="Avatar" src={props.avatarUrl3} alt={props.avatarUrl3}/>
      <h3>{props.avatarUrl4Name}</h3>
      <img className="Avatar" src={props.avatarUrl4} alt={props.avatarUrl4}/>
      
    </div>
  );
}
