import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createSwapScreenStyles } from '../styles/SwapScreen.styles';
import { ArrowLeftIcon } from '../components/icons';
import Svg, { Path } from 'react-native-svg';
import { NavigationProps } from '../../types';

// Down Arrow Icon for swap direction
const DownArrowIcon = ({ size = 24, color = "#666" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

type TokenOption = {
  id: string;
  symbol: string;
  name: string;
  balance: string;
  usdValue: string;
};

// Mock data for available tokens
const availableTokens: TokenOption[] = [
  { id: 'sui', symbol: 'SUI', name: 'Sui', balance: '0.0', usdValue: '3.45' },
  { id: 'usdc', symbol: 'USDC', name: 'USD Coin', balance: '0.00', usdValue: '0.00' },
  { id: 'aqy', symbol: 'AQY', name: 'AQY Token', balance: '100.00', usdValue: '150.00' },
];

type Props = { navigation?: NavigationProps['navigation'] };

const SwapScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const styles = createSwapScreenStyles(theme);

  const [fromToken, setFromToken] = useState<TokenOption>(availableTokens[0]); // Default to SUI
  const [toToken, setToToken] = useState<TokenOption | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [usdValue, setUsdValue] = useState<string>('$0.00');
  const [showFromTokenSelector, setShowFromTokenSelector] = useState<boolean>(false);
  const [showToTokenSelector, setShowToTokenSelector] = useState<boolean>(false);

  const handleAmountChange = (value: string): void => {
    setAmount(value);
    // Calculate USD value (mock calculation)
    const numericValue = parseFloat(value) || 0;
    const usdAmount = numericValue * 3.43; // Mock rate
    setUsdValue(`$${usdAmount.toFixed(2)}`);
  };

  const handlePercentageSelect = (percentage: number): void => {
    const balance = parseFloat(fromToken.balance);
    const amount = (balance * percentage / 100).toFixed(2);
    setAmount(amount);
    handleAmountChange(amount);
  };

  const handleSwap = (): void => {
    if (!toToken) {
      Alert.alert('Error', 'Please select a token to swap to');
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
    if (parseFloat(amount) > parseFloat(fromToken.balance)) {
      Alert.alert('Error', 'Insufficient balance');
      return;
    }

    Alert.alert(
      'Swap Confirmation',
      `Swap ${amount} ${fromToken.symbol} to ${toToken.symbol}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            // Mock swap execution
            Alert.alert('Success', 'Swap completed successfully!');
            navigation?.goBack();
          }
        }
      ]
    );
  };

  const swapTokens = (): void => {
    if (toToken) {
      const temp: TokenOption = fromToken;
      setFromToken(toToken);
      setToToken(temp);
      setAmount('');
      setUsdValue('$0.00');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: theme.backgroundInverse }]}
          onPress={() => navigation?.goBack()}
        >
          <ArrowLeftIcon size={20} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.contentPrimary }]}>Swap</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.mainContent}>
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* From Token Section */}
          <View style={styles.section}>
            <View style={styles.tokenRow}>
              <TouchableOpacity
                style={[styles.tokenSelector, { backgroundColor: theme.backgroundInverse }]}
                onPress={() => setShowFromTokenSelector(true)}
              >
                <View style={styles.tokenIcon}>
                  <Text style={styles.tokenIconText}>
                    {fromToken.symbol.charAt(0)}
                  </Text>
                </View>
                <Text style={[styles.tokenSymbol, { color: theme.contentPrimary }]}>
                  {fromToken.symbol}
                </Text>
                <Text style={[styles.arrowIcon, { color: theme.contentSecondary }]}>›</Text>
              </TouchableOpacity>

              <View style={styles.balanceInfo}>
                <Text style={[styles.balanceAmount, { color: theme.contentPrimary }]}>
                  {fromToken.balance}
                </Text>
              </View>
            </View>

            <View style={styles.amountSection}>
              <TextInput
                style={[styles.amountInput, { color: theme.contentPrimary }]}
                value={amount}
                onChangeText={handleAmountChange}
                placeholder="0"
                placeholderTextColor={theme.contentSecondary}
                keyboardType="numeric"
              />
              <Text style={[styles.usdValue, { color: theme.contentSecondary }]}>
                {usdValue}
              </Text>
            </View>

            <View style={styles.percentageButtons}>
              <TouchableOpacity
                style={[styles.percentageButton, { backgroundColor: theme.actionSecondary }]}
                onPress={() => handlePercentageSelect(25)}
              >
                <Text style={[styles.percentageText, { color: theme.contentPrimary }]}>25%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.percentageButton, { backgroundColor: theme.actionSecondary }]}
                onPress={() => handlePercentageSelect(50)}
              >
                <Text style={[styles.percentageText, { color: theme.contentPrimary }]}>50%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.percentageButton, { backgroundColor: theme.actionSecondary }]}
                onPress={() => handlePercentageSelect(100)}
              >
                <Text style={[styles.percentageText, { color: theme.contentPrimary }]}>Max</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Swap Direction Button */}
          <View style={styles.swapDirectionContainer}>
            <TouchableOpacity
              style={[styles.swapDirectionButton, { backgroundColor: theme.backgroundInverse }]}
              onPress={swapTokens}
            >
              <DownArrowIcon size={24} color={theme.contentPrimary} />
            </TouchableOpacity>
          </View>

          {/* To Token Section */}
          <View style={styles.section}>
            <View style={styles.tokenRow}>
              <TouchableOpacity
                style={[styles.tokenSelector, { backgroundColor: theme.backgroundInverse }]}
                onPress={() => setShowToTokenSelector(true)}
              >
                {toToken && (
                  <View style={styles.tokenIcon}>
                    <Text style={styles.tokenIconText}>
                      {toToken.symbol.charAt(0)}
                    </Text>
                  </View>
                )}
                <Text style={[styles.tokenSymbol, { color: theme.contentPrimary }]}>
                  {toToken ? toToken.symbol : 'Select coin'}
                </Text>
                <Text style={[styles.arrowIcon, { color: theme.contentSecondary }]}>›</Text>
              </TouchableOpacity>

              <View style={styles.balanceInfo}>
                {toToken && (
                  <Text style={[styles.balanceAmount, { color: theme.contentPrimary }]}>
                    {toToken.balance}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Swap Settings and Button Container - Fixed at Bottom */}
        <View style={[styles.settingsContainer, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.slippageText, { color: theme.contentSecondary }]}>
            1% max slippage
          </Text>

          <TouchableOpacity style={styles.feesRow}>
            <Text style={[styles.feesLabel, { color: theme.contentPrimary }]}>Fees</Text>
            <View style={styles.feesValue}>
              <Text style={[styles.feesAmount, { color: theme.contentPrimary }]}>$0.00</Text>
              <Text style={[styles.feesArrow, { color: theme.contentSecondary }]}>›</Text>
            </View>
          </TouchableOpacity>

          {/* Swap Button */}
          <TouchableOpacity
            style={[
              styles.swapButton,
              {
                backgroundColor: toToken && amount ? theme.actionPrimary : theme.actionSecondary,
                opacity: toToken && amount ? 1 : 0.5
              }
            ]}
            onPress={handleSwap}
            disabled={!toToken || !amount}
          >
            <Text style={[
              styles.swapButtonText,
              { color: toToken && amount ? theme.contentInversePrimary : theme.contentSecondary }
            ]}>
              Swap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SwapScreen;
