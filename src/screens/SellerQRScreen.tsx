import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import QRCode from 'react-native-qrcode-svg';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { buildCanonicalPayload } from '../lib/f2c/payload';
import { signEnvelope, randomPrivateKeySafe } from '../lib/f2c/sign';
import { createSellerQRScreenStyles } from '../styles/SellerQRScreen.styles';
import { NavigationProps, F2CEnvelope } from '../../types';

const SCHEMES = [
  { id: 'SCHEME_SIMPLE_PERCENT', label: 'Simple buyer %' },
  { id: 'SCHEME_BUYER_PLUS_OTHERS', label: 'Buyer + Others' },
  { id: 'SCHEME_BUYER_PLUS_PREDEFINED', label: 'Buyer + Predefined' },
];

type Props = { navigation?: NavigationProps['navigation'] };

const SellerQRScreen: React.FC<Props> = ({ navigation }) => {
  const { theme, rewardPercentage, updateRewardPercentage, rewardToColor } = useTheme();
  const { walletAddress } = useWallet();
  const styles = createSellerQRScreenStyles(theme);

  const [schemeId, setSchemeId] = useState(SCHEMES[0].id);
  const [localReward, setLocalReward] = useState(rewardPercentage);

  const expiresAt = useMemo(() => Date.now() + 10 * 60 * 1000, [schemeId, rewardPercentage]);
  const nonce = useMemo(() => Math.random().toString(36).slice(2, 10), [schemeId]); // Shorter nonce

  const payload = useMemo(() => buildCanonicalPayload({
    chainId: 'aqy-devnet',
    seller: walletAddress,
    schemeId,
    rewardPct: rewardPercentage,
    metadata: {},
    expiresAt,
    nonce,
  }), [walletAddress, schemeId, rewardPercentage, expiresAt, nonce]);

  const [envelope, setEnvelope] = useState<F2CEnvelope | null>(null);

  const handleSign = async () => {
    try {
      const priv = randomPrivateKeySafe();
      const signed = await signEnvelope(payload, priv);
      setEnvelope(signed);
    } catch (e) {
      console.warn('Sign failed', e);
    }
  };

  // Live feedback while sliding, commit to theme on release
  const bg = rewardToColor(localReward);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }] }>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.backButton, { backgroundColor: theme.backgroundInverse }]} onPress={() => navigation?.goBack?.()}>
          <Text style={[styles.backText, { color: theme.contentPrimary }]}>Done</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.contentPrimary }]}>Seller QR</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { backgroundColor: bg }]} />

        <View style={[styles.card, { backgroundColor: theme.backgroundInverse }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Reward Percentage</Text>
            <Text style={[styles.sectionSubtitle, { color: theme.contentSecondary }]}>Set the reward percentage for buyers</Text>
          </View>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderRow}>
              <Text style={[styles.sliderValue, { color: theme.contentPrimary }]}>{rewardPercentage}%</Text>
              <View style={styles.sliderLabels}>
                <Text style={[styles.sliderLabel, { color: theme.contentSecondary }]}>0%</Text>
                <Text style={[styles.sliderLabel, { color: theme.contentSecondary }]}>100%</Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor={theme.actionPrimary}
              maximumTrackTintColor={theme.backgroundPrimary}
              thumbTintColor={theme.actionPrimary}
              value={localReward}
              onValueChange={setLocalReward}
              onSlidingComplete={(val) => updateRewardPercentage(val)}
            />
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: theme.backgroundInverse }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Reward Scheme</Text>
            <Text style={[styles.sectionSubtitle, { color: theme.contentSecondary }]}>Choose how rewards are distributed</Text>
          </View>
          <View style={styles.schemeRow}>
            {SCHEMES.map(s => {
              const isSelected = schemeId === s.id;
              return (
                <TouchableOpacity
                  key={s.id}
                  onPress={() => setSchemeId(s.id)}
                  style={[
                    styles.schemeChip,
                    { backgroundColor: isSelected ? theme.actionPrimary : theme.backgroundPrimary },
                    isSelected && styles.schemeChipSelected
                  ]}
                >
                  <Text style={[
                    styles.schemeChipText,
                    { color: isSelected ? theme.contentInversePrimary : theme.contentPrimary }
                  ]}>
                    {s.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity onPress={handleSign} style={[styles.primaryButton, { backgroundColor: theme.actionPrimary }]}>
          <Text style={[styles.primaryButtonText, { color: theme.contentInversePrimary }]}>{envelope ? 'Re-sign' : 'Sign & Generate QR'}</Text>
        </TouchableOpacity>

        {envelope && (
          <View style={[styles.card, { backgroundColor: theme.backgroundInverse, alignItems: 'center' }]}>
            <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>Signed QR</Text>
            <View style={styles.qrBox}>
              <QRCode
                value={JSON.stringify(envelope)}
                size={280}
                backgroundColor="white"
                color="black"
                logo={require('../../assets/red-wallet-logo.jpg')}
                logoSize={40}
                logoBackgroundColor="white"
                logoBorderRadius={20}
                ecl="M"
              />
            </View>
            <View style={{ marginTop: 8, padding: 8, backgroundColor: theme.backgroundPrimary, borderRadius: 8 }}>
              <Text style={{ color: theme.contentSecondary, fontSize: 10 }}>
                QR contains: {JSON.stringify(envelope).length} characters
              </Text>
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

export default SellerQRScreen;


