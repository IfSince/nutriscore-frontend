import { BASE_URL } from './config.ts';

export const getCsrfToken = async () => {
    await fetch(`${ BASE_URL }/sanctum/csrf-cookie`, { credentials: 'include' })
}
