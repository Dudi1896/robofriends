import React from "react";
import "./Hello.css";

// class Hello extends React.Component {
const Hello = (props) => {
//   render() {
    return (
      <div className="f1 tc">
        <h1>Hello World, my name is Denzel!</h1>
        <p>{props.greeting}</p>
      </div>
    );
//   }
}

export default Hello;
