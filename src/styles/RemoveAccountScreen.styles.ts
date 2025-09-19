import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createRemoveAccountScreenStyles = (theme: Theme) => StyleSheet.create({
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
  warningIconContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  confirmationQuestion: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.contentPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
  warningMessage: {
    fontSize: 16,
    color: theme.contentPrimary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  accountCard: {
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  googleIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
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
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  removeButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    width: '100%',
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
