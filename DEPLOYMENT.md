# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

## Quick Start

1. **Enable GitHub Pages**:
   - Go to: `https://github.com/jessetsmith/mappingQ/settings/pages`
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment**:
   - Go to the **Actions** tab in your repository
   - Watch the workflow run
   - Your site will be live at: `https://jessetsmith.github.io/mappingQ/`

## Configuration

### Base Path
- The base path is set to `/mappingQ/` in `vite.config.js`
- React Router basename is also set to `/mappingQ` in `src/App.jsx`
- If you rename the repository, update both of these

### Automatic Deployment
The `.github/workflows/deploy.yml` workflow automatically:
- Builds the project when you push to `main`
- Deploys to GitHub Pages
- Handles routing with a `404.html` redirect file

## Manual Deployment (Alternative)

If you prefer manual deployment using the `gh-pages` package:

```bash
npm run deploy
```

This builds and pushes to the `gh-pages` branch. However, the GitHub Actions method is recommended.

## Troubleshooting

### Routes return 404 on refresh
- The `404.html` file in `public/` should handle this
- If issues persist, check that the file was copied to `dist/` during build

### Assets not loading
- Verify the `base` path in `vite.config.js` matches your repo name
- Check browser console for 404 errors on assets

### Build fails in GitHub Actions
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json` (not just `package-lock.json`)
- Try running `npm run build` locally first

### Site not updating
- GitHub Pages can take a few minutes to update
- Check the Actions tab to ensure deployment completed
- Clear browser cache or try incognito mode

