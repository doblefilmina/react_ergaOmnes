import React, { Component } from 'react';
import './App.css';

import users from './samples/users.json';
import promotedarticles from './samples/promotedarticles.json';
import Recomended from './components/recomended.js';
import Articles from './components/articles.js';
import MiRed from './components/mired.js';
import PromotedArticles from './components/promotedarticles';

class App extends Component {
  
  state = {
    users: users,
    promotedarticles: promotedarticles
  }
  
  render() {
    return <div className="cuerpo">
        <Recomended users={this.state.users}/>
        <Articles users={this.state.users}/>
        <div className="column-3">
          <MiRed users={this.state.users}/>
          <PromotedArticles promotedarticles={this.state.promotedarticles}/>
        </div>
      </div>
  }
}

export default App;
