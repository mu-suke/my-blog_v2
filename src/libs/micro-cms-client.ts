import { createClient } from 'microcms-js-sdk'

export const microCmsClient = createClient({
  serviceDomain: 'mu-suke',
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY || '',
})
