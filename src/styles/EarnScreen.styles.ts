import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createEarnScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#082d57", // --color-background-primary
    padding: 16,
    paddingBottom: 100, // Add padding for floating tab bar
  },
  subcontainer: {
    flex: 1,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fafcff", // --color-content-primary
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#fafcffa3", // --color-content-secondary
    textAlign: "center",
  },
  section: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#082d57",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#082d57", // --color-border-weak
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#082d57", // --color-border-weak
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fafcff", // --color-content-primary
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#fafcffa3", // --color-content-secondary
  },
  expandButton: {
    padding: 8,
  },
  expandIcon: {
    color: "#fafcffa3", // --color-content-secondary
    fontSize: 16,
    transform: [{ rotate: "0deg" }],
  },
  expandIconOpen: {
    transform: [{ rotate: "90deg" }],
  },
  partnersList: {
    padding: 16,
  },
  partnerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#051b33", // --color-background-secondary
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#082d57",
  },
  partnerInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  partnerLogo: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: "#060d14", // --color-background-primary
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  partnerDetails: {
    flex: 1,
  },
  partnerName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fafcff", // --color-content-primary
    marginBottom: 2,
  },
  partnerApy: {
    fontSize: 12,
    color: "#fafcffa3", // --color-content-secondary
  },
  plusIcon: {
    color: "#fafcffa3", // --color-content-secondary
    fontSize: 20,
    fontWeight: "bold",
  },
});
