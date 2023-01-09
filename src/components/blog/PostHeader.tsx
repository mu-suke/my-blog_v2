import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import { Article } from '@/types/article'

const PostHeader: React.FC<{ article: Article }> = ({ article }) => {
  const createdAt = new Date(article.createdAt).toLocaleDateString('ja-JP')
  const updatedAt = new Date(article.updatedAt).toLocaleDateString('ja-JP')
  return (
    <>
      <Box pb={4}>
        <Image
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          width={960}
          maxHeight={{ base: '190px', sm: '260px', md: '340px' }}
          objectFit={'cover'}
          borderRadius={'4px'}
          mb={{ base: 0, md: 2.5 }}
        />
        <Heading as="h1" size={{ base: '2xl', md: '3xl' }} py={2.5}>
          {article.title}
        </Heading>
        <VStack
          pt={2}
          alignItems={'start'}
          justifyContent={'center'}
          pr={4}
          pb={2}
          spacing={0}
        >
          <HStack>
            <Icon as={HiOutlinePencil} mr={1} height={4} width={4} />
            <Text display={'inline-block'}>{createdAt}</Text>
          </HStack>
          <HStack>
            <Icon as={HiOutlineClock} mr={1} height={4} width={4} />
            <Text display={'inline-block'}>{updatedAt}</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}

export default PostHeader
