import React from 'react';
import { View, Text, TouchableOpacity, Linking, Dimensions, ScrollView } from 'react-native';
import Svg, { G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useTheme } from '../theme/ThemeContext';
import { createConfirmationScreenStyles } from '../styles/ConfirmationScreen.styles';
import { NavigationProps } from '../../types';

type RouteParams = {
  durationMs?: number;
  amount?: number;
  token?: string;
  to?: string;
  gas?: number;
  total?: number;
  txHash?: string;
  completedAt?: string;
};

type Props = {
  route?: { params?: RouteParams };
  navigation?: NavigationProps['navigation'];
};

const ConfirmationScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const isSmallScreen = screenWidth < 375;
  const isLargeScreen = screenWidth > 414;
  const isTablet = screenWidth > 768;

  const styles = createConfirmationScreenStyles(theme, {
    screenWidth,
    screenHeight,
    isSmallScreen,
    isLargeScreen,
    isTablet
  });

  const {
    durationMs = 610,
    amount = 0,
    token = 'SUI',
    to = '',
    gas = 0,
    total = 0,
    txHash = '',
    completedAt = new Date().toISOString(),
  } = route?.params || {};

  const openExplorer = (): void => {
    const url = `https://explorer.test/tx/${txHash || 'mockhash'}`;
    Linking.openURL(url).catch(() => {});
  };

  const formatUtc = (iso: string): string => {
    try {
      const d = new Date(iso);
      return d.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC',
      });
    } catch (_) {
      return iso;
    }
  };

  // Calculate responsive icon size
  const iconSize = isTablet ? 120 : isSmallScreen ? 80 : 96;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={{ width: isTablet ? 80 : 60 }} />
        <Text style={[styles.headerTitle, { color: theme.contentSecondary }]}>Confirmation</Text>
        <View style={{ width: isTablet ? 80 : 60, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Text style={[styles.doneText, { color: theme.actionPrimary }]}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statusIconWrapper}>
        <Svg width={iconSize} height={iconSize} viewBox="0 0 96 96">
          <Defs>
            <LinearGradient id="coinShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#34d399" />
              <Stop offset="100%" stopColor="#22c55e" />
            </LinearGradient>
          </Defs>
          {/* bottom offset to simulate stacked coin */}
          <G opacity="0.35" transform="translate(6,8)">
            <Circle cx="42" cy="42" r="42" fill="#0b3b2b" />
          </G>
          {/* main coin */}
          <Circle cx="48" cy="46" r="42" fill="url(#coinShade)" stroke="#0f5132" strokeWidth="2" />
          {/* check mark */}
          <Path d="M33 47.5l10 10 20-22" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          {/* inner shadow rim */}
          <Circle cx="48" cy="46" r="41" stroke="#16a34a" strokeOpacity="0.4" strokeWidth="2" fill="none" />
        </Svg>
      </View>
      <Text style={[styles.successTitle, { color: theme.contentPrimary }]}>Successfully sent</Text>
      <Text style={[styles.durationText, { color: theme.contentSecondary }]}>in only {(durationMs/1000).toFixed(2)} secs</Text>

      <View style={[styles.card, { backgroundColor: theme.backgroundInverse }] }>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.contentSecondary }]}>Completed (UTC)</Text>
          <Text style={[styles.value, { color: theme.contentPrimary }]}>{formatUtc(completedAt)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.contentSecondary }]}>Sent</Text>
          <Text style={[styles.value, { color: theme.contentPrimary }]}>{amount} {token}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.contentSecondary }]}>To</Text>
          <Text style={[styles.value, { color: theme.contentPrimary }]}>{to.length > 10 ? `${to.substring(0, 6)}...${to.substring(to.length - 4)}` : to}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.contentSecondary }]}>Gas</Text>
          <Text style={[styles.value, { color: theme.contentPrimary }]}>{gas} {token}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.contentSecondary }]}>Total</Text>
          <Text style={[styles.totalValue, { color: theme.contentPrimary }]}>{amount} {token}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.explorerButton, { backgroundColor: theme.actionSecondary }] } onPress={openExplorer}>
          <Text style={[styles.explorerText, { color: theme.contentPrimary }]}>View on explorer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConfirmationScreen;


