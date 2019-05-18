import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Servicos from './components/Servicos/Servicos';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <Home />
        <Servicos />
        <Footer />
      </div>
    );
  }
}

export default App;