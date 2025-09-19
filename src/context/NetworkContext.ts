import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Network, NetworkConfig, NetworkContextType } from '../../types';

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const useNetwork = (): NetworkContextType => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};

interface NetworkProviderProps {
  children: ReactNode;
}

const NETWORK_STORAGE_KEY = '@selected_network';

// Network configurations
const NETWORK_CONFIGS: Record<Network, NetworkConfig> = {
  mainnet: {
    id: 'mainnet',
    name: 'Mainnet',
    displayName: 'Mainnet',
    rpcUrl: 'https://fullnode.mainnet.sui.io:443',
    explorerUrl: 'https://explorer.sui.io',
    color: '#4ade80', // Green
  },
  testnet: {
    id: 'testnet',
    name: 'Testnet',
    displayName: 'Testnet',
    rpcUrl: 'https://fullnode.testnet.sui.io:443',
    explorerUrl: 'https://explorer.sui.io/testnet',
    color: '#4ade80', // Light green
  },
  devnet: {
    id: 'devnet',
    name: 'Devnet',
    displayName: 'Devnet',
    rpcUrl: 'https://fullnode.devnet.sui.io:443',
    explorerUrl: 'https://explorer.sui.io/devnet',
    color: '#4ade80', // Light green
  },
};

export const NetworkProvider: React.FC<NetworkProviderProps> = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>('mainnet');

  // Load saved network on app start
  useEffect(() => {
    loadSavedNetwork();
  }, []);

  const loadSavedNetwork = async (): Promise<void> => {
    try {
      const savedNetwork = await AsyncStorage.getItem(NETWORK_STORAGE_KEY);
      if (savedNetwork && savedNetwork in NETWORK_CONFIGS) {
        setSelectedNetwork(savedNetwork as Network);
      }
    } catch (error) {
      console.error('Failed to load saved network:', error);
    }
  };

  const setNetwork = async (network: Network): Promise<void> => {
    try {
      setSelectedNetwork(network);
      await AsyncStorage.setItem(NETWORK_STORAGE_KEY, network);
      console.log(`Network switched to: ${network}`);
    } catch (error) {
      console.error('Failed to save network selection:', error);
    }
  };

  const getNetworkConfig = (network: Network): NetworkConfig => {
    return NETWORK_CONFIGS[network];
  };

  const networkConfig = NETWORK_CONFIGS[selectedNetwork];

  const value: NetworkContextType = {
    selectedNetwork,
    networkConfig,
    setNetwork,
    getNetworkConfig,
  };

  return React.createElement(
    NetworkContext.Provider,
    { value },
    children
  );
};
