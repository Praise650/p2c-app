import React from 'react';
import {
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createLoadingScreenStyles } from '../styles/LoadingScreen.styles';

const LoadingScreen = () => {
  const { theme } = useTheme();
  const styles = createLoadingScreenStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/red-wallet-logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ActivityIndicator
          size="large"
          color={theme.backgroundSecondary}
          style={styles.loadingIndicator}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;
