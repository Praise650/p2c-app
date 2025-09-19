import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createManageAccountsScreenStyles } from '../styles/ManageAccountsScreen.styles';
import RemoveAccountScreen from './RemoveAccountScreen';
import RenameAccountScreen from './RenameAccountScreen';
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

const ArrowIcon: React.FC<IconProps> = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill={color}/>
  </Svg>
);

const EditIcon: React.FC<IconProps> = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill={color}/>
  </Svg>
);

const DeleteIcon: React.FC<IconProps> = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill={color}/>
  </Svg>
);

type Props = { onBack: () => void };

const ManageAccountsScreen: React.FC<Props> = ({ onBack }) => {
  const { theme } = useTheme();
  const { walletAddress } = useWallet();
  const styles = createManageAccountsScreenStyles(theme);
  const [accountExpanded, setAccountExpanded] = React.useState(false);
  const [showRemoveAccount, setShowRemoveAccount] = React.useState(false);
  const [showRenameAccount, setShowRenameAccount] = React.useState(false);

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

  const handleRemoveAccount = () => {
    setShowRemoveAccount(true);
  };

  const handleRenameAccount = () => {
    setShowRenameAccount(true);
  };


  if (showRemoveAccount) {
    return <RemoveAccountScreen onBack={() => setShowRemoveAccount(false)} />;
  }

  if (showRenameAccount) {
    return <RenameAccountScreen onBack={() => setShowRenameAccount(false)} />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <BackIcon size={24} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Accounts</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Google Section */}
        <View style={styles.googleSection}>
          <View style={styles.googleHeader}>
            <View style={styles.googleIcon}>
              <GoogleGIcon size={24} />
            </View>
            <View style={styles.googleInfo}>
              <Text style={styles.googleTitle}>Google</Text>
              <Text style={styles.googleEmail}>bearbeast131@gmail.com</Text>
            </View>
          </View>

          {/* Account Card */}
          <View style={styles.accountCard}>
            <View style={styles.accountHeader}>
              <View style={styles.accountInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>B</Text>
                </View>
                <View style={styles.accountDetails}>
                  <Text style={styles.accountName}>bearbeast131</Text>
                  <Text style={styles.accountEmail}>bearbeast131@gmail.com</Text>
                  <Text style={styles.accountAddress}>
                    {formatAddress(walletAddress)}
                  </Text>
                </View>
              </View>
              <View style={styles.accountActions}>
                <TouchableOpacity onPress={handleCopyAddress}>
                  <CopyIcon size={20} color={theme.contentSecondary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAccountExpanded(!accountExpanded)}>
                  <View style={[
                    styles.expandArrow,
                    accountExpanded && styles.expandArrowRotated
                  ]}>
                    <ArrowIcon size={20} color={theme.contentSecondary} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Action Buttons */}
            {accountExpanded && (
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton} onPress={handleRenameAccount}>
                  <EditIcon size={20} color={theme.contentPrimary} />
                  <Text style={styles.actionButtonText}>Rename account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleRemoveAccount}>
                  <DeleteIcon size={20} color="#ff4444" />
                  <Text style={[styles.actionButtonText, { color: '#ff4444' }]}>Remove account</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Add Account Button */}
      <View style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity style={styles.addAccountButton}>
          <Text style={styles.addAccountText}>Add account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageAccountsScreen;
