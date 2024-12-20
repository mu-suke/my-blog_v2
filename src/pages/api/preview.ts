import { microCmsClient } from '@/libs/micro-cms-client'
import type { NextApiRequest, NextApiResponse } from 'next'

export const runtime = 'edge'
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { draftKey, slug } = req.query
  if (typeof draftKey !== 'string' || typeof slug !== 'string') {
    res.status(404).end()
    return
  }

  const data = await microCmsClient.get({
    endpoint: 'blog',
    contentId: slug,
    queries: {
      draftKey,
    },
  })

  if (!data) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    slug: data.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/articles/${data.id}` })
  res.end('Preview mode enabled')
}

export default preview
