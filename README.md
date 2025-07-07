# WingsFly App

A React Native CLI application implementing the **Wingsfly** UI, featuring a horizontal date picker, dynamic "Today's Quote" section with progress bar, task list with icons and status toggles, and a sliding bottom drawer for creating new items. Built with TypeScript, modular architecture.

## Getting Started

### Prerequisites

- Node.js v20.17.0
- Yarn or npm
- React Native CLI 0.79.0
- Xcode (macOS) or Android Studio (Windows/macOS) or a live android device for testing

### Installation
## Getting Started

### Prerequisites
- **Node.js v20.17.0**  
- **React Native CLI**  
- **Java Development Kit (JDK) ≥ 17** (for Android)  
- **Watchman** (macOS only)  
- **Xcode** (iOS development on macOS)  
- **Android Studio** (Android development)

### Installation by Operating System

#### Windows (via Chocolatey)
1. **Install Chocolatey**  
   Open PowerShell **as Administrator** and run:  
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; `
   [System.Net.ServicePointManager]::SecurityProtocol = `
   [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
   iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```
2. **Install Node.js LTS v20.17.0**  
   ```powershell
   choco install nodejs-lts --version=20.17.0 -y
   ```
3. **Install React Native CLI**  
   ```powershell
   npm install -g react-native-cli
   ```

#### macOS (via Homebrew or NVM)

- **Homebrew Method**  
  ```bash
  # Install Homebrew (if not already installed)
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  
  # Install Node.js v20 (LTS)
  brew install node@20
  
  # Link Node v20 to be your default
  brew unlink node && brew link --force node@20
  
  # Install React Native CLI
  npm install -g react-native-cli
  ```

#### Linux (Ubuntu / Debian)

- **APT + NodeSource PPA**
  ```bash
  # Install prerequisites
  sudo apt update
  sudo apt install -y curl software-properties-common

  # Add NodeSource repo for Node.js v20.x
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs

  # Verify v20.17.0
  node -v    # → should show v20.17.0 or later in the 20.x line
  
  # Install React Native CLI
  sudo npm install -g react-native-cli
  ```


Once Node.js and React Native CLI are installed, you can initialize and run your project:

### Running the App

```bash
# clone the repo
git clone https://github.com/monster-migrate/wingsfly.git
npx react-native run-ios      # for iOS
npx react-native run-android  # for Android
```

## Folder Structure

```text
src/
├── assets/
│   └── *.png                   # PNG icons, fonts, images
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   └── Icon/
│   ├── molecules/
│   │   ├── DateButton/
│   │   ├── TaskItem/
│   │   └── ProgressBar/
│   └── organisms/
│       ├── DatePicker/
│       ├── TaskList/
│       └── BottomDrawer/
├── data/
│   ├── tasksByDate.ts          # Date → Task[] mapping
│   └── quotesByDate.ts         # Date → Quote mapping
├── screens/
│   └── HomeScreen/
├── types/
└── App.tsx
```

## Key Decisions & Assumptions

- **React Native CLI + TypeScript** for native performance and type safety.
- **Atomic Design** structure (atoms → molecules → organisms) for modularity.
- **PNG Icons via Static Map** and avoid additional transformer configuration for supporting svg when needed.
- **Date & Quote Data Mappings** using `Record` for easy lookup. The data is currently static , but it can be replaced with a backend API call in the future.
- **Progress Calculation** based on completed vs. total tasks for selected date.
- **Bottom Drawer Animation** implemented with React Native’s Animated API.

## NPM Scripts

- `npm run ios` / `yarn ios` — start iOS simulator
- `npm run android` / `yarn android` — start Android emulator
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

## Screenshots
### Home Screen  
![homescreen](https://raw.githubusercontent.com/monster-migrate/wingsfly/refs/heads/main/assets/screenshots/homescreen.png)  

### Bottom Drawer
![bottomdrawer](https://raw.githubusercontent.com/monster-migrate/wingsfly/refs/heads/main/assets/screenshots/bottomdrawer.png)
<hr>
