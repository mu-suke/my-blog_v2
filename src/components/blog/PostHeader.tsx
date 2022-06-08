import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineClock } from 'react-icons/hi'
import { Article } from '@/types/article'

const PostHeader: React.FC<{ article: Article }> = ({ article }) => {
  const date = new Date(article.updatedAt).toLocaleDateString('ja-JP')
  return (
    <>
      <Box pb={4}>
        <Image
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          height={504}
          width={960}
          maxHeight={{ base: '190px', sm: '260px', md: '340px' }}
          objectFit={'cover'}
          borderRadius={'4px'}
          mb={{ base: 0, md: 2.5 }}
        />
        <Heading as="h1" size={{ base: '2xl', md: '3xl' }} py={2.5}>
          {article.title}
        </Heading>
        <Flex
          pt={2}
          alignItems={'center'}
          justifyContent={'start'}
          pr={4}
          pb={2}
        >
          <Icon as={HiOutlineClock} mr={1} height={4} width={4} />
          <Text display={'inline-block'}>{date}</Text>
        </Flex>
      </Box>
    </>
  )
}

export default PostHeader
