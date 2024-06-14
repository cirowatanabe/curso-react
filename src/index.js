// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./styles/global-styles.css";
// import Home from "./templates/Home";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
 
import './styles/global-styles.css';
 
import { Home } from './templates/Home';
 
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home tab="home" />);