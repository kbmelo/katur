import React, { Component } from 'react';
import './servicos.css';
import Servico from '../Servico/Servico'

class Servicos extends Component {
  state = { 
    cards: [
      'Passagens aéreas nacionais e internacionais',
      'Pacotes de viagens para qualquer localidade: Brasil e exterior',
      'Promoções para Europa, Estados Unidos e América do Sul',
      'Pacotes personalizados',
      'Cruzeiros no Brasil e exterior',
      'Aluguel de carros',
      'Seguro Viagem',
      'Excursões',
      'Cruzeiros',
      'Organizamos Eventos (Formaturas, Seminários, Congressos, casamentos, etc.)'
    ]
  }
  render() { 
    return ( 
      <section className="servicos">
      <h3 className="servicos-title">Serviços</h3>
      <div className="line"></div>
      <div className="servicos-container">
        { this.state.cards.map(card => <Servico key={ card } text={ card } />) }
      </div>
      </section>
    );
  }
}
 
export default Servicos;