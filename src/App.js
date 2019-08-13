import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import BurritoBuilder from './containers/BurritoBuilder/BurritoBuilder';



class App extends Component {
  render ()  {
  return (
    <div className="App">
      <Layout>
      
      </Layout>
      <BurritoBuilder/>
      
    </div>
  );
  }
}

export default App;
