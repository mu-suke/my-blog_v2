import { Box } from '@chakra-ui/react'
import type React from 'react'

const ArticleBody: React.FC<{ body: string }> = ({ body }) => {
  return (
    <>
      <Box
        pb={4}
        sx={{
          'h1, h2, h3, h4, h5': {
            fontWeight: 'bold',
            color: 'system.black',
            letterSpacing: '.04em',
            mb: { base: '-15px', md: '-18px' },
          },
          // h1はタイトルで使用しているので実際は使われない
          h1: {
            fontSize: { base: '1.5rem', md: '2rem' },
          },
          // heading, textのサイズはnoteを参考にしている
          h2: {
            fontSize: { base: '1.25rem', md: '1.625rem' },
            borderBottom: '1px solid',
            borderColor: 'system.gray',
            pb: { base: '4px', md: '6px' },
            mt: { base: '45px', md: '54px' },
            lineHeight: { base: '1.875rem', md: '2.25rem' },
          },
          h3: {
            fontSize: { base: '1.125rem', md: '1.375rem' },
            mt: { base: '30px', md: '36px' },
            lineHeight: { base: '1.875rem', md: '2.25rem' },
          },
          'h4, h5': {
            mt: { base: '30px', md: '36px' },
            fontSize: { base: '1rem', md: '1.25rem' },
          },
          p: {
            color: 'system.black',
            fontSize: { base: '1rem', md: '1.125rem' },
            lineHeight: { base: '2', md: '2.25' },
            my: { base: '30px', md: '36px' },
          },
          blockquote: {
            borderLeft: '3px solid',
            borderColor: 'system.gray',
            pl: 4,
            my: { base: '30px', md: '36px' },
          },
          a: {
            fontWeight: 'bold',
            color: 'primary.500',
          },
          'a:hover': {
            textDecoration: 'underline',
          },
          'ol, ul': {
            pl: 6,
            my: { base: '30px', md: '36px' },
          },
          'li > ul': {
            my: 0,
          },
          li: {
            color: 'system.black',
            lineHeight: '1.9',
            my: { base: '7px', md: '9px' },
          },
          'pre code': {
            backgroundColor: '#2f3232',
            borderRadius: 10,
            color: 'system.lightgray',
            display: 'block',
            overflowX: 'scroll',
            minWidth: '100%',
            width: '100%',
            px: 4,
            py: 3,
          },
          img: {
            objectFit: 'cover',
            borderRadius: 10,
            my: { base: '30px', md: '36px' },
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
            my: { base: '30px', md: '36px' },
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
            backgroundColor: 'rgba(33, 90, 260, 0.07)',
            fontSize: 'sm',
            px: '.4em',
            py: '.2em',
            borderRadius: 5,
          },
          aside: {
            backgroundColor: '#fff6e4',
            borderRadius: 10,
            display: 'flex',
            px: 4,
            py: 5,
          },
          '.symbol': {
            borderRadius: '99rem',
            bgColor: '#ffb84c',
            color: 'system.white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            w: '1.4rem',
            h: '1.4rem',
            mr: '0.6rem',
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

export default ArticleBody
