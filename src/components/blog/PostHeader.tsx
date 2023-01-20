import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import { Article } from '@/types/article'
import { formatDateJst } from '@/utils/formatDate'

const PostHeader: React.FC<{ article: Article; isPreview: boolean }> = ({
  article,
  isPreview,
}) => {
  const createdAt = formatDateJst('yyyy/MM/dd', article.createdAt)
  const updatedAt = formatDateJst('yyyy/MM/dd', article.updatedAt)
  return (
    <>
      <Box pb={4}>
        <NextImage
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          width={960}
          height={480}
          style={{ borderRadius: '4px' }}
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
          {isPreview && (
            <Text fontWeight={'bold'} color={'red.500'}>
              現在プレビューモードで閲覧中です
            </Text>
          )}
          <HStack>
            <Icon as={HiOutlinePencil} color={'system.black'} />
            <Text display={'inline-block'} size={'sm'}>
              {createdAt}
            </Text>
          </HStack>
          <HStack>
            <Icon as={HiOutlineClock} color={'system.black'} />
            <Text display={'inline-block'} size={'sm'}>
              {updatedAt}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}

export default PostHeader
