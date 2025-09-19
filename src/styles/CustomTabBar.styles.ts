import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createCustomTabBarStyles = (theme: Theme) => StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabContentActive: {
    backgroundColor: '#3B82F6',
  },
  tabIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
