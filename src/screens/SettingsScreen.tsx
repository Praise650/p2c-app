import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createSettingsScreenStyles } from '../styles/SettingsScreen.styles';
import Svg, { Path, G } from 'react-native-svg';
import NetworkScreen from './NetworkScreen';
import ThemeScreen from './ThemeScreen';
import ManageAccountsScreen from './ManageAccountsScreen';
import RenameAccountScreen from './RenameAccountScreen';
import RemoveAccountScreen from './RemoveAccountScreen';

// Google G Icon Component
const GoogleGIcon = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </Svg>
);

// Icon Components
const NetworkIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill={color}/>
  </Svg>
);

const ThemeIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill={color}/>
  </Svg>
);

const SoundIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill={color}/>
  </Svg>
);

const FAQIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill={color}/>
  </Svg>
);

const SupportIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill={color}/>
  </Svg>
);

const DiscordIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill={color}/>
  </Svg>
);

const TermsIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill={color}/>
  </Svg>
);

const CopyIcon = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill={color}/>
  </Svg>
);

const ArrowIcon = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill={color}/>
  </Svg>
);

const ExternalArrowIcon = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill={color}/>
  </Svg>
);

const LogoutIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill={color}/>
  </Svg>
);

const EditIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill={color}/>
  </Svg>
);

const DeleteIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill={color}/>
  </Svg>
);

interface Props {
  onNavigateToHome?: () => void;
}

const SettingsScreen: React.FC<Props> = ({ onNavigateToHome }) => {
  const { theme, isDarkTheme } = useTheme();
  const { clearWallet, walletAddress } = useWallet();
  const styles = createSettingsScreenStyles(theme);
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const [accountExpanded, setAccountExpanded] = React.useState(false);
  const [showNetworkScreen, setShowNetworkScreen] = React.useState(false);
  const [showThemeScreen, setShowThemeScreen] = React.useState(false);
  const [showManageAccounts, setShowManageAccounts] = React.useState(false);
  const [showRenameAccount, setShowRenameAccount] = React.useState(false);
  const [showRemoveAccount, setShowRemoveAccount] = React.useState(false);

  const formatAddress = (address: string | undefined | null): string => {
    if (!address) return 'No wallet';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleManageAccount = () => {
    setShowManageAccounts(true);
  };

  const handleRenameAccount = () => {
    setShowRenameAccount(true);
  };

  const handleRemoveAccount = () => {
    setShowRemoveAccount(true);
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

  const handleClearWallet = () => {
    Alert.alert(
      'Clear Wallet',
      'Are you sure you want to clear your wallet? This will log you out and you\'ll need to import or create a new wallet.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear Wallet',
          style: 'destructive',
          onPress: async () => {
            const result = await clearWallet();
            if (result.success) {
              // Wallet cleared successfully, app will automatically go back to welcome screen
            } else {
              Alert.alert('Error', 'Failed to clear wallet: ' + result.error);
            }
          },
        },
      ]
    );
  };

  if (showNetworkScreen) {
    return <NetworkScreen
      onBack={() => setShowNetworkScreen(false)}
      navigation={{
        navigate: (screen: string) => {
          if (screen === 'Home' && onNavigateToHome) {
            onNavigateToHome();
          }
          setShowNetworkScreen(false);
        },
        goBack: () => setShowNetworkScreen(false)
      }}
    />;
  }

  if (showThemeScreen) {
    return <ThemeScreen onBack={() => setShowThemeScreen(false)} />;
  }


  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Current Account Section */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Current Account</Text>

          <TouchableOpacity style={[styles.accountCard, { backgroundColor: theme.backgroundSecondary }]}>
            <View style={styles.accountInfo}>
              <GoogleGIcon size={24} />
              <View style={styles.accountDetails}>
                <Text style={[styles.nameText, { color: theme.contentPrimary }]}>bearbeast131</Text>
                <Text style={[styles.emailText, { color: theme.contentPrimary }]}>bearbeast131@gmail.com</Text>
                <Text style={[styles.addressText, { color: theme.contentSecondary }]}>
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
                  <ArrowIcon
                    size={20}
                    color={theme.contentSecondary}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Expandable Account Actions */}
          {accountExpanded && (
            <View style={styles.accountActionsContainer}>
              <TouchableOpacity
                style={[styles.accountActionButton, { backgroundColor: theme.backgroundSecondary }]}
                onPress={handleRenameAccount}
              >
                <EditIcon size={20} color={theme.contentPrimary} />
                <Text style={[styles.accountActionText, { color: theme.contentPrimary }]}>Rename account</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.accountActionButton, { backgroundColor: theme.backgroundSecondary }]}
                onPress={handleRemoveAccount}
              >
                <DeleteIcon size={20} color="#ff4444" />
                <Text style={[styles.accountActionText, { color: '#ff4444' }]}>Remove account</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={[styles.manageButton, { backgroundColor: theme.backgroundAccent }]}
            onPress={handleManageAccount}
          >
            <Text style={[styles.manageButtonText, { color: theme.contentPrimary }]}>Manage account</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Settings</Text>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowNetworkScreen(true)}
          >
            <View style={styles.settingLeft}>
              <NetworkIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Network</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={[styles.settingValue, { color: theme.contentSecondary }]}>Mainnet</Text>
              <ArrowIcon size={20} color={theme.contentSecondary} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowThemeScreen(true)}
          >
            <View style={styles.settingLeft}>
              <ThemeIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Theme</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={[styles.settingValue, { color: theme.contentSecondary }]}>
                Red Envelope ({isDarkTheme ? 'dark' : 'light'})
              </Text>
              <ArrowIcon size={20} color={theme.contentSecondary} />
            </View>
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <SoundIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Sound</Text>
            </View>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: theme.borderWeak, true: theme.backgroundAccent }}
              thumbColor={soundEnabled ? theme.contentPrimary : theme.contentSecondary}
            />
          </View>

          <TouchableOpacity style={styles.settingItem} onPress={handleClearWallet}>
            <View style={styles.settingLeft}>
              <LogoutIcon size={24} color="#ff4444" />
              <Text style={[styles.settingLabel, { color: '#ff4444' }]}>Clear Wallet</Text>
            </View>
            <ArrowIcon size={20} color="#ff4444" />
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <View style={styles.aboutHeader}>
            <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>About</Text>
            <Text style={[styles.versionText, { color: theme.contentSecondary }]}>e4a49d9</Text>
          </View>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <FAQIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>FAQ</Text>
            </View>
            <ExternalArrowIcon size={20} color={theme.contentSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <SupportIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Support</Text>
            </View>
            <ExternalArrowIcon size={20} color={theme.contentSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <DiscordIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Discord</Text>
            </View>
            <ExternalArrowIcon size={20} color={theme.contentSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <TermsIcon size={24} color={theme.contentPrimary} />
              <Text style={[styles.settingLabel, { color: theme.contentPrimary }]}>Terms of service</Text>
            </View>
            <ExternalArrowIcon size={20} color={theme.contentSecondary} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Manage Accounts Screen Modal */}
      {showManageAccounts && (
        <View style={styles.modalOverlay}>
          <ManageAccountsScreen onBack={() => setShowManageAccounts(false)} />
        </View>
      )}

      {/* Rename Account Screen Modal */}
      {showRenameAccount && (
        <View style={styles.modalOverlay}>
          <RenameAccountScreen onBack={() => setShowRenameAccount(false)} />
        </View>
      )}

      {/* Remove Account Screen Modal */}
      {showRemoveAccount && (
        <View style={styles.modalOverlay}>
          <RemoveAccountScreen onBack={() => setShowRemoveAccount(false)} />
        </View>
      )}
    </View>
  );
};


export default SettingsScreen;
