import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createAppStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060d14', // --color-background-primary
  },

  onboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  onboardLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  onboardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fafcff', // --color-content-primary
    marginBottom: 16,
    textAlign: 'center',
  },
  onboardSubtitle: {
    fontSize: 18,
    color: '#fafcffa3', // --color-content-secondary
    marginBottom: 48,
    textAlign: 'center',
  },
  onboardButton: {
    backgroundColor: '#47e299', // --color-action-primary
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  onboardButtonText: {
    color: '#060d14', // --color-content-inverse-primary
    fontSize: 18,
    fontWeight: '600',
  },
  onboardButtonSecondary: {
    backgroundColor: 'transparent',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4da2ff', // --color-border-weak
    width: '100%',
    alignItems: 'center',
  },
  onboardButtonSecondaryText: {
    color: '#fafcffa3', // --color-content-secondary
    fontSize: 18,
    fontWeight: '600',
  },
  // Divider Styles
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
    paddingHorizontal: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    opacity: 0.3,
  },
  dividerText: {
    fontSize: 14,
    marginHorizontal: 16,
    opacity: 0.7,
  },
  // Social Login Button Styles
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    minWidth: 280,
    gap: 12,
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadce0',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f1f1f',
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(18, 94, 176, 0.95)', // --color-page-tab-bar with transparency
    borderTopWidth: 1,
    borderTopColor: 'rgba(8, 45, 87, 0.3)', // --color-border-weak with transparency
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 15,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  tabActive: {
    // Active tab styling
  },
  tabContent: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tabContentActive: {
    backgroundColor: '#060d14', // --color-background-primary
    shadowColor: '#000',
    borderRadius: 70,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
