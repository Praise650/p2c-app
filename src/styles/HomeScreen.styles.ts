import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createHomeScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#082d57", // --color-background-primary
    padding: 16,
    marginBottom: 100, // Add padding for floating tab bar
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  networkBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  networkBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
  logoContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logoButton: {
    width: 30,
    height: 30,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  manageAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black", // --color-action-secondary
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  manageAccountText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fafcff", // --color-content-primary
    marginRight: 8,
  },
  googleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIconText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4da2ff",
  },
  scrollContainer: {
    flex: 1,
  },
  balanceHeader: {
    backgroundColor: '#060d14',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fafcff',
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
  },
  roundIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBanner: {
    backgroundColor: "#4da2ff", // --color-background-accent
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  promoIconText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  promoContent: {
    flex: 1,
    marginLeft: 12,
  },
  promoText: {
    fontSize: 14,
    color: "#fafcffa3", // --color-content-primary
    fontWeight: "500",
  },
  portfolioSection: {
    backgroundColor: "#060d14", // --color-background-inverse
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    marginBottom: 16,
  },
  portfolioTitle: {
    fontSize: 14,
    color: "#fafcffa3", // --color-content-secondary
    marginBottom: 8,
    textAlign: "center",
  },
  portfolioValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fafcff", // --color-content-primary
    textAlign: "center",
    marginBottom: 16,
  },
  tokenBalances: {
    gap: 8,
  },
  tokenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#125eb0a3",
  },
  tokenSymbol: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fafcff",
  },
  tokenBalance: {
    fontSize: 16,
    color: "#fafcff",
  },
  coinStackSection: {
    backgroundColor: "#060d14", // --color-background-inverse
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    marginBottom: 16,
  },
  coinStackHeader: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 12,
  },
  statTile: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  statDelta: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
  },
  statCta: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  coinStackIcon: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 18,
  },
  coinStackTitle: {
    fontSize: 16,
    color: "#fafcff", // --color-content-primary
    flex: 1,
    lineHeight: 22,
  },
  actionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
  },
 actionButton: {
    width: "48%",
    backgroundColor: "#125eb0a3", // --color-action-secondary
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fafcff", // --color-content-primary
  },
  noCoinsSection: {
    backgroundColor: "#060d14", // --color-background-inverse
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    marginBottom: 16,
  },
  noCoinsHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  noCoinsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fafcff", // --color-content-primary
    marginBottom: 12,
    textAlign: "center",
  },
  noCoinsSubtitle: {
    fontSize: 14,
    color: "#fafcffa3", // --color-content-secondary
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
  },
  searchButton: {
    backgroundColor: "#125eb0a3", // --color-action-secondary
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fafcff", // --color-content-primary
  },
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
