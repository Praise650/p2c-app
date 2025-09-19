import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createSendScreenStyles } from '../styles/SendScreen.styles';
import { ArrowLeftIcon } from '../components/icons';
import { NavigationProps } from '../../types';
// import SendMethodModal from '../components/SendMethodModal';

// Type definitions
interface Props {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
    reset: (params: any) => void;
  };
}

const SendScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const { balances } = useWallet();
  const styles = createSendScreenStyles(theme);

  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('AQY');
  const [isLoading, setIsLoading] = useState(false);
  const [memo, setMemo] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(false);
  // const [showSendMethodModal, setShowSendMethodModal] = useState(false);

  const handleSend = async () => {
    if (!recipient || !amount) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (!validateAddress(recipient)) {
      Alert.alert('Error', 'Invalid recipient address');
      return;
    }

    const tokenBalance = balances[selectedToken];
    const amountInDecimals = parseFloat(amount) * Math.pow(10, tokenBalance.decimals);
    const availableBalance = parseFloat(tokenBalance.balance);

    if (amountInDecimals > availableBalance) {
      Alert.alert('Error', 'Insufficient balance');
      return;
    }

    setIsLoading(true);

    try {
      // Mock transaction to drive the Confirmation screen
      const start = Date.now();
      await new Promise(resolve => setTimeout(resolve, 600));
      const durationMs = Date.now() - start;
      const gas = 0.0005;
      const amt = Number(amount);
      const payload = {
        durationMs,
        amount: isNaN(amt) ? 0 : amt,
        token: selectedToken,
        to: `${recipient.substring(0, 6)}...${recipient.substring(recipient.length - 4)}`,
        gas,
        total: (isNaN(amt) ? 0 : amt) + gas,
        txHash: '0xMOCK123',
        completedAt: new Date().toISOString(),
      };

      // Reset inputs before navigating
      setRecipient('');
      setAmount('');
      setMemo('');

      navigation?.navigate('Confirmation', payload);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      Alert.alert('Error', 'Failed to send transaction: ' + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  const validateAddress = (address: string): boolean => {
    // Basic validation for Sui/AQY address format
    return address.startsWith('0x') && address.length === 66;
  };

  const formatBalance = (balance: string, decimals: number): string => {
    const num = parseFloat(balance) / Math.pow(10, decimals);
    return num.toFixed(6);
  };

  const getMaxAmount = (): string => {
    const tokenBalance = balances[selectedToken];
    return formatBalance(tokenBalance.balance, tokenBalance.decimals);
  };

  const handleMaxPress = () => {
    setAmount(getMaxAmount());
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
        <Text style={[styles.title, { color: theme.contentPrimary }]}>Send</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {/* Token Selector */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Token</Text>
          <View style={styles.tokenSelector}>
            {Object.keys(balances).map((token) => (
              <TouchableOpacity
                key={token}
                style={[
                  styles.tokenOption,
                  { backgroundColor: selectedToken === token ? theme.actionPrimary : theme.actionSecondary }
                ]}
                onPress={() => setSelectedToken(token)}
              >
                <Text style={[
                  styles.tokenText,
                  { color: selectedToken === token ? theme.contentInversePrimary : theme.contentPrimary }
                ]}>
                  {token}
                </Text>
                <Text style={[
                  styles.tokenBalance,
                  { color: selectedToken === token ? theme.contentInversePrimary : theme.contentSecondary }
                ]}>
                  {formatBalance(balances[token].balance, balances[token].decimals)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recipient Address */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Recipient Address</Text>
          <TextInput
            style={[styles.input, { backgroundColor: theme.actionSecondary, color: theme.contentPrimary }]}
            value={recipient}
            onChangeText={setRecipient}
            placeholder="0x..."
            placeholderTextColor={theme.contentSecondary}
            multiline
          />
        </View>

        {/* Amount */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <View style={styles.amountHeader}>
            <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Amount</Text>
            <TouchableOpacity onPress={handleMaxPress}>
              <Text style={[styles.maxButton, { color: theme.actionPrimary }]}>MAX</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={[styles.input, { backgroundColor: theme.actionSecondary, color: theme.contentPrimary }]}
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor={theme.contentSecondary}
            keyboardType="numeric"
          />
          <Text style={[styles.balanceText, { color: theme.contentSecondary }]}>
            Available: {getMaxAmount()} {selectedToken}
          </Text>
        </View>

        {/* Memo (Optional) */}
        <View style={[styles.section, { backgroundColor: theme.backgroundInverse }]}>
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Memo (Optional)</Text>
          <TextInput
            style={[styles.input, { backgroundColor: theme.actionSecondary, color: theme.contentPrimary }]}
            value={memo}
            onChangeText={setMemo}
            placeholder="Add a note..."
            placeholderTextColor={theme.contentSecondary}
          />
        </View>

        {/* Send Button */}
        <TouchableOpacity
          style={[
            styles.sendButton,
            {
              backgroundColor: theme.actionPrimary,
              opacity: isLoading || !recipient || !amount ? 0.5 : 1
            }
          ]}
          onPress={handleSend}
          disabled={isLoading || !recipient || !amount}
        >
          {isLoading ? (
            <ActivityIndicator color={theme.contentInversePrimary} />
          ) : (
            <Text style={[styles.sendButtonText, { color: theme.contentInversePrimary }]}>
              Send {amount} {selectedToken}
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
};


export default SendScreen;
