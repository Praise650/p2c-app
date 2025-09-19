import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export const createThemeScreenStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundPrimary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.contentPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  themeItem: {
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedThemeItem: {
    backgroundColor: theme.backgroundSecondary, // App's darker background color
  },
  themeColorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  themeInfo: {
    flex: 1,
  },
  themeName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.contentPrimary,
    marginBottom: 4,
  },
  selectedThemeName: {
    color: '#ffffff',
  },
  modeOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  modeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  modeText: {
    fontSize: 14,
    color: theme.contentSecondary,
    fontWeight: '500',
  },
  selectedModeText: {
    color: '#ffffff',
  },
});
