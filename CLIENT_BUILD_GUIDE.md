# Red Envelope Wallet - Client Build Guide

## 🚀 Quick Start (Recommended)

### Option 1: Download Pre-built APK (Fastest)
If you just want to test the app quickly, download the pre-built APK:

**📱 Download APK:** https://drive.google.com/file/d/1nMGTGtEYJsqzbjHae0XklsVPJs_t7rie/view?usp=sharing
#### Installation Steps:
1. **Download the APK** from the link above
2. **Enable Unknown Sources** on your Android device:
   - Go to Settings → Security → Install unknown apps
   - Allow installation from your browser/File Manager
3. **Install the APK:**
   - Tap the downloaded file
   - Follow the installation prompts
4. **Launch the app** and enjoy!

---

## 🛠️ Option 2: Build from Source (For Developers)

If you want to build the app yourself or make modifications:

### Prerequisites
- **Expo CLI** (`npm install -g @expo/cli`)

### Build Instructions
```
# Install EAS CLI (if not already installed)
npm install -g eas-cli

# Login to Expo (create account at expo.dev)
eas login

# Build for Android
eas build --platform android --profile preview
```

#### 4. Download the Built APK
- The build will take 5-15 minutes
- You'll get a download link when complete
- Download and install on your Android device

### Build Profiles Available:
- **preview** - For testing and internal distribution
- **production** - For App Store release (requires additional setup)


## 🔧 Troubleshooting

### Common Issues:

#### "App not installed" Error:
- Ensure "Install unknown apps" is enabled
- Check if you have enough storage space
- Try downloading the APK again

#### Build Failures:
- Ensure you have the latest Node.js version
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

#### Camera Not Working:
- Grant camera permissions when prompted
- Ensure you're testing on a physical device (camera doesn't work in simulators)

---

