import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createSendScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  tokenSelector: {
    flexDirection: 'row',
    gap: 8,
  },
  tokenOption: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  tokenText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  tokenBalance: {
    fontSize: 12,
  },
  input: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 48,
  },
  amountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  maxButton: {
    fontSize: 14,
    fontWeight: '600',
  },
  balanceText: {
    fontSize: 12,
    marginTop: 8,
  },
  sendButton: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
