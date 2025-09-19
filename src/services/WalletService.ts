import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transaction, Token } from '../../types';

// Mock word list for mnemonic generation (simplified version)
const WORD_LIST: string[] = [
  'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract',
  'absurd', 'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid',
  'acoustic', 'acquire', 'across', 'act', 'action', 'actor', 'actress', 'actual',
  'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance',
  'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'agent', 'agree',
  'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol',
  'alert', 'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha',
  'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount',
  'amused', 'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal',
  'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique', 'anxiety',
  'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arcade',
  'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor',
  'army', 'around', 'arrange', 'arrest', 'arrive', 'arrow', 'art', 'article',
  'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset', 'assist', 'assume',
  'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction',
  'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado',
  'avoid', 'awake', 'aware', 'away', 'awesome', 'awful', 'awkward', 'axis',
  'baby', 'bachelor', 'bacon', 'badge', 'bag', 'balance', 'balcony', 'ball',
  'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base',
  'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become',
  'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt',
  'bench', 'benefit', 'best', 'betray', 'better', 'between', 'beyond', 'bicycle',
  'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black',
  'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood',
  'blossom', 'blow', 'blue', 'blur', 'blush', 'board', 'boat', 'body',
  'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring',
  'borrow', 'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain',
  'brand', 'brass', 'brave', 'bread', 'breeze', 'brick', 'bridge', 'brief',
  'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother',
  'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb',
  'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus',
  'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage', 'cabin', 'cable'
];

interface WalletData {
  address: string;
  privateKey?: string;
  mnemonic?: string;
}

class WalletService {
  private address: string | null = null;
  private network: string = 'devnet';
  private isInitialized: boolean = false;

  // Initialize service (placeholder for future blockchain client)
  initializeClient(network: string = 'devnet'): void {
    this.network = network;
    this.isInitialized = true;
    console.log(`WalletService initialized for ${network}`);
  }

  // Generate a random mnemonic phrase
  generateMnemonic(): string {
    const words: string[] = [];
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
      words.push(WORD_LIST[randomIndex]);
    }
    return words.join(' ');
  }

  // Create a new wallet
  async createWallet(): Promise<WalletData> {
    try {
      const mnemonic = this.generateMnemonic();
      const address = await this.deriveAddressFromMnemonic(mnemonic);

      // Store wallet data securely
      await SecureStore.setItemAsync('wallet_mnemonic', mnemonic);
      await AsyncStorage.setItem('wallet_address', address);

      this.address = address;

      return {
        address,
        mnemonic
      };
    } catch (error) {
      console.error('Error creating wallet:', error);
      throw new Error('Failed to create wallet');
    }
  }

  // Import wallet from mnemonic
  async importWallet(mnemonic: string): Promise<WalletData> {
    try {
      const address = await this.deriveAddressFromMnemonic(mnemonic);

      // Store wallet data securely
      await SecureStore.setItemAsync('wallet_mnemonic', mnemonic);
      await AsyncStorage.setItem('wallet_address', address);

      this.address = address;

      return {
        address,
        mnemonic
      };
    } catch (error) {
      console.error('Error importing wallet:', error);
      throw new Error('Failed to import wallet');
    }
  }

  // Derive address from mnemonic (mock implementation)
  private async deriveAddressFromMnemonic(mnemonic: string): Promise<string> {
    // Mock address generation - in real implementation, this would use proper key derivation
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      mnemonic,
      { encoding: Crypto.CryptoEncoding.HEX }
    );

    // Generate a mock address format
    return `0x${hash.slice(0, 40)}`;
  }

  // Get wallet data from storage
  async getWalletData(): Promise<WalletData | null> {
    try {
      const address = await AsyncStorage.getItem('wallet_address');
      if (!address) {
        return null;
      }

      const mnemonic = await SecureStore.getItemAsync('wallet_mnemonic');

      this.address = address;

      return {
        address,
        mnemonic: mnemonic || undefined
      };
    } catch (error) {
      console.error('Error getting wallet data:', error);
      return null;
    }
  }

  // Get wallet balances (mock implementation)
  async getBalances(address: string): Promise<{ [key: string]: Token }> {
    try {
      // Mock balance data - in real implementation, this would query the blockchain
      const mockBalances: { [key: string]: Token } = {
        AQY: {
          balance: (Math.random() * 1000).toFixed(2),
          decimals: 9,
          symbol: 'AQY',
          name: 'AQY Token',
          address: '0xAQY_TOKEN_ADDRESS'
        },
        USDC: {
          balance: (Math.random() * 100).toFixed(2),
          decimals: 6,
          symbol: 'USDC',
          name: 'USD Coin',
          address: '0xUSDC_TOKEN_ADDRESS'
        },
        GC: {
          balance: (Math.random() * 50).toFixed(2),
          decimals: 6,
          symbol: 'GC',
          name: 'Game Coin',
          address: '0xGC_TOKEN_ADDRESS'
        }
      };

      return mockBalances;
    } catch (error) {
      console.error('Error getting balances:', error);
      return {};
    }
  }

  // Send transaction (mock implementation)
  async sendTransaction(from: string, to: string, amount: string, token: string): Promise<string> {
    try {
      // Mock transaction - in real implementation, this would submit to blockchain
      const txHash = `0x${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;

      console.log(`Mock transaction: ${amount} ${token} from ${from} to ${to}`);
      console.log(`Transaction hash: ${txHash}`);

      return txHash;
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw new Error('Failed to send transaction');
    }
  }

  // Get recent transactions (mock implementation)
  async getRecentTransactions(address: string): Promise<Transaction[]> {
    try {
      // Mock transaction data
      const mockTransactions: Transaction[] = [
        {
          id: '1',
          from: address,
          to: '0x1234567890abcdef',
          amount: '10.5',
          token: 'AQY',
          timestamp: Date.now() - 86400000, // 1 day ago
          status: 'completed',
          hash: '0xabcdef1234567890'
        },
        {
          id: '2',
          from: '0x9876543210fedcba',
          to: address,
          amount: '5.25',
          token: 'USDC',
          timestamp: Date.now() - 172800000, // 2 days ago
          status: 'completed',
          hash: '0xfedcba0987654321'
        }
      ];

      return mockTransactions;
    } catch (error) {
      console.error('Error getting recent transactions:', error);
      return [];
    }
  }

  // Clear wallet data
  async clearWallet(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync('wallet_mnemonic');
      await AsyncStorage.removeItem('wallet_address');
      this.address = null;
    } catch (error) {
      console.error('Error clearing wallet:', error);
    }
  }
}

export default new WalletService();
