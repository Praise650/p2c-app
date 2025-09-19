import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createBuyerScanSummaryStyles = (theme: Theme) => StyleSheet.create({
  container: { flex: 1, padding: 6, paddingTop: 30, },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16 },
  backText: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 16, fontWeight: '700' },
  placeholder: { width: 48 },
  card: { margin: 16, padding: 16, borderRadius: 16 },
  label: { fontSize: 12, marginTop: 8 },
  value: { fontSize: 14, fontWeight: '700', marginTop: 2 },
  status: { marginTop: 12, fontWeight: '700' },
  bottom: { marginTop: 'auto', padding: 16 },
  payButton: { paddingVertical: 14, borderRadius: 20, alignItems: 'center' },
  payText: { fontWeight: '700' },
});


