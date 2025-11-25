/**
 * Get the correct asset path for GitHub Pages deployment
 * Handles the base path automatically
 */
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Vite automatically handles base path for public assets
  // But we need to ensure the path works with the base
  const base = import.meta.env.BASE_URL
  // Remove trailing slash from base if present
  const baseClean = base.endsWith('/') ? base.slice(0, -1) : base
  // Combine base and path
  return `${baseClean}/${cleanPath}`
}

