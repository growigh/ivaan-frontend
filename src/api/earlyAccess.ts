import { UTMParams } from '../utils/utm'
import { retoolApi } from './config'

export interface EarlyAccessData {
  email: string
  timestamp?: string
  source?: string
  utm?: UTMParams
}

export interface EarlyAccessResponse {
  success: boolean
  message?: string
}

/**
 * Submit email for early access via Retool webhook
 * @param data - Early access subscription data
 * @returns Promise with response data
 */
export const submitEarlyAccess = async (data: EarlyAccessData): Promise<EarlyAccessResponse> => {
  try {
    const payload = {
      email: data.email,
      timestamp: data.timestamp || new Date().toISOString(),
      source: data.source || 'early-access-form',
      utm_source: data.utm?.utm_source,
      utm_medium: data.utm?.utm_medium,
      utm_campaign: data.utm?.utm_campaign,
      utm_term: data.utm?.utm_term,
      utm_content: data.utm?.utm_content,
    }

    await retoolApi.post(
      `/workflows/${process.env.RETOOL_WORKFLOW_ID}/startTrigger`,
      payload
    )


    return {
      success: true,
      message: 'Successfully submitted for early access'
    }
  } catch (error) {
    console.error('Early access submission failed:', error)
    
    // Handle different error types
    if (error instanceof Error) {
      throw new Error(`Failed to submit early access: ${error.message}`)
    }
    
    throw new Error('Failed to submit early access: Unknown error')
  }
}
