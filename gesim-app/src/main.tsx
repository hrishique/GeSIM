import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivyProvider } from '@privy-io/react-auth';
 
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmdeqdeld01h6jp0meosgikz3"
      config={{
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        appearance: {
          theme: 'dark',
          accentColor: '#9333ea',
          walletChainType: 'ethereum-and-solana', // display both EVM and Solana wallets
        },
        solanaClusters: [
          { name: 'mainnet-beta', rpcUrl: 'https://api.mainnet-beta.solana.com' }
         , { name: 'devnet', rpcUrl: 'https://api.devnet.solana.com' }
        ],
         
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
