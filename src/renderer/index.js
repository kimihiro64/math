// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import electronLog from 'electron-log';
import App from './App';

const logger = electronLog.scope('renderer');

(() => {
  process.on('uncaughtException', (error) => {
    logger.error(error);
  });

  window.onerror = (error) => {
    logger.error(error);
  };

  const container = document.getElementById('app');
  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();
