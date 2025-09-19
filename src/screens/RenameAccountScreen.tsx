import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useWallet } from '../context/WalletContext';
import { createRenameAccountScreenStyles } from '../styles/RenameAccountScreen.styles';
import Svg, { Path, G } from 'react-native-svg';

// Type definitions
interface IconProps {
  size?: number;
  color?: string;
}

interface UserAvatarIconProps {
  size?: number;
  backgroundColor?: string;
}

interface Props {
  onBack: () => void;
}

// Icon Components
const BackIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);

const UserAvatarIcon: React.FC<UserAvatarIconProps> = ({ size = 80, backgroundColor = "#9C27B0" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      fill={backgroundColor}
      stroke="white"
      strokeWidth="1"
    />
    <Path
      d="M8 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"
      fill="white"
    />
    <Path
      d="M12 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      fill="white"
    />
  </Svg>
);

const RenameAccountScreen: React.FC<Props> = ({ onBack }) => {
  const { theme } = useTheme();
  const { walletAddress } = useWallet();
  const styles = createRenameAccountScreenStyles(theme);
  const [accountName, setAccountName] = useState('bearbeast131');

  const handleSave = () => {
    if (accountName.trim()) {
      // TODO: Implement actual account renaming logic
      Alert.alert('Success', `Account renamed to "${accountName.trim()}"`);
      onBack();
    } else {
      Alert.alert('Error', 'Please enter a valid account name');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <BackIcon size={24} color={theme.contentPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rename account</Text>
      </View>

      <View style={styles.content}>
        {/* User Avatar */}
        <View style={styles.avatarContainer}>
          <UserAvatarIcon size={80} backgroundColor="#9C27B0" />
        </View>

        {/* Main Title */}
        <Text style={styles.mainTitle}>Nickname your account</Text>

        {/* Instructions */}
        <Text style={styles.instructions}>
          Choose a name that will help you identify it. This nickname will not be visible to others.
        </Text>

        {/* Input Field */}
        <TextInput
          style={styles.inputField}
          value={accountName}
          onChangeText={setAccountName}
          placeholder="Enter account name"
          placeholderTextColor={theme.contentSecondary}
          autoFocus={true}
          maxLength={20}
        />
      </View>

      {/* Save Button - Fixed at bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenameAccountScreen;
