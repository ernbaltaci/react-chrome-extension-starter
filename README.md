# React Chrome Extension Starter

A modern starter template for building Chrome extensions using React, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with React 18 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🌐 Internationalization support with i18next
- 📦 Webpack for bundling
- 🔥 Hot reloading during development
- 🎯 Type-safe development with TypeScript
- 🎨 Modern UI components with React Icons
- 🛣️ Routing with React Router

## Project Structure

```
src/
├── asset/         # Static assets
├── background/    # Background scripts
├── common/        # Shared components and utilities
├── contentScript/ # Content scripts
├── lib/          # Library code
├── popup/        # Extension popup UI
└── static/       # Static files
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone git@github.com:ernbaltaci/react-chrome-extension-starter.git
cd react-chrome-extension-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

To start development with hot reloading:

```bash
npm run dev
# or
yarn dev
```

### Production Build

To create a production build:

```bash
npm run prod
# or
yarn prod
```

The built extension will be available in the `dist` directory.

## Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` directory from your project

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Webpack
- i18next for internationalization
- React Router for navigation
- React Icons for UI icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

