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
          'h1, h2, h3, h4, h5': {
            fontWeight: 'bold',
            color: 'gray.800',
          },
          // h1はタイトルで使用しているので実際は使われない
          h1: {
            fontSize: { base: '2xl', md: '3xl' },
          },
          h2: {
            fontSize: { base: '3xl', md: '4xl' },
            borderBottom: '2px solid #1f2937',
            mt: '40px',
            mb: '20px',
            pb: { base: '0.5rem', md: '0.625rem' },
            lineHeight: '1.4',
          },
          h3: {
            fontSize: { base: '2xl', md: '2xl' },
            my: '28px',
            lineHeight: '1.4',
          },
          'h4, h5': {
            fontSize: 'xl',
          },
          p: { fontSize: 'md' },
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
            h: { base: 200, md: 300 },
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
