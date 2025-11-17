# Noon Project - E-commerce Mobile App

A modern e-commerce mobile application built with React Native, Expo, and TypeScript. Features product browsing, search functionality, shopping cart, and checkout process.

## 🚀 Features

- **Product Catalog**: Browse products with detailed information
- **Search & Filter**: Advanced search with real-time filtering
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Complete order placement flow
- **Responsive Design**: Optimized for mobile devices
- **State Management**: Zustand for efficient state management
- **TypeScript**: Full type safety throughout the application

## 📱 Screenshots

The app includes:
- Home screen with product carousel and banners
- Search screen with real-time product filtering
- Product details with add to cart functionality
- Shopping cart with quantity controls
- Checkout and order confirmation screens

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Navigation**: Expo Router
- **Data Fetching**: TanStack React Query
- **HTTP Client**: Axios
- **Icons**: Expo Vector Icons
- **Package Manager**: pnpm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm/yarn
- **Expo CLI** (optional, for additional Expo features)

### For Mobile Development:
- **iOS**: Xcode (macOS only)
- **Android**: Android Studio with Android SDK

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Noon-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or if you prefer npm:
   ```bash
   npm install
   ```

3. **Install Expo CLI globally** (optional)
   ```bash
   npm install -g @expo/cli
   ```

## 🏃‍♂️ Running the App

### Development Mode

Start the development server:

```bash
pnpm start
```

This will start the Expo development server and show a QR code in your terminal.

### Platform-Specific Commands

**iOS Simulator:**
```bash
pnpm ios
```

**Android Emulator:**
```bash
pnpm android
```

**Web Browser:**
```bash
pnpm web
```

### Using Expo Go App

1. Install the **Expo Go** app on your mobile device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code displayed in your terminal with:
   - **iOS**: Camera app or Expo Go app
   - **Android**: Expo Go app

## 📁 Project Structure

```
Noon-project/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   └── cart.tsx       # Shopping cart
│   ├── product/           # Product details
│   ├── checkout.tsx       # Checkout screen
│   └── confirmation.tsx   # Order confirmation
├── components/            # Reusable UI components
│   ├── home/             # Home screen components
│   └── search/           # Search-related components
├── stores/               # Zustand state management
│   ├── cartStore.ts      # Shopping cart store
│   └── useCart.ts        # Cart hook
├── data/                 # Mock data and API
│   └── mock/             # Mock data files
├── types/                # TypeScript type definitions
├── constants/            # App constants
└── assets/              # Images and fonts
```

## 🔧 Configuration

### Environment Setup

The app uses mock data by default. To connect to a real API:

1. Update the API endpoints in `services/api.ts`
2. Replace mock data imports with actual API calls
3. Configure environment variables as needed

### Customization

- **Colors**: Modify `constants/Colors.ts`
- **Mock Data**: Update files in `data/mock/`
- **Styling**: Component styles are co-located with components

## 📦 Available Scripts

- `pnpm start` - Start the development server
- `pnpm android` - Run on Android emulator/device
- `pnpm ios` - Run on iOS simulator/device
- `pnpm web` - Run in web browser

## 🏗️ Building for Production

### Android APK/AAB

```bash
expo build:android
```

### iOS IPA

```bash
expo build:ios
```

### Web Build

```bash
expo build:web
```

## 🧪 Testing

The project includes basic component tests. Run tests with:

```bash
pnpm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
pnpm start --clear
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
```

**Android build issues:**
- Ensure Android SDK is properly installed
- Check that ANDROID_HOME environment variable is set

**Dependency issues:**
```bash
rm -rf node_modules
pnpm install
```

### Getting Help

- Check the [Expo Documentation](https://docs.expo.dev/)
- Visit [React Native Documentation](https://reactnative.dev/docs/getting-started)
- Open an issue in this repository

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

Made with ❤️ using React Native and Expo