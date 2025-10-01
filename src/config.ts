// Configuration for different environments
export const CONFIG = {
	// Base URL for assets - will be different for local dev vs GitHub Pages
	ASSETS_BASE_URL: process.env.NODE_ENV === 'production' ? '/Mario-phaser/' : '',
};
