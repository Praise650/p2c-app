import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createDirectSendScreenStyles = (theme: Theme) => StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '600' },
  placeholder: { width: 40 },
  headerNumber: {
    fontSize: 16,
    fontWeight: '600',
    width: 40,
    textAlign: 'center',
  },
  content: { flex: 1, padding: 16 },

  tokenRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  tokenPill: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18 },
  tokenPillText: { fontSize: 14, fontWeight: '600' },
  balanceRow: { paddingLeft: 8 },

  amountBlock: { marginTop: 24 },
  amountInput: { fontSize: 48, fontWeight: '700' },
  fiatText: { marginTop: 8 },
  percentChips: { flexDirection: 'row', gap: 12, marginTop: 20, width: '100%' },
  percentChip: { flex: 1, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 22, alignItems: 'center' },
  percentChipText: { fontSize: 14, fontWeight: '600' },

  separator: { height: 1, opacity: 0.2, backgroundColor: theme.borderWeak || '#233', marginVertical: 20 },
  toHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  toLabel: { fontSize: 14, fontWeight: '600' },
  recipientInput: { fontSize: 28, fontWeight: '700', marginTop: 8, minHeight: 120 },
  validationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.3)',
  },
  checkmarkIcon: {
    width: 20,
    height: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkmarkText: {
    color: '#22c55e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  validationText: {
    color: 'green',
    fontSize: 14,
    fontWeight: '500',
  },

  bottomCard: { padding: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  gasRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  gasLabel: { fontSize: 16, fontWeight: '600' },
  sendButton: { borderRadius: 22, paddingVertical: 12, alignItems: 'center', justifyContent: 'center' },
  sendText: { fontSize: 16, fontWeight: '700' },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
});


