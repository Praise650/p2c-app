import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useNetwork } from '../context/NetworkContext';
import { createNetworkScreenStyles } from '../styles/NetworkScreen.styles';
import Svg, { Path } from 'react-native-svg';

// Icon Components
type IconProps = { size?: number; color?: string };

const BackIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);

const CheckIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill={color}/>
  </Svg>
);

type Props = {
  onBack: () => void;
  navigation?: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

const NetworkScreen: React.FC<Props> = ({ onBack, navigation }) => {
  const { theme } = useTheme();
  const { selectedNetwork, setNetwork, getNetworkConfig } = useNetwork();
  const styles = createNetworkScreenStyles(theme);

  const networks = [
    { id: 'mainnet' as const, name: 'Mainnet' },
    { id: 'testnet' as const, name: 'Testnet' },
    { id: 'devnet' as const, name: 'Devnet' },
  ];

  const handleNetworkSelect = async (networkId: 'mainnet' | 'testnet' | 'devnet'): Promise<void> => {
    await setNetwork(networkId);
    // Automatically navigate back to HomeScreen after network selection
    if (navigation) {
      navigation.navigate('Home');
    } else {
      onBack(); // Fallback to onBack if navigation is not available
    }
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <BackIcon size={24} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Network</Text>
      </View>

      {/* Network Options */}
      <View style={styles.content}>
        {networks.map((network) => {
          const isSelected = selectedNetwork === network.id;
          return (
            <TouchableOpacity
              key={network.id}
              style={[
                styles.networkItem,
                isSelected && styles.selectedNetworkItem
              ]}
              onPress={() => handleNetworkSelect(network.id)}
            >
              <Text style={[
                styles.networkName,
                isSelected && styles.selectedNetworkName
              ]}>
                {network.name}
              </Text>

              <View style={[
                styles.checkIcon,
                !isSelected && styles.hiddenCheck
              ]}>
                <CheckIcon
                  size={24}
                  color={isSelected ? "#4ade80" : "transparent"}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default NetworkScreen;
