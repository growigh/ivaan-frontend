export const BASE_URL = process.env.NEXT_PUBLIC_API
if (!BASE_URL) {
	throw new Error('BASE_URL is not defined in environment variables')
}
