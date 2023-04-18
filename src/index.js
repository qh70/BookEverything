import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./pages/Home/App"
import GlobalStyle from './components/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

