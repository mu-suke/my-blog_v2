import { Box } from '@chakra-ui/react'
import { PostBody, PostHeader } from '@/features/articles/presentationals'
import { Article } from '@/types/article'
import type React from 'react'

const Content: React.FC<{ article: Article; isPreview: boolean }> = ({
  article,
  isPreview,
}) => {
  return (
    <Box
      as={'article'}
      backgroundColor={'white'}
      px={{ base: '1rem', md: '1.5rem' }}
      py={{
        base: 4,
        md: 6,
      }}
    >
      <PostHeader article={article} isPreview={isPreview} />
      <PostBody body={article.body} />
    </Box>
  )
}

export default Content
