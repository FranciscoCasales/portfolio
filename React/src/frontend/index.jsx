import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import App from 'frontend/routes/App';
import 'frontend/styles/global.scss';
import 'frontend/styles/theme.scss';

const history = createBrowserHistory();

ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          registration.update();
          window.location.reload();
        });
      })
      .catch(() => console.log('SW registration error'));
  });
}
