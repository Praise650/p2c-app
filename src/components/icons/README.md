# SVG Icons for Slush Wallet

This directory contains SVG icon components for the Slush Wallet app, built using `react-native-svg`.

## Available Icons

### Tab Bar Icons
- `HomeIcon` - Home tab icon
- `EarnIcon` - Earn tab icon  
- `NFTsIcon` - NFTs tab icon
- `AppsIcon` - Apps tab icon
- `ActivityIcon` - Activity tab icon
- `SettingsIcon` - Settings tab icon

### Action Icons
- `BuySellIcon` - Buy/Sell button icon
- `ReceiveIcon` - Receive button icon
- `SendIcon` - Send button icon
- `SwapIcon` - Swap button icon
- `SearchIcon` - Search button icon
- `CoinIcon` - General coin/currency icon

## Usage

### Basic Usage
```jsx
import { HomeIcon } from '../components/icons';

<HomeIcon size={24} color="#fafcff" />
```

### Props
- `size` (number): Icon size in pixels (default: 24)
- `color` (string): Icon color (default: '#fafcff')

### Tab Bar Example
```jsx
import { HomeIcon, EarnIcon, NFTsIcon } from '../components/icons';

const tabs = [
  { key: 'Home', icon: HomeIcon, label: 'Home' },
  { key: 'Earn', icon: EarnIcon, label: 'Earn' },
  { key: 'NFTs', icon: NFTsIcon, label: 'NFTs' },
];

// In render:
{tabs.map((tab) => {
  const IconComponent = tab.icon;
  const isActive = activeTab === tab.key;
  
  return (
    <IconComponent 
      size={20} 
      color={isActive ? "#fafcff" : "#fafcffa3"} 
    />
  );
})}
```

## Adding New Icons

1. Create a new icon component file (e.g., `NewIcon.js`)
2. Use the same structure as existing icons
3. Export from `index.js`
4. Import and use in your components

## Dependencies

- `react-native-svg` - Required for SVG rendering in React Native

## Installation

```bash
npm install react-native-svg
```

## Notes

- Colors are handled by the parent component for active/inactive states
- All icons are optimized for the 24x24 viewBox
- Icons use the app's color scheme by default
- Tab bar styling includes circular backgrounds with shadows and borders 