import adapter from '@sveltejs/adapter-netlify'
// import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'

export default {
	preprocess: sveltePreprocess(),
	kit: {
		// default options are shown
		adapter: adapter({
			edge: false,
      split: true
		})
	}
};