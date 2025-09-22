import { BASE_URL } from '@/config/env'
import { BaseApi } from './base'

class AuthApi extends BaseApi {
	/**
	 * Initiates Google OAuth login by redirecting to backend auth endpoint
	 */
	async initiateGoogleLogin(): Promise<void> {
		// Redirect directly to the backend Google OAuth endpoint
		window.location.href = `${BASE_URL}/api/auth/login`
	}

	/**
	 * Logs out the current user
	 */
	async logout(): Promise<boolean> {
		const response = await this.request<{
			success: boolean
			data: {}
			message: string
		}>('auth/logout', {
			method: 'POST'
		})
		return response?.success ?? false
	}
}

export const authApi = new AuthApi()
