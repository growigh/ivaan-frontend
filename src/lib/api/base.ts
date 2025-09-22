import { BASE_URL } from '@/config/env'

export class BaseApi {
	protected baseUrl: string

	constructor() {
		this.baseUrl = `${BASE_URL}/api/`
	}

	private async makeRequest<T>(
		endpoint: string,
		options: RequestInit = {},
		skipAuth = false,
	): Promise<T | null> {
		const url = `${this.baseUrl}${endpoint}`

		const headers: Record<string, string> = {
			'Content-Type': 'application/json',
			...(options.headers as Record<string, string>)
		}

		const config: RequestInit = {
			credentials: 'include',
			headers,
			...options
		}

		try {
			const response = await fetch(url, config)

			const contentType = response.headers.get('content-type')
			if (!contentType || !contentType.includes('application/json')) {
				return null
			}

			const data = await response.json()

			if (!response.ok) {
				return null
			}

			return data
		} catch (error) {
			return null
		}
	}

	protected async request<T>(
		endpoint: string,
		options: RequestInit = {},
		skipAuth = false
	): Promise<T | null> {
		return this.makeRequest<T>(endpoint, options, skipAuth)
	}
}
