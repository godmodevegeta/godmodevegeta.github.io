# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages.

## Setup Instructions

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository.

2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

3. **Automatic Deployment**: 
   - Every push to the main branch will trigger a build and deployment
   - The GitHub Action will build your app and deploy it to the gh-pages branch
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

## Configuration Notes

- The app uses HashRouter for better GitHub Pages compatibility
- Base path is automatically configured for production builds
- 404.html provides fallback routing for direct URL access
- All assets are properly configured with the correct base path

## Troubleshooting

- If images or assets don't load, check the base path configuration in vite.config.ts
- Make sure the repository name matches the base path
- Ensure GitHub Pages is enabled in repository settings