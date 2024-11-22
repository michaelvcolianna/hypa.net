import { building } from '$app/environment';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { building };
}
