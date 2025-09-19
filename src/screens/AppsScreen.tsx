import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { createAppsScreenStyles } from '../styles/AppsScreen.styles';
import { SearchIcon } from "../components/icons";
import Svg, { Path } from 'react-native-svg';

// Types
type App = {
  name: string;
  description: string;
  icon: any;
  badge?: string;
  url: string;
};

// Icon Components
type IconProps = { size?: number; color?: string };

const CloseIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill={color}/>
  </Svg>
);

const ArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill={color}/>
  </Svg>
);

const AppsScreen = () => {
  const { theme } = useTheme();
  const styles = createAppsScreenStyles(theme);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [modalSearchText, setModalSearchText] = useState("");

  const filters = ["All", "Walrus", "Finance", "Play", "Bridge"];

  const apps: App[] = [
    {
      name: "Walrus Staking",
      description: "Stake your WAL tokens to help grow the Walrus network",
      icon: require("../../assets/walrus_staking.png"),
      badge: "walrus",
      url: "stake-wal.wal.app",
    },
    {
      name: "Tusky",
      description: "Own your data with web3 storage on Walrus",
      icon: require("../../assets/tusky__2_.png"),
      badge: "walrus",
      url: "app.tusky.io",
    },
    {
      name: "Aftermath Finance",
      description: "The all-in-one DEX on Sui, featuring a fully on-chain",
      icon: require("../../assets/Aftermath-Finance.png"),
      url: "aftermath.finance",
    },
  ];

  // Filter apps based on search text
  const getFilteredApps = (searchQuery: string): App[] => {
    if (!searchQuery.trim()) return apps;
    return apps.filter(app =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchPress = () => {
    setShowSearchModal(true);
  };

  const handleAppPress = (app: App): void => {
    // Here you can implement navigation or opening external links
    console.log(`Opening app: ${app.name} at ${app.url}`);
    // For now, just close the modal
    setShowSearchModal(false);
  };

  return (
    <>
      <View
        style={[styles.header, { backgroundColor: theme.backgroundTertiary }]}
      >
        {/* Search Bar */}
        <TouchableOpacity
          style={[
            styles.searchContainer,
            { backgroundColor: theme.backgroundPrimary },
          ]}
          onPress={handleSearchPress}
        >
          <SearchIcon size={20} color={theme.contentSecondary} />
          <Text
            style={[styles.searchPlaceholder, { color: theme.contentSecondary }]}
          >
            Search apps
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
      >
        {/* Featured Section */}
        <View
          style={[
            styles.featuredSection,
            { backgroundColor: theme.backgroundTertiary },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>
            Featured
          </Text>

          {/* Coinbase Promo Banner */}
          <View
            style={[
              styles.promoBanner,
              { backgroundColor: theme.backgroundAccent },
            ]}
          >
            <View style={styles.promoHeader}>
              <Text style={styles.promoBrand}>coinbase</Text>
              <Text style={styles.promoBadge}>Limited time</Text>
            </View>

            <View style={styles.promoContent}>
              <View style={styles.promoIcon}>
                <Text style={styles.dollarIcon}>$</Text>
              </View>
              <View style={styles.promoText}>
                <Text style={styles.promoMainText}>
                  Buy and sell USDC with{" "}
                  <Text style={styles.promoHighlight}>no fees</Text>
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.promoButton,
                { backgroundColor: theme.backgroundAccent },
              ]}
            >
              <Text style={styles.promoButtonText}>Buy and sell USDC</Text>
              <View style={styles.promoToggle} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Apps Section */}
        <View
          style={[
            styles.appsSection,
            { backgroundColor: theme.backgroundTertiary },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: theme.contentPrimary }]}>
            Apps
          </Text>

          {/* Filter Buttons */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
          >
            {filters.map((filter, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterButton,
                  {backgroundColor: theme.backgroundSecondary},
                  selectedFilter === filter && {
                    backgroundColor: theme.backgroundAccent,
                  },
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    {
                      color:
                        selectedFilter === filter
                          ? theme.contentPrimary
                          : theme.contentSecondary,
                    },
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Apps List */}
          <View style={styles.appsList}>
            {apps.map((app, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.appItem,
                  { backgroundColor: theme.backgroundPrimary },
                ]}
              >
                <View style={styles.appIconContainer}>
                  <Image
                    source={app.icon}
                    style={styles.appIcon}
                    resizeMode="contain"
                  />
                  {app.badge && (
                    <View style={styles.appBadge}>
                      <Text style={styles.badgeText}>W</Text>
                    </View>
                  )}
                </View>
                <View style={styles.appInfo}>
                  <Text
                    style={[styles.appName, { color: theme.contentPrimary }]}
                  >
                    {app.name}
                  </Text>
                  <Text
                    style={[
                      styles.appDescription,
                      { color: theme.contentSecondary },
                    ]}
                  >
                    {app.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Search Modal */}
      <Modal
        visible={showSearchModal}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <View style={[styles.modalContainer, { backgroundColor: theme.backgroundPrimary }]}>
          {/* Modal Header */}
          <View style={[styles.modalHeader, { backgroundColor: theme.backgroundPrimary }]}>
            <View style={[styles.modalSearchContainer, { backgroundColor: theme.backgroundSecondary }]}>
              <SearchIcon size={20} color={theme.contentSecondary} />
              <TextInput
                style={[styles.modalSearchInput, { color: theme.contentPrimary }]}
                placeholder="Search apps"
                placeholderTextColor={theme.contentSecondary}
                value={modalSearchText}
                onChangeText={setModalSearchText}
                autoFocus={true}
              />
              {modalSearchText.length > 0 && (
                <TouchableOpacity onPress={() => setModalSearchText("")}>
                  <CloseIcon size={20} color={theme.contentSecondary} />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowSearchModal(false)}
            >
              <Text style={[styles.cancelText, { color: theme.contentSecondary }]}>Cancel</Text>
            </TouchableOpacity>
          </View>

          {/* Search Results */}
          <ScrollView style={styles.resultsContainer}>
            {modalSearchText.length > 0 && (
              <>
                <Text style={[styles.resultsTitle, { color: theme.contentPrimary }]}>Results</Text>
                {getFilteredApps(modalSearchText).map((app, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.resultItem]}
                    onPress={() => handleAppPress(app)}
                  >
                    <View style={styles.resultIconContainer}>
                      <Image
                        source={app.icon}
                        style={styles.resultIcon}
                        resizeMode="contain"
                      />
                      {app.badge && (
                        <View style={styles.resultBadge}>
                          <Text style={styles.resultBadgeText}>W</Text>
                        </View>
                      )}
                    </View>
                    <View style={styles.resultInfo}>
                      <Text style={[styles.resultName, { color: theme.contentPrimary }]}>
                        {app.name}
                      </Text>
                      <Text style={[styles.resultUrl, { color: theme.contentSecondary }]}>
                        {app.url}
                      </Text>
                    </View>
                    <View style={{ transform: [{ rotate: '300deg' }] }}>
                      <ArrowRightIcon size={20} color={theme.contentSecondary} />
                    </View>
                  </TouchableOpacity>
                ))}
                {getFilteredApps(modalSearchText).length === 0 && (
                  <Text style={[styles.noResults, { color: theme.contentSecondary }]}>
                    No apps found
                  </Text>
                )}
              </>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};


export default AppsScreen;
