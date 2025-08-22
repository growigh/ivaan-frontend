export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

/**
 * Extract UTM parameters from URL search params
 * @param searchParams - URL search parameters
 * @returns Object with UTM parameters
 */
export const getUTMParams = (searchParams?: URLSearchParams): UTMParams => {
  if (typeof window === 'undefined') {
    return {}
  }

  const params = searchParams || new URLSearchParams(window.location.search)
  
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  }
}

/**
 * Store UTM parameters in localStorage for later use
 * @param utmParams - UTM parameters to store
 */
export const storeUTMParams = (utmParams: UTMParams): void => {
  if (typeof window === 'undefined') return
  
  // Only store if we have at least one UTM parameter
  const hasUTMParams = Object.values(utmParams).some(value => value !== undefined)
  
  if (hasUTMParams) {
    localStorage.setItem('utm_params', JSON.stringify(utmParams))
  }
}

/**
 * Get stored UTM parameters from localStorage
 * @returns Stored UTM parameters or empty object
 */
export const getStoredUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {}
  
  try {
    const stored = localStorage.getItem('utm_params')
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.error('Error parsing stored UTM params:', error)
    return {}
  }
}

/**
 * Get current or stored UTM parameters
 * Prioritizes current URL params over stored ones
 * @returns Combined UTM parameters
 */
export const getCurrentUTMParams = (): UTMParams => {
  const currentParams = getUTMParams()
  const storedParams = getStoredUTMParams()
  
  // Current params take priority over stored ones
  return {
    ...storedParams,
    ...currentParams
  }
}
