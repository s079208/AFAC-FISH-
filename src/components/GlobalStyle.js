import { createGlobalStyle } from "styled-components";
import reset from "reset-css";


export default createGlobalStyle`
  ${reset}
:root {
    position: relative;
    min-height: 100vh;
    width:80vw;
    margin:auto;
    font-size: 62.5%;
    color: #009fad;
    font-family: 'roboto medium';}
html, *{box-sizing: border-box;}
*,*:before,*:after {box-sizing: inherit;}
body{background-color: #b0ffe2;}

main{
padding-bottom:5rem;
}
h1{
    font-size: 5rem;
    font-family: 'Noto Sans';
    font-weight: 700;
    text-transform: uppercase;
    margin: 5vh auto 2vh;
    color: #00707a;}
h2{
    font-size: 4rem;
    margin-bottom: 2vh;}
h3{
    font-size: 3rem ;
    margin: 4vh auto;
    text-align: left;
    width: 100%;}
p{
    font-family: 'roboto light';
    font-size: 2.5rem;
    line-height: 3rem;
    color: black;
    margin-bottom: 1vh;}
a{
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    display: inline-block;
    margin-right: 2vw;
    font-family: "roboto light";
    font-size: 2.5vh;}
img{
    width: 80vw;
    margin-bottom: 2vh;}
button{
    font-size: 3vh;
    background-color: #00707a;
    display: block;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    padding: 1vh ;
    color: #b0ffe2;
    margin-bottom: 3vh;}
nav ul{
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-between;
}
nav a{ 
    font-size: 3rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #00707a ;
    margin-bottom: 1.5vh;}
nav a:focus{color: #009fad;}

/*article{
    text-decoration: none;
    background-color: rgba(58, 199, 182, 0.5);
    padding: 2rem;
    border-radius: 2rem;
    margin-bottom: 2vh;
}*/

form{
    display:grid;
    grid-gap:2rem;
    grid-template-columns:20vw 20vw 20vw 20vw;
}

label{
    font-size:2rem;
    line-height:3rem;

}

@media (max-width: 700px) {
    nav ul {
        flex-direction:column;

    }
    
}
`;
