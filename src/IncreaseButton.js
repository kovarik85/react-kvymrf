import React from "react";
import './style.css';
 
export default class IncreaseButton extends React.Component{
    

  constructor(props){
    super(props)
  }


  render(){
      return (
      <>
      <button  onClick={this.props.increaseFunction}>Növel</button>
      </>
      )}
  } 
