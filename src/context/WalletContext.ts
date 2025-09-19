import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import WalletService from '../services/WalletService';
import { WalletContextType, Transaction, Token, ApiResponse } from '../../types';

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

interface WalletState {
  hasWallet: boolean;
  walletAddress: string;
  balances: { [key: string]: Token };
  recentTxs: Transaction[];
  isLoading: boolean;
  error: string | null;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [balances, setBalances] = useState<{ [key: string]: Token }>({
    AQY: { balance: '0', decimals: 9, symbol: 'AQY', name: 'AQY', address: '0xAQY' },
    USDC: { balance: '0', decimals: 6, symbol: 'USDC', name: 'USDC', address: '0xUSDC' },
    GC: { balance: '0', decimals: 6, symbol: 'GC', name: 'GC', address: '0xGC' }
  });
  const [recentTxs, setRecentTxs] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize wallet service
  useEffect(() => {
    initializeWallet();
  }, []);

  const initializeWallet = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const walletData = await WalletService.getWalletData();

      if (walletData) {
        setHasWallet(true);
        setWalletAddress(walletData.address);
        await loadBalances(walletData.address);
        await loadRecentTransactions(walletData.address);
      } else {
        setHasWallet(false);
        setWalletAddress('');
      }
    } catch (err) {
      console.error('Failed to initialize wallet:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const createWallet = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const newWallet = await WalletService.createWallet();
      setHasWallet(true);
      setWalletAddress(newWallet.address);

      // Initialize balances
      await loadBalances(newWallet.address);

      console.log('Wallet created successfully:', newWallet.address);
    } catch (err) {
      console.error('Failed to create wallet:', err);
      setError(err instanceof Error ? err.message : 'Failed to create wallet');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const importWallet = async (mnemonic: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const importedWallet = await WalletService.importWallet(mnemonic);
      setHasWallet(true);
      setWalletAddress(importedWallet.address);

      // Load balances and transactions
      await loadBalances(importedWallet.address);
      await loadRecentTransactions(importedWallet.address);

      console.log('Wallet imported successfully:', importedWallet.address);
    } catch (err) {
      console.error('Failed to import wallet:', err);
      setError(err instanceof Error ? err.message : 'Failed to import wallet');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const sendTransaction = async (to: string, amount: string, token: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      if (!hasWallet || !walletAddress) {
        throw new Error('No wallet available');
      }

      const txHash = await WalletService.sendTransaction(walletAddress, to, amount, token);

      // Add transaction to recent transactions
      const newTransaction: Transaction = {
        id: txHash,
        from: walletAddress,
        to,
        amount,
        token,
        timestamp: Date.now(),
        status: 'completed',
        hash: txHash
      };

      setRecentTxs(prev => [newTransaction, ...prev.slice(0, 9)]);

      // Refresh balances
      await loadBalances(walletAddress);

      console.log('Transaction sent successfully:', txHash);
    } catch (err) {
      console.error('Failed to send transaction:', err);
      setError(err instanceof Error ? err.message : 'Failed to send transaction');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const loadBalances = async (address: string): Promise<void> => {
    try {
      const walletBalances = await WalletService.getBalances(address);
      setBalances(prevBalances => ({
        ...prevBalances,
        ...walletBalances
      }));
    } catch (err) {
      console.error('Failed to load balances:', err);
    }
  };

  const loadRecentTransactions = async (address: string): Promise<void> => {
    try {
      const transactions = await WalletService.getRecentTransactions(address);
      setRecentTxs(transactions);
    } catch (err) {
      console.error('Failed to load recent transactions:', err);
    }
  };

  const getBalance = async (): Promise<string> => {
    if (!hasWallet || !walletAddress) {
      return '0';
    }

    try {
      await loadBalances(walletAddress);
      return balances.AQY?.balance || '0';
    } catch (err) {
      console.error('Failed to get balance:', err);
      return '0';
    }
  };

  const refreshData = async (): Promise<void> => {
    if (hasWallet && walletAddress) {
      await Promise.all([
        loadBalances(walletAddress),
        loadRecentTransactions(walletAddress)
      ]);
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  const clearWallet = async (): Promise<ApiResponse<void>> => {
    try {
      setIsLoading(true);
      await WalletService.clearWallet();
      setHasWallet(false);
      setWalletAddress('');
      setBalances({});
      setRecentTxs([]);
      return { success: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to clear wallet';
      setError(message);
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: WalletContextType = {
    walletAddress,
    balance: balances.AQY?.balance || '0',
    isLoading,
    hasWallet,
    balances,
    recentTxs,
    error,
    createWallet,
    importWallet,
    sendTransaction,
    getBalance,
    refreshData,
    clearError,
    clearWallet
  };

  return React.createElement(
    WalletContext.Provider,
    {
      value: contextValue
    },
    children
  );
};
