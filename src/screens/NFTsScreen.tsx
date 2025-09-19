import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { createNFTsScreenStyles } from '../styles/NFTsScreen.styles';
import Svg, { Path, Circle } from 'react-native-svg';
import SuiIcon from '../components/icons/SuiIcon';

// Icons
const MenuDotsIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="5" cy="12" r="2" fill={color}/>
    <Circle cx="12" cy="12" r="2" fill={color}/>
    <Circle cx="19" cy="12" r="2" fill={color}/>
  </Svg>
);

const BackIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" fill={color}/>
  </Svg>
);



const NFTsScreen = () => {
  const { theme } = useTheme();
  const styles = createNFTsScreenStyles(theme);
  const [activeTab, setActiveTab] = useState('NFTs');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHideAssets, setShowHideAssets] = useState(false);


  const getEmptyStateContent = () => {
    if (activeTab === 'NFTs') {
      return {
        title: 'No NFTs owned',
        subtitle: 'Digital assets that you purchase or receive will be displayed here.',
      };
    } else {
      return {
        title: 'No NFTs in kiosks',
        subtitle: 'Digital kiosk assets that you purchase or receive will be displayed here.',
      };
    }
  };

  const emptyContent = getEmptyStateContent();

  const handleMenuPress = () => {
    setShowDropdown(!showDropdown);
  };

  const handleHideAssets = () => {
    setShowDropdown(false);
    setShowHideAssets(true);
  };

  const handleCloseHideAssets = () => {
    setShowHideAssets(false);
  };

  const renderDropdownMenu = () => {
    if (!showDropdown) return null;

    return (
      <>
        <TouchableOpacity
          style={styles.dropdownOverlay}
          onPress={() => setShowDropdown(false)}
          activeOpacity={1}
        />
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={handleHideAssets}
          >
            <Text style={styles.dropdownItemText}>Hide Assets</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderHideAssetsModal = () => {
    return (
      <Modal
        visible={showHideAssets}
        animationType="slide"
        presentationStyle="fullScreen"
        statusBarTranslucent={true}
      >
        <View style={styles.hideAssetsContainer}>
          <View style={styles.hideAssestsInnerContainer}>
          {/* Header */}
          <View style={styles.hideAssetsHeader}>
            <Text style={styles.hideAssetsTitle}>Hide Assets</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={handleCloseHideAssets}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
          {/* Content */}
          <View style={styles.hideAssetsContent}>
            <View style={styles.emptyIconContainer}>
              <SuiIcon size={80} color={theme.backgroundAccent} />
            </View>

            <Text style={styles.emptyTitle}>No NFTs owned</Text>
            <Text style={styles.emptySubtitle}>
              Digital assets that you purchase or receive will be displayed here.
            </Text>

            <TouchableOpacity style={styles.browseButton}>
              <Text style={styles.browseButtonText}>Browse marketplace</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.assetsCard}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Assets</Text>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <MenuDotsIcon size={20} color={theme.contentInversePrimary} />
          </TouchableOpacity>
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'NFTs' && styles.activeTab]}
            onPress={() => setActiveTab('NFTs')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'NFTs' ? styles.activeTabText : styles.inactiveTabText
            ]}>
              NFTs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Kiosks' && styles.activeTab]}
            onPress={() => setActiveTab('Kiosks')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'Kiosks' ? styles.activeTabText : styles.inactiveTabText
            ]}>
              Kiosks
            </Text>
          </TouchableOpacity>
        </View>

        {/* Empty State */}
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconContainer}>
            <SuiIcon size={80} color={theme.backgroundAccent} />
          </View>

          <Text style={styles.emptyTitle}>{emptyContent.title}</Text>
          <Text style={styles.emptySubtitle}>{emptyContent.subtitle}</Text>

          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.browseButtonText}>Browse marketplace</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Menu */}
      {renderDropdownMenu()}

      {/* Hide Assets Modal */}
      {renderHideAssetsModal()}
    </View>
  );
};

export default NFTsScreen;
