import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [mdsvex()],
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/dev-website'
		}
	}
};

export default config;
