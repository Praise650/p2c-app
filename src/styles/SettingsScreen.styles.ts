import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createSettingsScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    borderColor: 'black',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  accountDetails: {
    marginLeft: 12,
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  emailText: {
    fontSize: 14,
    marginBottom: 2,
  },
  addressText: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
  accountActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  arrowButton: {
    padding: 4,
    borderRadius: 4,
  },
  expandArrow: {
    // No transition needed for React Native
  },
  expandArrowRotated: {
    transform: [{ rotate: '90deg' }],
  },
  accountActionsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 8,
    minHeight: 60,
  },
  accountActionButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    gap: 6,
    minHeight: 60,
    minWidth: 80,
  },
  accountActionText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    flexShrink: 1,
  },
  manageButton: {
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  manageButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    marginLeft: 12,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
  },
  aboutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'monospace',
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
