import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createNetworkScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundPrimary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.contentPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  networkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.backgroundSecondary,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 16,
    marginBottom: 12,
  },
  selectedNetworkItem: {
    backgroundColor: '#8B4513', // Brown/rust color to match the design
  },
  networkName: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.contentPrimary,
  },
  selectedNetworkName: {
    color: '#ffffff',
  },
  checkIcon: {
    opacity: 1,
  },
  hiddenCheck: {
    opacity: 0,
  },
});
