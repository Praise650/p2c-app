# Red Envelope Wallet

[![Expo](https://img.shields.io/badge/Built%20with-Expo-000020.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-61DAFB.svg)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/License-BSD--0-blue.svg)](LICENSE)

A modern, feature-rich cryptocurrency wallet built for the AQY blockchain (Sui fork) with innovative reward-driven theming and F2C eCommerce integration.

## 🚀 Features

### 🔐 Wallet Core
- **Secure Key Management**: ED25519 keypair generation with mnemonic backup
- **Multi-Token Support**: Native AQY, USDC, and GC token management
- **Send & Receive**: Seamless transaction flows with QR code support
- **Portfolio View**: Real-time balance tracking and transaction history

### 🎨 Dynamic Theming
- **Reward-Driven Colors**: Background dynamically shifts from white → pink → red → purple based on seller reward percentage (0%-100%)
- **Custom Theme System**: Built-in light/dark mode with customizable color palettes
- **Modern UI**: Clean, responsive design optimized for mobile experience
- **HSL Color Interpolation**: Smooth 4-phase color transitions with real-time updates

### 💱 DEX Integration (Planned)
- **Token Swaps**: AQY ↔ USDC and AQY ↔ GC trading pairs
- **Slippage Control**: Configurable slippage protection (0.1%-5%)
- **Price Impact**: Real-time market data and transaction cost estimation

### 🛒 F2C eCommerce Integration ✅
- **Seller QR Generation**: Create signed QR codes with reward schemes and dynamic theming
- **Buyer Scan & Pay**: Camera-based QR scanning with signature verification
- **Reward Schemes**: Three distribution models (Simple buyer %, Buyer + Others, Buyer + Predefined)
- **Mock Contract Integration**: Complete F2C flow with transaction simulation

### 🔧 Additional Features
- **Settings Management**: Network configuration, theme customization, security settings
- **Explorer Integration**: Deep linking to AQY blockchain explorer
- **Secure Storage**: Encrypted wallet data with biometric protection
- **Responsive Design**: Optimized for both mobile and desktop experiences

## ✅ Implemented Features

### 🏠 Core Wallet
- **Home Screen**: Portfolio view with balance display and action buttons
- **Buy/Sell Modal**: Pinned coins with theme-aware actions
- **Send Flow**: Direct wallet transfer with real-time address validation
- **Receive Screen**: QR code display and camera-based scanning
- **Swap Screen**: Token swapping interface with slippage controls
- **Account Management**: Rename/remove accounts with modal overlays
- **Copy-to-Clipboard**: Wallet address copying functionality

### 💸 Advanced Send Features
- **Real-time Address Validation**: Green confirmation bar for valid addresses
- **Dynamic Gas Fee Calculation**: Gas fees based on transaction amount
- **USD Conversion**: Token-specific rates (SUI: $3.70, USDC: $1.00)
- **Percentage Buttons**: Functional 25%, 50%, Max amount selection
- **Token Selection**: Modal overlay for choosing USDC or SUI
- **Transaction Confirmation**: Dynamic confirmation screen with transaction details

### 🎨 UI/UX Enhancements
- **Dynamic Theming**: Reward-driven background colors (white → pink → red → purple)
- **Style Separation**: All components use dedicated `.styles.js` files
- **Responsive Design**: Optimized layouts for different screen sizes
- **Modern Components**: Enhanced buttons, cards, and interactive elements
- **Modal Navigation**: Overlay system instead of screen transitions
- **Real-time Feedback**: Instant validation and user feedback

### 🛒 F2C eCommerce (Complete)
- **Seller QR Generation**:
  - Reward percentage slider (0%-100%) with live theming
  - Three reward schemes (Simple buyer %, Buyer + Others, Buyer + Predefined)
  - Signed QR payload generation with Ed25519-like cryptography
  - Progressive disclosure UI (QR appears only after signing)
  - 4-phase color gradient system (White → Pink → Red → Purple)
- **Buyer Scan Flow**:
  - Camera-based QR scanning with permission handling
  - F2C payload parsing and signature verification
  - Payment summary screen with transaction details
  - Mock contract submission with explorer links
- **Complete Integration**: End-to-end flow from QR generation to payment confirmation

## 🚀 Recent Technical Achievements

### Advanced Send Screen Implementation
- **Real-time Address Validation**: Instant feedback with green confirmation bar
- **Dynamic Gas Calculation**: Smart fee calculation based on transaction amount
- **Token Selection System**: Modal overlay for seamless coin switching
- **USD Conversion**: Real-time conversion with token-specific rates
- **Transaction Flow**: Complete Send → Confirmation → Success flow

### Enhanced User Experience
- **Modal Navigation**: Overlay system eliminates jarring screen transitions
- **Responsive Design**: Optimized for all screen sizes and orientations
- **Accessibility**: Improved contrast, focus management, and user feedback
- **Performance**: Optimized rendering and state management

### Color System Innovation
- **4-Phase Gradient**: White → Pink → Red → Purple color transitions
- **HSL Interpolation**: Smooth, mathematically precise color blending
- **Real-time Updates**: Instant visual feedback as users interact
- **Theme Integration**: Consistent color system across all components

## 📱 Screenshots

*Screenshots will be added as development progresses*

## 🛠 Technology Stack

- **Framework**: React Native with Expo
- **Language**: JavaScript
- **UI Libraries**: React Native SVG, Custom component system
- **Crypto**: Custom Ed25519-like implementation with Expo Crypto
- **Storage**: Expo SecureStore, AsyncStorage
- **Navigation**: Custom tab-based navigation
- **State Management**: React Context API

## 🏗 Project Structure

```
Red-Envelope-Wallet/
├── src/
│   ├── components/                    # Reusable UI components
│   │   ├── icons/                     # Custom SVG icons
│   │   │   ├── SuiIcon.js
│   │   │   └── index.js               # Icon exports (ArrowLeft, ArrowRight, etc.)
│   │   ├── BuySellModal.js            # Buy/Sell pinned coins modal
│   │   └── SendMethodModal.js         # "Direct wallet" or "Claimable link"
│   ├── context/
│   │   └── WalletContext.js           # Wallet state management
│   ├── screens/                       # Application screens
│   │   ├── HomeScreen.js              # Dashboard with actions (Send/Receive/Swap)
│   │   ├── SendScreen.js              # Send tokens flow
│   │   ├── DirectSendScreen.js        # Direct wallet transfer with validation
│   │   ├── SelectCoinScreen.js        # Token selection modal
│   │   ├── ReceiveScreen.js           # QR (receive) + Camera scanning tabs
│   │   ├── SwapScreen.js              # Swap UI (selectors, slippage, fees)
│   │   ├── SellerQRScreen.js          # F2C QR generation with reward schemes
│   │   ├── BuyerScanSummaryScreen.js  # F2C payment confirmation
│   │   ├── ConfirmationScreen.js      # Transaction confirmation
│   │   ├── SearchCoinsScreen.js       # Token search
│   │   ├── ManageAccountsScreen.js    # Account management
│   │   ├── RenameAccountScreen.js     # Account renaming modal
│   │   └── RemoveAccountScreen.js     # Account removal confirmation
│   ├── styles/                        # Component/screen styles (StyleSheet)
│   │   ├── BuySellModal.styles.js
│   │   ├── ReceiveScreen.styles.js
│   │   ├── SendMethodModal.styles.js
│   │   ├── SwapScreen.styles.js
│   │   ├── SellerQRScreen.styles.js
│   │   ├── BuyerScanSummaryScreen.styles.js
│   │   ├── DirectSendScreen.styles.js
│   │   ├── ConfirmationScreen.styles.js
│   │   ├── SelectCoinScreen.styles.js
│   │   ├── RenameAccountScreen.styles.js
│   │   └── RemoveAccountScreen.styles.js
│   ├── lib/                           # Utility libraries
│   │   └── f2c/                       # F2C eCommerce utilities
│   │       ├── payload.js             # QR payload generation
│   │       └── sign.js                # Ed25519-like signing
│   └── services/                      # External service integrations
│       └── F2CService.js              # Mock F2C contract service
│   ├── theme/
│   │   ├── ThemeContext.js            # Theme provider and hook
│   │   └── colors.js                  # Theme tokens
│   └── constants/                     # App constants
├── assets/                            # Images, logos (e.g., red-wallet-logo.jpg)
├── App.js                             # App entry
├── app.json                           # Expo app config
└── package.json                       # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/red-envelope-wallet.git
   cd red-envelope-wallet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS Simulator
   npm run ios

   # Android Emulator
   npm run android

   # Web Browser
   npm run web
   ```

### Development Setup

1. **Environment Configuration**
   - Copy `.env.example` to `.env` (when available)
   - Configure network endpoints and API keys

2. **Running Tests**
   ```bash
   npm test
   ```

3. **Building for Production**
   ```bash
   expo build:android
   expo build:ios
   ```

## 🗺 Development Roadmap

### ✅ Milestone 1 - Wallet Core & Foundations (Complete)
- [x] Project scaffold with Expo/React Native
- [x] Wallet key generation and import functionality
- [x] Basic UI with custom theming system
- [x] Portfolio screen with balance display
- [x] Send/Receive token flows
- [x] Settings and navigation structure

### ✅ Milestone 2 - Seller QR & Buyer Scan (Complete)
- [x] Seller reward percentage slider (0%-100%)
- [x] Dynamic background color mapping (white→pink→red→purple)
- [x] QR code generation with signed payloads
- [x] Camera-based QR scanning for buyers
- [x] Mock F2C contract integration
- [x] Complete F2C eCommerce flow implementation

### ✅ Milestone 2.5 - Advanced Send Features (Complete)
- [x] Real-time address validation with visual feedback
- [x] Dynamic gas fee calculation based on transaction amount
- [x] Token selection modal with USDC and SUI support
- [x] USD conversion with token-specific rates
- [x] Functional percentage buttons (25%, 50%, Max)
- [x] Transaction confirmation screen with dynamic data
- [x] Modal overlay navigation system
- [x] Account management (rename/remove) with confirmation screens
- [x] Copy-to-clipboard functionality for wallet addresses

### 🔜 Milestone 3 - DEX Integration
- [ ] Token swap interface (AQY ↔ USDC, AQY ↔ GC)
- [ ] DEX adapter integration
- [ ] Slippage protection and price impact display
- [ ] Transaction status and explorer linking

### 🔮 Milestone 4 - F2C Contract Full Integration
- [ ] Live smart contract integration (currently using mock service)
- [x] Multiple reward schemes implementation
- [x] Signature verification and security
- [x] Payment confirmation flows

### 🎯 Milestone 5 - AQY Explorer & Extended Features
- [ ] Deep linking to AQY blockchain explorer
- [ ] Advanced seller settings and scheme persistence
- [ ] Configurable token lists and RPC endpoints
- [ ] Enhanced theme customization

### 🚀 Milestone 6 - Production Ready
- [ ] Comprehensive security implementation
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Internationalization support
- [ ] Performance optimization and testing

## 🤝 Contributing

We welcome contributions to the Red Envelope Wallet! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the BSD Zero Clause License (0BSD) - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Project Documentation**: [PROJECT.md](PROJECT.md)
- **AQY Blockchain**: [Official Website](#) *(Coming Soon)*
- **Expo Documentation**: [docs.expo.dev](https://docs.expo.dev/)
- **React Native Guide**: [reactnative.dev](https://reactnative.dev/)

## 📞 Support

For support, questions, or contributions:

- Create an issue in this repository
- Join our Discord community *(Coming Soon)*
- Check the FAQ section *(Coming Soon)*

## 🙏 Acknowledgments

- Inspired by Slush Wallet UX design patterns
- Built with the Expo and React Native ecosystems
- Powered by the AQY blockchain technology
- Noble cryptography libraries for secure operations

---

**⚠️ Disclaimer**: This wallet is currently in active development. Use at your own risk and never store significant funds until the production release with full security audits.

# p2c-app
