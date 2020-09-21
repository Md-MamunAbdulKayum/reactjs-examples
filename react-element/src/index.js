import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(

  // elements with React.createElement
  /*React.createElement(
    "ul"
  , {style:{color:"red"}},
  React.createElement("li", null, "Rose"),
  React.createElement("li", null, "Dahlia"),
  React.createElement("li", null, "Jasmine"),
  ),
  */

  //elements using JSX(JSX stands for JavaScript XML.
  // JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React)
  //behind the scene, bebeljs translates this to the same code as the upper one 
 <div>
  <h1>Hello World!</h1>
  <ul>
     <li>Rose</li>
     <li>Dahlia</li>
     <li>Jasmine</li>
  </ul>
  </div>,
    document.getElementById('root')
);