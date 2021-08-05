import React from "react";
import ReactDom from "react-dom";
import style from "./style.css";
import logo from "./assets/webpack.svg";
import data from "./data.json"
import { HellowWorld } from "./components/HelloWorld.jsx";
 

ReactDom.render(<HellowWorld name="React" logo={logo} menu={data.links} />, document.getElementById("app"));