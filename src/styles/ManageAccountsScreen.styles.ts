import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createManageAccountsScreenStyles = (theme: Theme) => StyleSheet.create({
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
  },
  googleSection: {
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  googleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  googleIcon: {
    marginRight: 12,
  },
  googleInfo: {
    flex: 1,
  },
  googleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
    marginBottom: 4,
  },
  googleEmail: {
    fontSize: 14,
    color: theme.contentSecondary,
  },
  accountCard: {
    backgroundColor: theme.backgroundTertiary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  accountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.backgroundAccent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: theme.contentInversePrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
    marginBottom: 4,
  },
  accountEmail: {
    fontSize: 14,
    color: theme.contentSecondary,
    marginBottom: 4,
  },
  accountAddress: {
    fontSize: 12,
    color: theme.contentSecondary,
    fontFamily: 'monospace',
  },
  accountActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  expandArrow: {
    // No transition needed for React Native
  },
  expandArrowRotated: {
    transform: [{ rotate: '90deg' }],
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 60,
  },
  actionButton: {
    flex: 1,
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
    minHeight: 60,
    minWidth: 80,
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.contentPrimary,
    textAlign: 'center',
    flexShrink: 1,
  },
  addAccountButton: {
    backgroundColor: '#47e299',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  addAccountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#060d14',
  },
});
