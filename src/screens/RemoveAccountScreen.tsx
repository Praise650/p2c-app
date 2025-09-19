import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createRemoveAccountScreenStyles } from '../styles/RemoveAccountScreen.styles';
import * as Clipboard from 'expo-clipboard';
import Svg, { Path, G } from 'react-native-svg';

// Google G Icon Component
type GoogleGIconProps = { size?: number };

const GoogleGIcon: React.FC<GoogleGIconProps> = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </Svg>
);

// Icon Components
type IconProps = { size?: number; color?: string };

const BackIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);

const CopyIcon: React.FC<IconProps> = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill={color}/>
  </Svg>
);

const WarningIcon: React.FC<IconProps> = ({ size = 80, color = "#FFA500" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      fill={color}
      stroke="white"
      strokeWidth="2"
    />
  </Svg>
);

type Props = { onBack: () => void };

const RemoveAccountScreen: React.FC<Props> = ({ onBack }) => {
  const { theme } = useTheme();
  const { clearWallet, walletAddress } = useWallet();
  const styles = createRemoveAccountScreenStyles(theme);

  const formatAddress = (address: string | undefined | null): string => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleCopyAddress = async () => {
    if (walletAddress) {
      try {
        await Clipboard.setStringAsync(walletAddress);
        Alert.alert('Copied', 'Wallet address copied to clipboard');
      } catch (error) {
        Alert.alert('Error', 'Failed to copy address to clipboard');
      }
    }
  };

  const handleRemoveAccount = async () => {
    try {
      const result = await clearWallet();
      if (result.success) {
        // Account removed successfully, app will automatically go back to welcome screen
      } else {
        Alert.alert('Error', 'Failed to remove account: ' + result.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to remove account');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <BackIcon size={24} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Remove final account</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Warning Icon */}
        <View style={styles.warningIconContainer}>
          <WarningIcon size={80} color="#FFA500" />
        </View>

        {/* Confirmation Question */}
        <Text style={styles.confirmationQuestion}>Are you sure?</Text>

        {/* Warning Message */}
        <Text style={styles.warningMessage}>
          Are you sure you want to remove your final account? Doing so will log you out and require you to set up Slush again by importing, connecting, or adding accounts.
        </Text>

        {/* Account Card */}
        <View style={styles.accountCard}>
          <View style={styles.accountInfo}>
            <View style={styles.googleIconContainer}>
              <GoogleGIcon size={24} />
            </View>
            <View style={styles.accountDetails}>
              <Text style={styles.accountName}>bearbeast131</Text>
              <Text style={styles.accountEmail}>bearbeast131@gmail.com</Text>
              <Text style={styles.accountAddress}>
                {formatAddress(walletAddress)}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleCopyAddress}>
            <CopyIcon size={20} color={theme.contentSecondary} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Remove Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={handleRemoveAccount}>
          <Text style={styles.removeButtonText}>Remove & log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RemoveAccountScreen;
