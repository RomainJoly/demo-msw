import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@vtmn/css';
import '@vtmn/css/dist/index.css';

let MODE = 'dev';

const bootstrap = async () => {

  const container = document.getElementById('root');

  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <App />
    );
  }
};

if (MODE !== 'test') {
  import('../__mocks__/browser')
    .then(({ worker }) => worker.start({ onUnhandledRequest: 'bypass' }))
    .then(bootstrap)
    .catch(console.error);
} else {
  bootstrap().catch(console.error);
}
