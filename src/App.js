import React, { Component } from 'react';
import './App.css';
import MainContent from './components/MainContentComponenent/MainContent';
import Header from './components/HeaderComponents/header';
import Footer from './components/footerComponent/FooterComponent';

import './assets/css/style.css';
import './assets/css/templates_style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <MainContent/>
          <Footer />
          
      </div>
    );
  }
}

export default App;
