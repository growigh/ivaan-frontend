import { BaseApi } from './base'

export interface User {
	id: string
	email: string
	name: string
	avatar: string
	createdAt: string
	updatedAt: string
}

class UserApi extends BaseApi {
	async getMe(): Promise<User | null> {
		const response = await this.request<{
			success: boolean
			data: {
				user: User
			}
			message: string
		}>('user/profile')
		return response?.data?.user || null
	}
}

export const userApi = new UserApi()
