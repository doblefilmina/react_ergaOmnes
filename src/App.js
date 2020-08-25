import React, {useState } from 'react';
import './App.css';

import users3 from './samples/users.json';
import promotedarticles3 from './samples/promotedarticles.json';
import Recomended from './components/recomended.js';
import Articles from './components/articles.js';
import MiRed from './components/mired.js';
import PromotedArticles from './components/promotedarticles';

const users2 = users3 ;
const promotedarticles2 = promotedarticles3;

const App = () => {
  const[users, setUsers] = useState(users2)
  const[promotedarticles, setPromotedarticles] = useState(promotedarticles2)
  
  return (
    <div className="cuerpo">
      <Recomended users={users}/>
      <Articles users={users}/>
      <div className="column-3">
        <MiRed users={users}/>
        <PromotedArticles promotedarticles={promotedarticles}/>
      </div>
    </div>
  )
}

export default App;
