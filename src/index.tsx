import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'scss/application.scss';

import 'config/i18n';
import App from 'components/App';

// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element could not be found, it needs to be different than null');
}

const root = createRoot(rootElement);

// Create a client
const queryClient = new QueryClient();

const renderApp = () => {
  root.render(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
