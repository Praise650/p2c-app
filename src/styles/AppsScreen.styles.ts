import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createAppsScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
  },
  bounder: {
    backgroundColor: "#060d14",
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    borderColor: "black",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 20,
    margin: 12,
    marginTop: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    paddingTop: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  modalSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
  },
  modalSearchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  cancelButton: {
    paddingHorizontal: 8,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '500',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Very subtle background
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)', // Subtle border
  },
  resultIconContainer: {
    position: 'relative',
    marginRight: 16,
  },
  resultIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  resultBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#8b5cf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  resultUrl: {
    fontSize: 14,
    opacity: 0.8,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 40,
  },
  featuredSection: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  promoBanner: {
    borderRadius: 12,
    padding: 16,
  },
  promoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  promoBrand: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  promoBadge: {
    color: "#ffffff",
    fontSize: 12,
  },
  promoContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  promoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dollarIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4da2ff",
  },
  promoText: {
    flex: 1,
  },
  promoMainText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  promoHighlight: {
    color: "#47e299",
  },
  promoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  promoButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  promoToggle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#e2e8f0",
  },
  appsSection: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "#051b33",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  appsList: {
    gap: 12,
  },
  appItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  appIconContainer: {
    position: "relative",
    marginRight: 12,
  },
  appIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  appBadge: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#8b5cf6",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
