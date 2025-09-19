import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createSelectCoinScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundPrimary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  placeholder: {
    width: 40,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 1,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    display: 'flex',
    fontSize: 16,
    color: theme.contentPrimary,
  },
  tokenList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tokenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderWeak,
  },
  tokenIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6', // Light blue background matching design
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  tokenIconText: {
    fontSize: 20,
  },
  tokenInfo: {
    flex: 1,
  },
  tokenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
    marginRight: 6,
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  tokenPrice: {
    fontSize: 14,
    color: theme.contentSecondary,
  },
  tokenRight: {
    alignItems: 'flex-end',
  },
  tokenValue: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
    marginBottom: 2,
  },
  tokenBalance: {
    fontSize: 14,
    color: theme.contentSecondary,
    marginBottom: 2,
  },
  tokenChange: {
    fontSize: 14,
    fontWeight: '500',
  },
  positiveChange: {
    color: '#4caf50',
  },
  negativeChange: {
    color: '#f44336',
  },
});
