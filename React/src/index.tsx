import React from 'react';
import ReactDOM from 'react-dom';
import App from '@routes/App';
import '@styles/global.scss';
import '@styles/theme.scss';

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration error'));
  });
}
