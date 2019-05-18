import React, { Component } from 'react';
import './footer.css';
import mailImg from './mail.svg';
import phoneImg from './phone.svg';
import placeholderImg from './placeholder.svg';
import smartphoneImg from './smartphone.svg';
import facebookImg from './facebook.svg';
import instagramImg from './instagram.svg';

class Footer extends Component {
  render() { 
    return ( 
      <footer className="footer">
        <div className="footer-content-container">
          <div className="footer-item">
            <img className="footer-icon" src={ phoneImg } alt="phone" /> <p>(81) 3427-0231</p>
          </div>
          <div className="footer-item">
            <img className="footer-icon" src={ smartphoneImg } alt="smartphone" /> <p>(81) 99165-3045</p>
          </div>
          <a href="mailto:katur@katur.com.br?Subject=Contact%20website" target="_top" className="footer-item">
            <img className="footer-icon" src={ mailImg } alt="mail" /> <p>katur@katur.com.br</p>
          </a>
          <a href="https://www.facebook.com/Katurturismo/" target="_blank" className="footer-item">
            <img className="footer-icon" src={ facebookImg } alt="facebook" /> <p>/Katurturismo</p>
          </a>
          <a href="https://www.instagram.com/katur_turismo/" target="_blank" className="footer-item">
            <img className="footer-icon" src={ instagramImg } alt="instagram" /> <p>@katur_turismo</p>
          </a>
        </div>
        <div className="footer-address-container">
          <a href="https://goo.gl/maps/pvmb1fqzxTUmTKQW6" target="_blank" className="footer-item">
            <img className="footer-icon" src={ placeholderImg } alt="placeholder" /> <p>Rua Quarenta e Oito, nº. 942, Aflitos. Lojas 17 e 18. Recife-PE. CEP: 52050-355</p>
          </a>
        </div>
      </footer>
    );
  }
}
 
export default Footer;