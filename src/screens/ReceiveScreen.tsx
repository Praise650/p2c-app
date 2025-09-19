import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
  Clipboard,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createReceiveScreenStyles } from '../styles/ReceiveScreen.styles';
import { ArrowLeftIcon, CopyIcon, ShareIcon } from '../components/icons';
import { NavigationProps } from '../../types';

type Props = {
  navigation?: NavigationProps['navigation'];
  initialTab?: 'receive' | 'scan';
};

const ReceiveScreen: React.FC<Props> = ({ navigation, initialTab = 'receive' }) => {
  const { theme } = useTheme();
  const { walletAddress } = useWallet();
  const styles = createReceiveScreenStyles(theme);
  const [selectedToken, setSelectedToken] = useState('AQY');
  const [activeTab, setActiveTab] = useState(initialTab); // 'receive' or 'scan'
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await Clipboard.setString(walletAddress);
      Alert.alert('Copied', 'Address copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy address');
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Send ${selectedToken} to this address:\n${walletAddress}`,
        title: 'My Wallet Address',
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share address');
    }
  };

  const formatAddress = (address: string | undefined | null): string => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleQRCodeScanned = ({ type, data }: { type: string; data: string }) => {
    console.log('handleQRCodeScanned called, scanned:', scanned, 'data:', data);
    if (scanned) {
      console.log('Already scanned, ignoring');
      return;
    }
    setScanned(true);
    console.log('QR scanned, data:', data);
    try {
      const parsed = JSON.parse(data);
      console.log('Parsed QR data:', parsed);
      if (parsed && parsed.payload && parsed.sig && parsed.pubKey) {
        console.log('Valid F2C envelope, navigating to BuyerScanSummary');
        navigation?.navigate?.('BuyerScanSummary', { envelope: parsed });
      } else {
        console.log('Invalid envelope structure:', { hasPayload: !!parsed?.payload, hasSig: !!parsed?.sig, hasPubKey: !!parsed?.pubKey });
        Alert.alert('Invalid QR', 'This QR is not a Red Envelope payment.');
        setTimeout(() => setScanned(false), 1200);
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Unknown error';
      console.log('JSON parse error:', errorMessage);
      Alert.alert('Invalid QR', 'This QR is not a Red Envelope payment.');
      setTimeout(() => setScanned(false), 1200);
    }
  };

  const tokens = ['AQY', 'USDC', 'GC'];

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
        <Text style={[styles.title, { color: theme.contentPrimary }]}>Receive</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'receive' && styles.activeTab,
            { backgroundColor: activeTab === 'receive' ? theme.actionPrimary : 'transparent' }
          ]}
          onPress={() => setActiveTab('receive')}
        >
          <Text style={[
            styles.tabText,
            { color: activeTab === 'receive' ? theme.contentInversePrimary : theme.contentPrimary }
          ]}>
            Receive SUI
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'scan' && styles.activeTab,
            { backgroundColor: activeTab === 'scan' ? theme.actionPrimary : 'transparent' }
          ]}
          onPress={() => setActiveTab('scan')}
        >
          <Text style={[
            styles.tabText,
            { color: activeTab === 'scan' ? theme.contentInversePrimary : theme.contentPrimary }
          ]}>
            Scan code
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'receive' ? (
        <View style={styles.mainContent}>
          <ScrollView style={[styles.content, styles.scrollContent]}>
            {/* QR Code Section (no background) */}
            <View style={styles.qrSection}>
              <View style={styles.qrContainer}>
                <View style={styles.qrBackground}>
                  {walletAddress && (
                    <QRCode
                      value={walletAddress}
                      size={200}
                      backgroundColor="white"
                      color="black"
                      logo={require('../../assets/red-wallet-logo.jpg')}
                      logoSize={40}
                      logoBackgroundColor='red'
                      logoBorderRadius={20}
                    />
                  )}
                </View>
              </View>

            </View>

            {/* Name and short address under QR (separate container) */}
            <View style={styles.addressContainer}>
              <Text style={[styles.addressShort, { color: theme.contentPrimary }]}>bearbeast131</Text>
              <Text style={[styles.addressShort, { color: theme.contentSecondary }]}>
                {formatAddress(walletAddress)}
              </Text>
            </View>
          </ScrollView>

          {/* Fixed bottom Copy button */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: theme.actionPrimary }]}
              onPress={handleCopyAddress}
            >
              <CopyIcon size={20} color={theme.contentInversePrimary} />
              <Text style={[styles.actionButtonText, { color: theme.contentInversePrimary }]}>Copy Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        /* Camera Scanner View */
        (!permission || !permission.granted) ? (
          <View style={styles.cameraContainer}>
            <Text style={[styles.scanInstruction, { color: theme.contentPrimary }]}>We need your permission to use the camera</Text>
            <TouchableOpacity
              style={[styles.permissionButton, { backgroundColor: theme.actionPrimary }]}
              onPress={requestPermission}
            >
              <Text style={[styles.actionButtonText, { color: theme.contentInversePrimary }]}>Grant Permission</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.cameraContainer}>
            <CameraView
              style={styles.camera}
              facing="back"
              barcodeScannerSettings={{
                barcodeTypes: ['qr']
              }}
              onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}
              autofocus="on"
              focusable={true}
            />
            <View style={styles.cameraOverlay} pointerEvents="none">
              <View style={styles.scanArea}>
                <View style={[styles.scanCorner, styles.topLeft]} />
                <View style={[styles.scanCorner, styles.topRight]} />
                <View style={[styles.scanCorner, styles.bottomLeft]} />
                <View style={[styles.scanCorner, styles.bottomRight]} />
              </View>
              <Text style={[styles.scanInstruction, { color: theme.contentPrimary }]}>Position QR code within the frame</Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};


export default ReceiveScreen;
