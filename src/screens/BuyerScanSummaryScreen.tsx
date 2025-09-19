import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createBuyerScanSummaryStyles } from '../styles/BuyerScanSummaryScreen.styles';
import { verifyEnvelope } from '../lib/f2c/sign';
import { submitF2C } from '../services/F2CService';
import { F2CEnvelope, NavigationProps } from '../../types';

type RouteParams = { envelope: F2CEnvelope };
type Props = { route?: { params?: RouteParams }, navigation?: NavigationProps['navigation'] };

const BuyerScanSummaryScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const styles = createBuyerScanSummaryStyles(theme);
  const { envelope } = (route?.params as RouteParams) || ({} as RouteParams);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const expired = useMemo(() => {
    if (!envelope?.payload?.expiresAt) return true;
    return Date.now() > Number(envelope.payload.expiresAt);
  }, [envelope]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        if (!envelope) {
          throw new Error('Missing envelope');
        }
        const ok = await verifyEnvelope(envelope!);
        if (!mounted) return;
        setIsValid(ok && !expired);
      } catch (e) {
        if (!mounted) return;
        const message = e instanceof Error ? e.message : 'Validation failed';
        setError(message);
        setIsValid(false);
      }
    })();
    return () => { mounted = false; };
  }, [envelope, expired]);

  const onPay = async () => {
    if (!isValid) {
      Alert.alert('Invalid QR', 'The QR code is invalid or expired.');
      return;
    }
    const res = await submitF2C(envelope);
    if (!res.success) {
      Alert.alert('Payment Failed', res.error || 'Unknown error');
      return;
    }
    navigation?.navigate?.('Confirmation', {
      status: 'success',
      amount: '0.00',
      token: 'AQY',
      to: envelope?.payload?.seller,
      gas: '$0.00',
      total: '$0.00',
      timestamp: Date.now(),
      explorerUrl: res.explorerUrl,
      txId: res.txId,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }] }>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.backButton, { backgroundColor: theme.backgroundInverse }]} onPress={() => navigation?.goBack?.()}>
          <Text style={[styles.backText, { color: theme.contentPrimary }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.contentPrimary }]}>Confirm Purchase</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={[styles.card, { backgroundColor: theme.backgroundInverse }]}>
        <Text style={[styles.label, { color: theme.contentSecondary }]}>Seller</Text>
        <Text style={[styles.value, { color: theme.contentPrimary }]} numberOfLines={1}>
          {envelope?.payload?.seller || 'Unknown'}
        </Text>

        <Text style={[styles.label, { color: theme.contentSecondary }]}>Scheme</Text>
        <Text style={[styles.value, { color: theme.contentPrimary }]}>
          {envelope?.payload?.schemeId || '—'}
        </Text>

        <Text style={[styles.label, { color: theme.contentSecondary }]}>Reward %</Text>
        <Text style={[styles.value, { color: theme.contentPrimary }]}>
          {envelope?.payload?.rewardPct ?? '—'}%
        </Text>

        <Text style={[styles.label, { color: theme.contentSecondary }]}>Valid Until</Text>
        <Text style={[styles.value, { color: theme.contentPrimary }]}>
          {envelope?.payload?.expiresAt ? new Date(Number(envelope.payload.expiresAt)).toLocaleString() : '—'}
        </Text>

        {(() => {
          const successColor: string = ((theme as unknown as { success?: string }).success) ?? '#22c55e';
          return (
            <Text style={[styles.status, { color: isValid ? successColor : theme.actionPrimary }]}>
              {isValid === null ? 'Validating…' : isValid ? 'Valid' : (error || expired ? 'Expired/Invalid' : 'Invalid')}
            </Text>
          );
        })()}
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={[styles.payButton, { backgroundColor: isValid ? theme.actionPrimary : theme.actionSecondary }]}
          onPress={onPay} disabled={!isValid}>
          <Text style={[styles.payText, { color: isValid ? theme.contentInversePrimary : theme.contentPrimary }]}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyerScanSummaryScreen;


