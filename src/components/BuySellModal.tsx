import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createBuySellModalStyles } from '../styles/BuySellModal.styles';
import Svg, { Path, G } from 'react-native-svg';

// Type definitions
interface IconProps {
  size?: number;
  color?: string;
}

interface Coin {
  id: string;
  symbol: string;
  icon: any;
}

interface Props {
  visible: boolean;
  onClose: () => void;
}

// Back Icon Component
const BackIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);

// Mock data for pinned coins
const mockPinnedCoins: Coin[] = [
  {
    id: 'sui',
    symbol: 'SUI',
    icon: require('../../assets/sui.svg'),
  },
  {
    id: 'usdc',
    symbol: 'USDC',
    icon: require('../../assets/sui.svg'), // Using placeholder
  },
  {
    id: 'aqy',
    symbol: 'AQY',
    icon: require('../../assets/sui.svg'), // Using placeholder
  },
  {
    id: 'gc',
    symbol: 'GC',
    icon: require('../../assets/sui.svg'), // Using placeholder
  },
];

const BuySellModal: React.FC<Props> = ({ visible, onClose }) => {
  const { theme } = useTheme();
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const styles = createBuySellModalStyles(theme);

  const handleBuySell = (coin: Coin, action: 'Buy' | 'Sell') => {
    // Handle buy/sell action
    console.log(`${action} ${coin.symbol}`);
    // Here you would navigate to the actual buy/sell flow
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Buy & Sell</Text>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.coinList}>
              {mockPinnedCoins.map((coin) => (
                <View key={coin.id} style={styles.coinItem}>
                  <View style={styles.coinInfo}>
                    <View style={styles.coinIcon}>
                      <Text style={styles.coinIconText}>
                        {coin.symbol.charAt(0)}
                      </Text>
                    </View>
                    <View style={styles.coinDetails}>
                      <Text style={styles.coinSymbol}>{coin.symbol}</Text>
                    </View>
                  </View>

                  <View style={styles.actionButtons}>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => handleBuySell(coin, 'Buy')}
                    >
                      <Text style={styles.actionButtonText}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => handleBuySell(coin, 'Sell')}
                    >
                      <Text style={styles.actionButtonText}>Sell</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default BuySellModal;
