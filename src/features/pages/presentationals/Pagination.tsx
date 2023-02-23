import { Button, Center, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import type React from 'react'

const Pagination: React.FC<{ currentPage: number; maxPage: number }> = ({
  currentPage,
  maxPage,
}) => {
  const isStart = currentPage === 1
  const isEnd = currentPage === maxPage

  return (
    <Center mt={5}>
      <Flex gap={6}>
        <Button
          isDisabled={isStart}
          colorScheme={'primary'}
          as={NextLink}
          href={`/pages/${currentPage - 1}`}
        >
          前のページ
        </Button>
        <Button
          isDisabled={isEnd}
          colorScheme={'primary'}
          as={NextLink}
          href={`/pages/${currentPage + 1}`}
        >
          次のページ
        </Button>
      </Flex>
    </Center>
  )
}

export default Pagination
