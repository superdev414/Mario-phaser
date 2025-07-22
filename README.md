# 🎮 Jumper - A Phaser 3 Platformer Game

![GitHub Pages Deploy](https://github.com/TorresjDev/Phaser-Game/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Phaser](https://img.shields.io/badge/Phaser-3.80.1-orange.svg)
![Node](https://img.shields.io/badge/Node.js-18+-green.svg)

## 🎮 [**PLAY GAME NOW!**](https://torresjdev.github.io/Phaser-Game/) 🚀

![Game Logo](/public/assets/images/ui/game-logo.png)

## 🚀 Description

Welcome to **Jumper**, an exciting platformer game where you control a nimble character to collect coins, avoid bombs, and navigate through dynamic levels! Designed with **Phaser 3**, this project features an intuitive main menu, smooth preloading, challenging gameplay, and a dramatic game over sequence. Let the adventure begin! 🌟

---

## 📋 Table of Contents

- [🎮 Jumper - A Phaser 3 Platformer Game](#-jumper---a-phaser-3-platformer-game)
  - [🎮 **PLAY GAME NOW!** 🚀](#-play-game-now-)
  - [🚀 Description](#-description)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔧 Features](#-features)
  - [🌐 Live Demo \& Deployment](#-live-demo--deployment)
    - [Deployment Status](#deployment-status)
  - [🗂 Project Structure](#-project-structure)
    - [Key Files:](#key-files)
  - [🔧 Installation](#-installation)
  - [🎮 Usage](#-usage)
  - [🎮 Game Scenes](#-game-scenes)
    - [🚀 Boot](#-boot)
    - [🚀 Preloader](#-preloader)
    - [🚀 MainMenu](#-mainmenu)
    - [🚀 Game](#-game)
    - [🚀 GameOver](#-gameover)
  - [🎨 Contributing](#-contributing)
  - [📄 License](#-license)

---

## 🔧 Features

- Responsive scaling for all screen sizes 📱💻
- Engaging animations and sound effects 🎶✨
- Retro-inspired pixel art 🔹️
- Fully modular code structure for easy maintenance 🛠️
- Transparent assets and organized folder structure 🎨

---

## 🌐 Live Demo & Deployment

🎮 **Play Online**: [https://torresjdev.github.io/Phaser-Game/](https://torresjdev.github.io/Phaser-Game/)

### Deployment Status

- ✅ **GitHub Pages**: Automatically deployed from `main` branch
- ✅ **CI/CD**: GitHub Actions workflow for seamless deployment
- ✅ **Production Build**: Optimized webpack bundle
- 🎯 **Auto Deploy**: Every push to `main` triggers new deployment

---

## 🗂 Project Structure

The repository is organized as follows:

```
jumper/
├── assets/                # Game assets
│   ├── images/            # Images and sprites
│   ├── audio/             # Audio files
├── src/                   # Source code
│   ├── scenes/            # Game scenes (Boot, Preloader, MainMenu, etc.)
├── index.html             # Entry point for the game
├── README.md              # Documentation
├── style.css              # Game styling
├── package.json           # Project dependencies
```

### Key Files:

- **`index.html`**: The starting point of the game. Loads all scripts and styles.
- **`src/scenes/`**: Contains individual scene files, such as:
  - `Boot.js` - Initializes the game.
  - `Preloader.js` - Loads assets.
  - `MainMenu.js` - Displays the main menu.
  - `Game.js` - The core gameplay logic.
  - `GameOver.js` - Game over screen logic.

---

## 🔧 Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/jumper.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd jumper
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Serve the project locally**:
   ```sh
   npm start
   ```

---

## 🎮 Usage

1. Launch the game:
   - Open your browser and navigate to `http://localhost:8080`.
2. Use arrow keys to control your character:
   - **Left/Right**: Move the character.
   - **Up**: Jump.
3. Collect coins and avoid bombs to increase your score!

---

## 🎮 Game Scenes

### 🚀 Boot

Initializes the game and preloads essential assets.

### 🚀 Preloader

Loads game assets, including images, sprites, and audio.

### 🚀 MainMenu

Displays the main menu with an option to start the game.

### 🚀 Game

The core gameplay happens here! Control your character, collect coins, and dodge bombs.

### 🚀 GameOver

Shows the game over screen when you lose.

---

## 🎨 Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

🎉 Thank you for exploring **Jumper**! Feel free to contribute, share, and play! 💻🔹️
