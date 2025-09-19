import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createSelectCoinScreenStyles } from '../styles/SelectCoinScreen.styles';
import Svg, { Path, Circle } from 'react-native-svg';

// Type definitions
interface IconProps {
  size?: number;
  color?: string;
}

interface Token {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  balance: string;
  value: string;
  icon: 'dollar' | 'teardrop';
  verified: boolean;
}

interface Props {
  navigation?: any;
  onBack: () => void;
  onCoinSelect: (token: Token) => void;
}

// Icons
const BackIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);

const SearchIcon: React.FC<IconProps> = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill={color}/>
  </Svg>
);

const CheckIcon: React.FC<IconProps> = ({ size = 16, color = "#4caf50" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill={color}/>
  </Svg>
);

// Dollar Icon for USDC
const DollarIcon: React.FC<IconProps> = ({ size = 20, color = "#ffffff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill={color}/>
  </Svg>
);

// Teardrop Icon for SUI
const TeardropIcon: React.FC<IconProps> = ({ size = 20, color = "#ffffff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={color}/>
  </Svg>
);

const SelectCoinScreen: React.FC<Props> = ({ navigation, onBack, onCoinSelect }) => {
  const { theme } = useTheme();
  const styles = createSelectCoinScreenStyles(theme);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock token data matching the design exactly
  const mockTokens: Token[] = [
    {
      id: 'USDC',
      name: 'USDC',
      symbol: 'USDC',
      price: '$1',
      change: '+0.0072%',
      balance: '29.25 USDC',
      value: '$29.24',
      icon: 'dollar' as const,
      verified: true,
    },
    {
      id: 'SUI',
      name: 'Sui',
      symbol: 'SUI',
      price: '$3.69',
      change: '+2.15%',
      balance: '2.18 SUI',
      value: '$8.05',
      icon: 'teardrop' as const,
      verified: true,
    },
  ];

  const filteredTokens = mockTokens.filter(token =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCoinSelect = (token: Token) => {
    // Call the onCoinSelect callback with the selected token
    if (onCoinSelect) {
      onCoinSelect(token);
    }
    // Close the modal
    onBack();
  };

  const isPositiveChange = (change: string): boolean => {
    return change.startsWith('+');
  };

  const renderIcon = (iconType: 'dollar' | 'teardrop') => {
    switch (iconType) {
      case 'dollar':
        return <DollarIcon size={20} color="#ffffff" />;
      case 'teardrop':
        return <TeardropIcon size={20} color="#ffffff" />;
      default:
        return <Text style={styles.tokenIconText}>💰</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <BackIcon size={24} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select a coin</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          {searchQuery.length === 0 && (
            <View style={styles.searchIcon}>
              <SearchIcon size={20} color="rgba(255, 255, 255, 0.3)" />
            </View>
          )}
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Token List */}
      <ScrollView style={styles.tokenList} showsVerticalScrollIndicator={false}>
        {filteredTokens.map((token) => (
          <TouchableOpacity
            key={token.id}
            style={styles.tokenItem}
            onPress={() => handleCoinSelect(token)}
          >
            {/* Token Icon */}
            <View style={styles.tokenIcon}>
              {renderIcon(token.icon)}
            </View>

            {/* Token Info */}
            <View style={styles.tokenInfo}>
              <View style={styles.tokenHeader}>
                <Text style={styles.tokenName}>{token.name}</Text>
                {token.verified && (
                  <View style={styles.verifiedIcon}>
                    <CheckIcon size={16} color="#4CAF50" />
                  </View>
                )}
              </View>
              <Text style={styles.tokenPrice}>{token.price} {token.change && (
                <Text style={[
                  styles.tokenChange,
                  isPositiveChange(token.change) ? styles.positiveChange : styles.negativeChange
                ]}>
                  {token.change}
                </Text>
              )}</Text>
            </View>

            {/* Token Right Side */}
            <View style={styles.tokenRight}>
              {token.value && (
                <Text style={styles.tokenValue}>{token.value}</Text>
              )}
              {token.balance && (
                <Text style={styles.tokenBalance}>{token.balance}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectCoinScreen;
