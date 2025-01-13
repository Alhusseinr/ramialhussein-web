import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './app'
import { Provider } from './components/ui/provider'
import { Theme } from '@chakra-ui/react';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider>
        <Theme appearance='dark'>
            <App />
        </Theme>
    </Provider>
);