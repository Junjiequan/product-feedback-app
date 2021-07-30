import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App fn={()=>'okay'} isTrue={true} number={1234} text={'hello this is text'} product={{itemName:'car', price:50}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

