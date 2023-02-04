import { Box, Link, List, ListItem, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Toc } from '@/features/articles/types'
import type React from 'react'

const TableOfContents: React.FC<{ tocs: Toc[] }> = ({ tocs }) => {
  return (
    <Box
      bgColor={'system.white'}
      mx={{ base: '1rem', lg: 0 }}
      px={{ base: '1rem', lg: '1.5rem' }}
      py={{
        base: 4,
        lg: 6,
      }}
      flex={'1'}
      width={{ base: 'calc(100% - 32px)', lg: '300px' }}
      maxW={{ base: '720px', lg: '300px' }}
    >
      <Text textAlign={'center'} fontWeight={'bold'}>
        目次
      </Text>
      <List>
        {tocs.map(toc => {
          return (
            <ListItem
              key={toc.id}
              ml={toc.name === 'h3' ? 4 : 0}
              my={{ base: 0.5, md: 1 }}
            >
              <Link as={NextLink} href={`#${toc.id}`}>
                {toc.text}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default TableOfContents
