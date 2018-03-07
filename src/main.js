import React from 'react';
import ReactDOM from 'react-dom';
import './assets/less/reset.less';
import logo from './assets/images/1.png'
import HomePage from './components/Homepage'

ReactDOM.render(
  <h1>
    <span>项目名为现在几点</span>  
    <img src={logo} />
    <HomePage /> 
  </h1>,
  document.getElementById('app')
)