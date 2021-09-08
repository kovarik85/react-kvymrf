import React from "react";
import './style.css';
 
export default class Nuller extends React.Component{
    

  constructor(props){
    super(props)
  }


  render(){
      return (
      <>
      <button className="nullButton" onClick={this.props.nulling}>Nulláz</button>
      </>
      )}
  } 
