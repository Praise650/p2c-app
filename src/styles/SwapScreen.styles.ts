import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createSwapScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
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
  mainContent: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollContent: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tokenSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 20,
  },
  tokenIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.backgroundAccent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  tokenIconText: {
    color: theme.contentInversePrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  tokenSymbol: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  balanceInfo: {
    alignItems: 'flex-end',
  },
  balanceLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
  balanceAmount: {
    fontSize: 14,
    fontWeight: '600',
  },
  amountSection: {
    marginBottom: 16,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    minHeight: 40,
  },
  usdValue: {
    fontSize: 16,
  },
  percentageButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  percentageButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  swapDirectionContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  swapDirectionButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsContainer: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  slippageText: {
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 16,
  },
  feesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feesLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  feesValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feesAmount: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  feesArrow: {
    fontSize: 16,
  },
  swapButton: {
    borderRadius: 22,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  swapButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
