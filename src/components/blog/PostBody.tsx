import { Box } from '@chakra-ui/react'
import React from 'react'

const PostBody: React.FC<{ body: string }> = ({ body }) => {
  return (
    <>
      <Box
        pb={4}
        sx={{
          'h1, h2, h3, h4, h5': {
            fontWeight: 'bold',
            color: 'system.black',
          },
          // h1はタイトルで使用しているので実際は使われない
          h1: {
            fontSize: { base: '2xl', md: '3xl' },
          },
          h2: {
            fontSize: { base: '3xl', md: '4xl' },
            borderBottom: '2px solid #CDCDD0',
            mt: '40px',
            mb: '20px',
            pb: 0.5,
            lineHeight: '1.5',
          },
          h3: {
            fontSize: { base: '2xl', md: '2xl' },
            my: '28px',
            lineHeight: '1.5',
          },
          'h4, h5': {
            fontSize: 'xl',
          },
          p: { fontSize: 'md', lineHeight: '1.9', color: 'system.black' },
          blockquote: {
            borderLeft: '3px solid',
            borderColor: 'primary.500',
            pl: 4,
          },
          a: {
            fontWeight: 'bold',
            color: 'primary.900',
          },
          ul: {
            pl: 6,
          },
          li: {
            color: 'system.black',
            lineHeight: '1.9',
          },
          'pre code': {
            borderRadius: 10,
          },
          img: {
            objectFit: 'cover',
            borderRadius: 10,
          },
          '.scroll-table': {
            display: 'block',
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
          },
          table: {
            width: '100%',
            textAlign: 'center',
            borderCollapse: 'collapse',
            borderSpacing: 0,
            border: '1px solid #ccc',
          },
          th: {
            backgroundColor: 'gray.100',
            border: '1px solid #ccc',
            verticalAlign: 'middle',
            padding: 2,
          },
          td: {
            border: '1px solid #ccc',
            verticalAlign: 'middle',
            padding: 2,
          },
          code: {
            backgroundColor: 'gray.100',
            borderRadius: 5,
            display: 'block',
            overflowX: 'scroll',
            w: '100%',
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
