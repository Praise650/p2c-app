import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createActivityScreenStyles } from '../styles/ActivityScreen.styles';
import Svg, { Path, G } from 'react-native-svg';

const SmileyIcon = ({ size = 120, color = "#FFD731" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 114 105">
    <G stroke="#000" strokeWidth="1.479">
      <Path
        fill={color}
        fillRule="evenodd"
        strokeLinejoin="bevel"
        d="M5.367 31.688 2.286 42.9l-.514 2.14-.428 2.139-.256 2.14-.086 2.224v2.226l.086 2.225.256 2.31.428 2.226.514 2.31.684 2.311.856 2.311.942 2.225 1.112 2.31 1.198 2.226 1.37 2.14 1.369 2.054 1.54 2.054 1.627 1.882 1.711 1.883 1.883 1.883 1.883 1.712 1.968 1.626 2.054 1.626 2.14 1.455 2.14 1.455 2.31 1.284 2.311 1.283 2.396 1.113 2.397 1.112 2.481.942 2.482.941 2.568.77 2.567.685 2.568.514 2.653.513 2.653.342 2.653.343 2.653.085 2.653.086 2.653-.086 2.739-.171 2.653-.257 2.653-.427 2.568-.514 2.653-.685 2.482-.77 2.396-.856 2.31-.941 2.226-1.113 2.14-1.112 2.053-1.198 1.883-1.37 1.883-1.37 1.712-1.54 1.711-1.54 1.455-1.626 1.455-1.626 1.37-1.797 1.198-1.798 1.027-1.883 1.027-1.968.856-1.968.77-1.969 3.166-11.211-.77 1.968-.856 1.969-1.027 1.968-1.112 1.883-1.198 1.797-1.284 1.712-1.455 1.712-1.541 1.626-1.626 1.54-1.711 1.455-1.883 1.455-1.883 1.284-2.054 1.283-2.14 1.113-2.225 1.027-2.31 1.027-2.397.856-2.567.77-2.568.6-2.653.598-2.653.343-2.653.342-2.653.171-2.653.086-2.653-.086-2.653-.171-2.653-.257-2.653-.342-2.653-.514-2.568-.599-2.653-.684-2.482-.77-2.568-.857-2.396-.941-2.482-1.112-2.31-1.113-2.311-1.284-2.311-1.37-2.14-1.368-2.14-1.541-2.053-1.54-1.968-1.627-1.969-1.797-1.797-1.797-1.712-1.883-1.626-1.968-1.54-1.969-1.455-2.054-1.284-2.225-1.198-2.14-1.113-2.31-.941-2.311-.856-2.31-.685-2.226-.513-2.31-.428-2.311-.257-2.226-.085-2.225v-2.225l.085-2.225.257-2.14.428-2.14z"
        clipRule="evenodd"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        strokeLinejoin="bevel"
        d="M5.367 31.688c-1.626 5.991-3.51 11.554-4.28 17.63C.488 59.76 2.97 67.462 8.447 76.363c11.897 17.373 31.153 27.215 53.661 27.643 19.941-.514 37.143-8.473 45.102-26.616l.771-1.969 3.166-11.211-.77 1.968c-8.387 19-26.959 26.959-47.755 26.531-16.261-.941-29.184-6.162-40.995-16.09-8.216-7.53-13.094-14.634-16.175-24.99-1.37-5.734-1.626-9.842-.941-15.662l.428-2.14z"
        clipRule="evenodd"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        strokeLinejoin="bevel"
        d="M68.784 103.578c16.603-2.14 31.58-10.441 38.427-26.189l.77-1.968 3.166-11.211-.77 1.968c-7.018 16.09-21.481 24.22-38.341 26.103z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M38.573 2.504C10.587 8.923-3.107 34 7.934 58.475c11.04 24.477 42.62 39.198 70.606 32.779 27.986-6.333 41.679-31.41 30.639-55.972-11.04-24.476-42.62-39.197-70.606-32.778Z"
        clipRule="evenodd"
      />
      <Path d="M89.41 32.03c6.76 16.432-2.654 32.864-21.311 37.144-19 4.364-40.48-5.649-48.012-22.338" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M38.915 26.725c7.19-1.712 15.405 2.14 18.23 8.472 2.824 6.333-.685 12.752-7.874 14.464-7.275 1.626-15.49-2.14-18.315-8.473-2.824-6.333.685-12.837 7.96-14.464Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M68.1 45.296c7.274-1.626 10.783-8.13 7.958-14.464-2.91-6.333-11.04-10.099-18.314-8.473-7.19 1.626-10.784 8.13-7.874 14.464 2.824 6.333 11.04 10.099 18.23 8.473Z"
        clipRule="evenodd"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M63.05 22.959c3.937-.856 9.157 2.738 11.553 8.215 2.482 5.392 1.199 10.527-2.738 11.469-3.937.855-9.072-2.739-11.554-8.216-2.396-5.392-1.198-10.527 2.739-11.468ZM52.095 47.179c3.937-.942 5.135-6.077 2.653-11.469-2.396-5.391-7.617-9.071-11.554-8.216-3.936.942-5.135 6.077-2.738 11.468 2.482 5.478 7.617 9.072 11.64 8.216Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);

const ActivityScreen = () => {
  const { theme } = useTheme();
  const styles = createActivityScreenStyles(theme);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      <View style={[styles.mainContainer, { backgroundColor: theme.backgroundTertiary }]}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.contentPrimary }]}>Transaction history</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <SmileyIcon size={120} color="#FFD731" />
          </View>

          <Text style={[styles.noActivityText, { color: theme.contentPrimary }]}>
            No activity
          </Text>

          <Text style={[styles.descriptionText, { color: theme.contentSecondary }]}>
            Your on-chain activity will be displayed here once you begin transacting on Sui.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default ActivityScreen;