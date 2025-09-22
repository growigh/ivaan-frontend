'use server'

import { UTMParams } from '../../utils/utm'
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
export const submitEarlyAccess = async (
  data: EarlyAccessData
): Promise<EarlyAccessResponse> => {
  try {
    const payload = {
      email: data.email,
      timestamp: data.timestamp || new Date().toISOString(),
      source: data.source || 'early-access-form',
      utm_source: data.utm?.utm_source,
      utm_medium: data.utm?.utm_medium,
      utm_campaign: data.utm?.utm_campaign,
      utm_term: data.utm?.utm_term,
      utm_content: data.utm?.utm_content
    }

    // Get the API key from environment variable
    const apiKey = process.env.RETOOL_API_KEY
    const workflowId = process.env.RETOOL_WORKFLOW_ID

    if (!apiKey) {
      throw new Error('Retool API key not configured')
    }

    // Use query parameter for API key instead of Authorization header
    await retoolApi.post(
      `/workflows/${workflowId}/startTrigger?workflowApiKey=${apiKey}`,
      payload
    )

    return {
      success: true,
      message: 'Successfully submitted for early access'
    }
  } catch (error) {
    // Ayush tu kuch bola toh marunga server side hai ye
    console.error('Early access submission failed:', error)

    // Handle different error types
    if (error instanceof Error) {
      throw new Error(`Failed to submit early access: ${error.message}`)
    }

    throw new Error('Failed to submit early access: Unknown error')
  }
}
