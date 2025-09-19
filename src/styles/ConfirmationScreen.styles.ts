import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../types';

interface ResponsiveConfig {
  screenWidth: number;
  screenHeight: number;
  isSmallScreen: boolean;
  isLargeScreen: boolean;
  isTablet: boolean;
}

export const createConfirmationScreenStyles = (theme: Theme, config?: ResponsiveConfig) => {
  const { screenWidth, isSmallScreen, isLargeScreen, isTablet } = config || {
    screenWidth: 375,
    isSmallScreen: false,
    isLargeScreen: false,
    isTablet: false
  };

  // Responsive calculations
  const horizontalPadding = isTablet ? 32 : isSmallScreen ? 12 : 16;
  const verticalPadding = isTablet ? 24 : isSmallScreen ? 12 : 16;
  const headerPaddingTop = isTablet ? 60 : isSmallScreen ? 40 : 50;
  const cardPadding = isTablet ? 24 : isSmallScreen ? 12 : 16;
  const iconMargin = isTablet ? 32 : isSmallScreen ? 16 : 24;

  // Font sizes
  const headerFontSize = isTablet ? 18 : isSmallScreen ? 12 : 14;
  const titleFontSize = isTablet ? 28 : isSmallScreen ? 18 : 22;
  const durationFontSize = isTablet ? 16 : isSmallScreen ? 12 : 14;
  const labelFontSize = isTablet ? 16 : isSmallScreen ? 12 : 14;
  const valueFontSize = isTablet ? 16 : isSmallScreen ? 12 : 14;
  const totalValueFontSize = isTablet ? 18 : isSmallScreen ? 14 : 16;
  const buttonFontSize = isTablet ? 16 : isSmallScreen ? 12 : 14;

  // Button dimensions
  const buttonPadding = isTablet ? 16 : isSmallScreen ? 10 : 12;
  const buttonBorderRadius = isTablet ? 28 : isSmallScreen ? 18 : 22;

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: isTablet ? 32 : 16,
    },
    header: {
      paddingTop: headerPaddingTop,
      paddingHorizontal: horizontalPadding,
      paddingBottom: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: headerFontSize,
      fontWeight: '600',
    },
    doneText: {
      fontSize: headerFontSize,
      fontWeight: '600',
    },
    statusIconWrapper: {
      alignSelf: 'center',
      marginTop: iconMargin,
      marginBottom: 16,
    },
    successTitle: {
      fontSize: titleFontSize,
      fontWeight: '700',
      textAlign: 'center',
      paddingHorizontal: horizontalPadding,
    },
    durationText: {
      fontSize: durationFontSize,
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 16,
      paddingHorizontal: horizontalPadding,
    },
    card: {
      marginHorizontal: horizontalPadding,
      borderRadius: isTablet ? 16 : 12,
      padding: cardPadding,
      maxWidth: isTablet ? 600 : undefined,
      alignSelf: isTablet ? 'center' : 'stretch',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: isTablet ? 12 : isSmallScreen ? 8 : 10,
      minHeight: isTablet ? 48 : isSmallScreen ? 36 : 40,
    },
    label: {
      fontSize: labelFontSize,
      flex: 1,
      marginRight: 8,
    },
    value: {
      fontSize: valueFontSize,
      fontWeight: '600',
      textAlign: 'right',
      flex: 1,
    },
    totalValue: {
      fontSize: totalValueFontSize,
      fontWeight: '700',
      textAlign: 'right',
      flex: 1,
    },
    separator: {
      height: 1,
      opacity: 0.2,
      backgroundColor: theme.borderWeak || '#444',
      marginVertical: isTablet ? 6 : 4,
    },
    bottomContainer: {
      marginTop: 'auto',
      paddingHorizontal: horizontalPadding,
      paddingVertical: verticalPadding,
      maxWidth: isTablet ? 600 : undefined,
      alignSelf: isTablet ? 'center' : 'stretch',
    },
    explorerButton: {
      borderRadius: buttonBorderRadius,
      paddingVertical: buttonPadding,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isTablet ? 56 : isSmallScreen ? 40 : 48,
    },
    explorerText: {
      fontSize: buttonFontSize,
      fontWeight: '600',
    },
  });
};


