# GitHub Pages Deployment Guide

This guide explains how to deploy your Phaser.js Mario game to GitHub Pages.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository
- Node.js and npm installed locally

## Deployment Methods

### Method 1: Automated Deployment with GitHub Actions (Recommended)

This method automatically deploys your game whenever you push changes to the main branch.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your game

3. **Access your game:**
   - Your game will be available at: `https://superdev414.github.io/Mario-phaser/`
   - GitHub will show you the exact URL in the Pages settings

### Method 2: Manual Deployment with gh-pages

This method allows you to manually deploy your game.

#### Steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build and deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

## Project Configuration

The project is already configured for GitHub Pages deployment:

- **Public Path:** Set to `/Mario-phaser/` in the production webpack config
- **Build Output:** Files are built to the `dist/` directory
- **Assets:** All game assets are copied to the build directory

## File Structure After Deployment

```
dist/
├── index.html
├── bundle.min.js
├── style.css
├── favicon.svg
└── assets/
    ├── audio/
    ├── images/
    └── ...
```

## Troubleshooting

### Common Issues:

1. **404 Error on Assets:**
   - Ensure the `publicPath` in `webpack/config.prod.js` matches your repository name
   - Check that all assets are being copied correctly

2. **Game Not Loading:**
   - Check browser console for errors
   - Verify that the build completed successfully
   - Ensure all dependencies are installed

3. **GitHub Actions Failing:**
   - Check the Actions tab in your repository
   - Look for error messages in the workflow logs
   - Ensure your repository has the correct permissions

### Build Commands:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Build and deploy to GitHub Pages

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `publicPath` in webpack config if needed

## Support

If you encounter any issues, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Phaser.js Documentation](https://phaser.io/learn)
- Your repository's Issues section
