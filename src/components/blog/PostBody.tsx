import { Box } from '@chakra-ui/react'
import React from 'react'

const PostBody: React.FC<{ body: string }> = ({ body }) => {
  return (
    <>
      <Box
        mt={4}
        sx={{
          '*': {
            mb: 4,
            listStyle: 'none',
          },
          h1: { fontSize: '3xl', fontWeight: 'bold', color: 'primary.900' },
          p: { fontSize: 'md', color: 'primary.900' },
          blockquote: {
            borderLeft: '3px solid',
            borderColor: 'primary.500',
            pl: 4,
          },
          a: {
            fontWeight: 'bold',
            color: 'primary.900',
          },
          li: {
            mb: 2,
            color: 'primary.900',
          },
          'pre code': {
            borderRadius: 10,
          },
          img: {
            w: '100%',
            h: { base: 200, sm: 300, md: 400 },
            objectFit: 'cover',
            borderRadius: 10,
          },
        }}
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      </Box>
    </>
  )
}

export default PostBody
