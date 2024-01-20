import React from "react"
import  ReactDOM  from "react-dom";
import App from "./App"
import { createGlobalStyle } from "styled-components";

const Globalstyle=createGlobalStyle`
*{
margin:0px;
padding:0px;
box-sizing:border-box;
body{
    background-color:#323334;
    height:100vh;
}
}
`
ReactDOM.render(<div><Globalstyle/><App/></div>,document.querySelector(".root"))