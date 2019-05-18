import React, { Component } from 'react';
import './home.css';
import katur from './katur.jpeg';

class Home extends Component {
  render() { 
    return ( 
      <section className="home">
        <img className="katur-logo" src={ katur } alt="logo" />
        <h2>A melhor razão para viajar</h2>
      </section>
    );
  }
}
 
export default Home;