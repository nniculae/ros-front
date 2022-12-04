import type { PageLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ fetch, params }) => {
	const url = `http://localhost:3000/dishes`;
	const res = await fetch(url, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const dishes = await res.json();

	return { dishes };
};
