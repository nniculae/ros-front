import { getContext, setContext } from 'svelte';

export function createClient(fetch: typeof global.fetch) {
	// return {
	// 	async getPosts() {
	// 		return await fetch(/* snip */);
	// 	},
	// 	async getPost(id: number) {
	// 		return await fetch(/* snip */);
	// 	}
	// };
	return {
		getHello() {
			return 'hallo';
		}
	};
}

const contextKey = Symbol('API');

export type Client = ReturnType<typeof createClient>;

export const getClient = (): Client => getContext(contextKey);

export const setClient = (client: Client): void => {
	setContext(contextKey, client);
};
