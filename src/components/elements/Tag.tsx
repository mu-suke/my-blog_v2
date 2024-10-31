import {
  Box,
  Tag as ChakraTag,
  TagLabel as ChakraTagLabel,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type React from 'react'

const Tag: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  return (
    <Box mx={1}>
      <NextLink href={'/tags/[id]'} as={`/tags/${id}`}>
        <ChakraTag variant={'subtle'}>
          <ChakraTagLabel>{name}</ChakraTagLabel>
        </ChakraTag>
      </NextLink>
    </Box>
  )
}

export default Tag
