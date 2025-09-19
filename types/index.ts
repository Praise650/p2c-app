// Global type definitions for the Red Envelope Wallet

export interface Theme {
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundInverse: string;
  backgroundAccent: string;
  backgroundTabBar: string;
  contentPrimary: string;
  contentSecondary: string;
  contentInversePrimary: string;
  actionPrimary: string;
  actionSecondary: string;
  borderWeak: string;
  statusBarStyle: 'light' | 'dark';
}

export interface WalletContextType {
  walletAddress: string;
  balance: string;
  isLoading: boolean;
  hasWallet: boolean;
  balances: { [key: string]: Token };
  recentTxs: Transaction[];
  error: string | null;
  createWallet: () => Promise<void>;
  importWallet: (mnemonic: string) => Promise<void>;
  sendTransaction: (to: string, amount: string, token: string) => Promise<void>;
  getBalance: () => Promise<string>;
  refreshData: () => Promise<void>;
  clearError: () => void;
  clearWallet: () => Promise<ApiResponse<void>>;
}

export interface NavigationProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
    reset: (params: any) => void;
  };
  route?: {
    params?: any;
  };
}

export type Network = 'mainnet' | 'testnet' | 'devnet';

export interface NetworkConfig {
  id: Network;
  name: string;
  displayName: string;
  rpcUrl: string;
  explorerUrl: string;
  color: string;
}

export interface NetworkContextType {
  selectedNetwork: Network;
  networkConfig: NetworkConfig;
  setNetwork: (network: Network) => Promise<void>;
  getNetworkConfig: (network: Network) => NetworkConfig;
}

export interface ScreenProps extends NavigationProps {
  theme: Theme;
}

// Crypto types
export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: string;
  token: string;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
  hash?: string;
}

export interface Token {
  symbol: string;
  name: string;
  balance: string;
  address: string;
  decimals: number;
  icon?: string;
}

// F2C (Face-to-Crypto) types
export interface F2CEnvelope {
  payload: any;
  sig: string;
  pubKey: string;
}

export interface F2CPayload {
  amount: string;
  token: string;
  recipient: string;
  timestamp: number;
  id: string;
}

// Component prop types
export interface IconProps {
  size?: number;
  color?: string;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Style types
export interface StyleSheet {
  [key: string]: any;
}

export interface CreateStyleFunction<T> {
  (theme: Theme): T;
}

// Camera and QR types
export interface QRCodeData {
  type: string;
  data: string;
}

export interface CameraPermissions {
  granted: boolean;
  canAskAgain: boolean;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface FormField {
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
}

export interface FormState {
  fields: { [key: string]: FormField };
  isValid: boolean;
  isSubmitting: boolean;
}
