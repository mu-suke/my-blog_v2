import { Button, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import type React from 'react'

const ReadMoreButton: React.FC = () => {
  return (
    <Center mt={5}>
      <Button colorScheme={'primary'} as={NextLink} href={'/pages/2'}>
        もっと見る
      </Button>
    </Center>
  )
}

export default ReadMoreButton
