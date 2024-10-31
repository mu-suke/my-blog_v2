import { Box, Link, List, ListItem, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Toc } from '@/features/articles/types'
import type React from 'react'

const TableOfContents: React.FC<{ tocs: Toc[]; activeId: string }> = ({
  tocs,
  activeId,
}) => {
  return (
    <Box
      bgColor={'system.white'}
      px={{ base: '1rem', lg: '1.5rem' }}
      py={{
        base: 4,
        lg: 6,
      }}
      borderRadius={'lg'}
    >
      <Text textAlign={'center'} fontWeight={'bold'}>
        目次
      </Text>
      <List mt={2}>
        {tocs.map(toc => {
          return (
            <ListItem
              key={toc.id}
              bgColor={
                toc.id === activeId ? 'system.lightgray' : 'system.white'
              }
              ml={toc.name === 'h3' ? 4 : 0}
            >
              <Link size={'sm'} as={NextLink} href={`#${toc.id}`}>
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
