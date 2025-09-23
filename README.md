# 🎮 Jumper - A Professional TypeScript Phaser 3 Platformer

![GitHub Pages Deploy](https://github.com/superdev414/Mario-phaser/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Phaser](https://img.shields.io/badge/Phaser-3.80.1-orange.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-68.3%25-3178C6.svg)
![Webpack](https://img.shields.io/badge/Webpack-5.90.3-8DD6F9.svg)
![Node](https://img.shields.io/badge/Node.js-18+-green.svg)

## 🎮 [**PLAY GAME NOW!**](https://superdev414.github.io/Mario-phaser/) 🚀

![Game Logo](/public/assets/images/ui/jumper-title.png)

## ✨ Project Highlights

This is a **fully modern, TypeScript-powered** platformer game that showcases professional game development practices:

- 🔥 **Full TypeScript conversion** from JavaScript for better developer experience
- 🚀 **Automated CI/CD pipeline** with GitHub Actions
- 🎯 **Advanced game mechanics** with Pac-Man style wrapping and dynamic physics
- 🛠️ **Professional development workflow** with feature branches and proper deployment
- 💎 **Production-ready build system** with Webpack optimization

---

## 🎮 Game Features

### Core Gameplay

- **Smooth platformer mechanics** with precise jump controls
- **Coin collection system** with animated score feedback
- **Dynamic bomb spawning** with intelligent bounce physics
- **Advanced wrapping mechanics** - player wraps on all edges like Pac-Man
- **Smart bomb physics** - bombs wrap horizontally but bounce off vertical boundaries
- **Bomb lifecycle management** - bombs self-destruct after 30 bounces

### Technical Excellence

- **TypeScript architecture** with proper type safety and interfaces
- **Custom game objects** with extended Phaser sprite interfaces
- **Modular scene management** with clean separation of concerns
- **Professional asset pipeline** with organized sprite management
- **Responsive design** that scales to any screen size

---

## 🏗️ Technology Stack

| Technology         | Purpose                        | Version |
| ------------------ | ------------------------------ | ------- |
| **TypeScript**     | Type-safe game logic           | Latest  |
| **Phaser 3**       | Game engine                    | 3.80.1  |
| **Webpack**        | Module bundling & optimization | 5.90.3  |
| **GitHub Actions** | CI/CD automation               | Latest  |
| **GitHub Pages**   | Static hosting                 | Latest  |
| **ts-loader**      | TypeScript compilation         | Latest  |

---

## 🌐 Live Demo & Deployment

🎮 **Play Online**: [https://superdev414.github.io/Mario-phaser/](https://superdev414.github.io/Mario-phaser/)

### Deployment Pipeline

- ✅ **Automated Deployment**: Every push to `main` triggers deployment
- ✅ **Production Optimization**: Webpack minification and asset optimization
- ✅ **GitHub Pages**: Fast CDN delivery
- ✅ **Build Validation**: TypeScript compilation checks
- 🔄 **Continuous Integration**: Automated testing and deployment

---

## � Project Architecture

```
TS-Phaser-Game-Jumper/
├── 📂 src/                     # TypeScript source code
│   ├── 📂 scenes/              # Game scenes (TypeScript)
│   │   ├── Boot.ts             # Initial boot sequence
│   │   ├── Preloader.ts        # Asset loading with progress
│   │   ├── MainMenu.ts         # Main menu with animations
│   │   ├── Game.ts             # Core gameplay logic
│   │   └── GameOver.ts         # Game over screen
│   └── main.ts                 # Application entry point
├── 📂 public/                  # Static assets
│   ├── 📂 assets/              # Game assets
│   │   ├── 📂 images/          # Sprites and backgrounds
│   │   │   ├── 📂 characters/  # Player sprites
│   │   │   ├── 📂 items/       # Coins and bombs
│   │   │   ├── 📂 platforms/   # Platform sprites
│   │   │   └── 📂 ui/          # UI elements
│   │   └── 📂 audio/           # Sound effects
│   └── style.css               # Game styling
├── 📂 webpack/                 # Build configuration
│   ├── config.js               # Development config
│   └── config.prod.js          # Production config
├── 📂 .github/                 # CI/CD workflows
│   └── 📂 workflows/
│       └── deploy.yml          # Deployment automation
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── index.html                  # HTML entry point
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- Modern web browser

### Development Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/superdev414/Mario-phaser.git
   cd TS-Phaser-Game-Jumper
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm start
   ```

   Opens automatically at `http://localhost:8082`

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🎯 Game Controls

| Key       | Action                      |
| --------- | --------------------------- |
| **←**     | Move left                   |
| **→**     | Move right                  |
| **↑**     | Jump                        |
| **Click** | Start game / Navigate menus |

---

## 🎮 Game Scenes Deep Dive

### 🚀 Boot Scene

- Initializes Phaser engine
- Loads initial background
- Sets up scene transitions

### � Preloader Scene

- Loads all game assets with progress indication
- Preloads sprites, audio, and animations
- Smooth transition to main menu

### 🏠 MainMenu Scene

- Animated logo display
- Interactive start button
- Clean, professional UI design

### 🎯 Game Scene (Core Gameplay)

**Advanced Features:**

- **Player Wrapping**: Complete Pac-Man style screen wrapping
- **Smart Bomb Physics**: Horizontal wrapping with vertical bouncing
- **Bounce Management**: Bombs self-destruct after 30 bounces
- **Dynamic Spawning**: Intelligent bomb placement based on player position
- **Score Animation**: Smooth tween-based score feedback
- **Sound Integration**: Immersive audio feedback

### � GameOver Scene

- Dramatic red overlay effect
- Score display and restart option
- Smooth scene transitions

---

## 🔧 Development Features

### TypeScript Benefits

- **Full IntelliSense support** in VS Code
- **Compile-time type checking** catches errors early
- **Custom interfaces** for game objects (BombSprite)
- **Better refactoring** and code navigation
- **Professional development experience**

### Build System

- **Webpack 5** with optimized production builds
- **ts-loader** for seamless TypeScript compilation
- **Asset optimization** and minification
- **Source maps** for debugging
- **Hot reload** during development

### CI/CD Pipeline

- **Automated testing** on every commit
- **Production builds** triggered by main branch pushes
- **GitHub Pages deployment** with zero downtime
- **Build artifact caching** for faster deployments

---

## 🤝 Contributing

We welcome contributions! Please follow our development workflow:

### Development Workflow

1. **Fork** the repository
2. **Create feature branch**: `git checkout -b feature/your-feature`
3. **Develop with TypeScript** - full IntelliSense support
4. **Test thoroughly** - both dev and production builds
5. **Commit with clear messages**: `git commit -m "feat: add amazing feature"`
6. **Push and create PR**: Professional review process

### Code Standards

- **TypeScript**: All new code must be TypeScript
- **Type Safety**: Proper type annotations required
- **Clean Code**: Follow existing patterns and structure
- **Comments**: Document complex game logic
- **Testing**: Ensure both builds work correctly

---

## 📊 Project Stats

- **Language Distribution**: 68.3% TypeScript, 27.2% JavaScript, 4.5% Other
- **Total Lines**: ~300+ lines of well-structured code
- **Scenes**: 5 professionally crafted game scenes
- **Assets**: Organized sprite sheets and audio files
- **Build Size**: Optimized production bundle
- **Performance**: 60 FPS smooth gameplay

---

## 🏆 Achievements

✅ **Full TypeScript Conversion** - Complete migration from JavaScript  
✅ **Professional CI/CD** - Automated deployment pipeline  
✅ **Advanced Game Mechanics** - Pac-Man wrapping + dynamic physics  
✅ **Production Deployment** - Live on GitHub Pages  
✅ **Modern Tooling** - Webpack 5 + TypeScript + GitHub Actions  
✅ **Clean Architecture** - Modular, maintainable codebase

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Phaser.js** - Amazing HTML5 game framework
- **TypeScript** - For making JavaScript development professional
- **GitHub** - For excellent CI/CD and hosting platform
- **Community** - For inspiration and feedback

---

<div align="center">

### 🎮 Ready to Play?

**[LAUNCH GAME →](https://superdev414.github.io/Mario-phaser/)**

_Built with ❤️ using TypeScript and Phaser 3_

</div>
