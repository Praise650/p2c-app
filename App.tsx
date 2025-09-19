import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, Image } from 'react-native';
import { createAppStyles } from './src/styles/App.styles';
import HomeScreen from './src/screens/HomeScreen';
import EarnScreen from './src/screens/EarnScreen';
import NFTsScreen from './src/screens/NFTsScreen';
import AppsScreen from './src/screens/AppsScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { HomeIcon, EarnIcon, NFTsIcon, AppsIcon, ActivityIcon, SettingsIcon } from './src/components/icons';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { WalletProvider, useWallet } from './src/context/WalletContext';
import { NetworkProvider, useNetwork } from './src/context/NetworkContext';
import LoadingScreen from './src/components/LoadingScreen';
import Svg, { Path, G } from 'react-native-svg';

// Social Login Icons
interface IconProps {
  size?: number;
  color?: string;
}

const GoogleIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </Svg>
);

const AppleIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill={color}/>
  </Svg>
);

function AppContent() {
  const { theme } = useTheme();
  const {
    hasWallet,
    walletAddress,
    balances,
    recentTxs,
    createWallet,
    importWallet,
    isLoading,
    error
  } = useWallet();
  const { selectedNetwork, networkConfig } = useNetwork();
  const styles = createAppStyles(theme);
  const [activeTab, setActiveTab] = useState('Home');
  const [tabBarOpacity] = useState(new Animated.Value(0));
  const [pressedTab, setPressedTab] = useState<string | null>(null);

  useEffect(() => {
    if (hasWallet) {
      Animated.timing(tabBarOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [hasWallet, tabBarOpacity]);

  const handleTabPress = (tabKey: string) => {
    setActiveTab(tabKey);
    // Add a subtle scale animation
    setPressedTab(tabKey);
    setTimeout(() => setPressedTab(null), 150);
  };



  const handleCreateWallet = async () => {
    try {
      await createWallet();
      // Wallet created successfully
      console.log('Wallet created successfully');
      // You might want to show the mnemonic to the user here
    } catch (error) {
      console.error('Failed to create wallet:', error);
      // Handle error (show alert, etc.)
    }
  };

  const handleImportWallet = async () => {
    // For now, we'll use a placeholder mnemonic
    // In production, you'd show an input dialog for the user to enter their mnemonic
    const testMnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";

    try {
      await importWallet(testMnemonic);
      console.log('Wallet imported successfully');
    } catch (error) {
      console.error('Failed to import wallet:', error);
      // Handle error
    }
  };

  const handleGoogleLogin = async () => {
    // TODO: Implement Google OAuth login
    // This would integrate with Google Sign-In and then create/import wallet
    console.log('Google login pressed');
    // For now, create a wallet as placeholder
    await handleCreateWallet();
  };

  const handleAppleLogin = async () => {
    // TODO: Implement Apple Sign-In
    // This would integrate with Apple Sign-In and then create/import wallet
    console.log('Apple login pressed');
    // For now, create a wallet as placeholder
    await handleCreateWallet();
  };



  const renderContent = () => {
    if (isLoading) {
      return <LoadingScreen />;
    }

    if (!hasWallet) {
      return (
        <View style={styles.onboardContainer}>
          <Text style={[styles.onboardTitle, { color: theme.contentPrimary }]}>Welcome to Red Envelope</Text>

          {/* Wallet Creation Buttons */}
          <TouchableOpacity style={[styles.onboardButton, { backgroundColor: theme.actionPrimary }]} onPress={handleCreateWallet}>
            <Text style={[styles.onboardButtonText, { color: theme.contentInversePrimary }]}>Create Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.onboardButtonSecondary, { borderColor: theme.borderWeak }]} onPress={handleImportWallet}>
            <Text style={[styles.onboardButtonSecondaryText, { color: theme.contentSecondary }]}>Import Wallet</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={[styles.dividerLine, { backgroundColor: theme.borderWeak }]} />
            <Text style={[styles.dividerText, { color: theme.contentSecondary }]}>or</Text>
            <View style={[styles.dividerLine, { backgroundColor: theme.borderWeak }]} />
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={handleGoogleLogin}>
            <GoogleIcon size={20} />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.appleButton]} onPress={handleAppleLogin}>
            <AppleIcon size={20} color="#ffffff" />
            <Text style={[styles.socialButtonText, { color: '#ffffff' }]}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Earn':
        return <EarnScreen />;
      case 'NFTs':
        return <NFTsScreen />;
      case 'Apps':
        return <AppsScreen />;
      case 'Activity':
        return <ActivityScreen />;
      case 'Settings':
        return <SettingsScreen onNavigateToHome={() => setActiveTab('Home')} />;
      default:
        return <HomeScreen />;
    }
  };

  const renderTabBar = () => {
    if (!hasWallet) return null;

    const tabs = [
      { key: 'Home', icon: HomeIcon, label: 'Home' },
      { key: 'Earn', icon: EarnIcon, label: 'Earn' },
      { key: 'NFTs', icon: NFTsIcon, label: 'NFTs' },
      { key: 'Apps', icon: AppsIcon, label: 'Apps' },
      { key: 'Activity', icon: ActivityIcon, label: 'Activity' },
      { key: 'Settings', icon: SettingsIcon, label: 'Settings' },
    ];

    return (
      <Animated.View style={[styles.tabBar, {
        opacity: tabBarOpacity,
        backgroundColor: theme.backgroundTabBar,
        borderTopColor: theme.borderWeak
      }]}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.key;
          const isPressed = pressedTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, isActive && styles.tabActive]}
              onPress={() => handleTabPress(tab.key)}
            >
              <Animated.View
                style={[
                  styles.tabContent,
                  isActive && [styles.tabContentActive, { backgroundColor: theme.backgroundPrimary }],
                  {
                    transform: [{ scale: isPressed ? 0.95 : 1 }]
                  }
                ]}
              >
                <IconComponent
                  size={20}
                  color={isActive ? theme.contentPrimary : theme.contentSecondary}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    );
  };

    return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      {renderContent()}
      <View style={styles.tabBarContainer}>
        {renderTabBar()}
      </View>
      <StatusBar style={theme.statusBarStyle} />
    </View>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <NetworkProvider>
        <WalletProvider>
          <AppContent />
        </WalletProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}
