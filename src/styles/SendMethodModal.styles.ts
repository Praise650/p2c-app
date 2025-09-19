import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createSendMethodModalStyles = (theme: Theme) => StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: theme.backgroundPrimary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingBottom: 30,
  },
  methodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 0,
  },
  methodText: {
    fontSize: 16,
    color: theme.contentPrimary,
    fontWeight: '500',
  },
  arrowText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
