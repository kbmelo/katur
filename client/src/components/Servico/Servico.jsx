import React, { Component } from 'react';
import './servico.css';

class Servico extends Component {
  render() { 
    return ( 
      <div className="servico">
        <p>{this.props.text}</p>
        <div className="line-card"></div>
      </div>
    );
  }
}
 
export default Servico;