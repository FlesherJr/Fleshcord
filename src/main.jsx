
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ backgroundColor: '#1e1e1e', color: '#ffffff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1>Добро пожаловать в Fleshcord!</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
