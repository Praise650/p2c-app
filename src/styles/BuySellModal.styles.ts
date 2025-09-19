import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createBuySellModalStyles = (theme: Theme) => StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: theme.backgroundPrimary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderWeak,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.contentPrimary,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  coinList: {
    gap: 12,
  },
  coinItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.backgroundAccent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  coinIconText: {
    color: theme.contentInversePrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  coinDetails: {
    flex: 1,
  },
  coinSymbol: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    backgroundColor: theme.actionPrimary,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.contentInversePrimary,
    textAlign: 'center',
  },
});
