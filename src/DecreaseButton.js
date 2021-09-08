import React from "react";
import './style.css';
 
export default class DecreaseButton extends React.Component{
    

  constructor(props){
    super(props)
  }


  render(){
      return (
      <>
      <button className="decreaser" onClick={this.props.decreaseFunction}>Csökkent</button>
      </>
      )}
  } 
