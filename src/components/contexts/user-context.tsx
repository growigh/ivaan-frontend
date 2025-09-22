'use client'

import { User, userApi } from '@/lib/api/user'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface UserContextType {
	user: User | null
	loading: boolean
	setUser: (user: User | null) => void
	logout: () => Promise<void>
	refreshUser: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	const refreshUser = async () => {
		try {
			setLoading(true)
			const userData = await userApi.getMe()
			setUser(userData)
		} catch (error) {
			console.error('Error fetching user:', error)
			setUser(null)
		} finally {
			setLoading(false)
		}
	}

	const logout = async () => {
		try {
			const { authApi } = await import('@/lib/api/auth')
			const success = await authApi.logout()
			if (success) {
				setUser(null)
			} else {
				console.error('Logout failed on server')
				// Still clear local state even if server logout fails
				setUser(null)
			}
		} catch (error) {
			console.error('Error during logout:', error)
			// Clear local state even if there's an error
			setUser(null)
		}
	}

	// Check authentication status on mount
	useEffect(() => {
		refreshUser()
	}, [])

	const value: UserContextType = {
		user,
		loading,
		setUser,
		logout,
		refreshUser
	}

	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}
