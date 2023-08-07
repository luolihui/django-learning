import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'
// import reportWebVitals from './reportWebVitals';

function Bpp(){
  return <h2>回家看日剧</h2>
}

const Cpp =() => {
  return <h2>回家看泰剧</h2>
}

class Dpp extends Component{
  render(){
    return <h2>回家看韩剧</h2>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
      <Bpp/>
      <Cpp/>
      <Dpp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
