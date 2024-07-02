import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import { Tag } from '@/components/elements'
import { Article } from '@/types/article'
import { formatDateJst } from '@/utils/formatDate'

const ArticleHeader: React.FC<{ article: Article; isPreview: boolean }> = ({
  article,
  isPreview,
}) => {
  const createdAt = formatDateJst('yyyy/MM/dd', article.createdAt)
  const updatedAt = formatDateJst('yyyy/MM/dd', article.updatedAt)
  return (
    <>
      <Box mb={{ base: '-15px', md: '-18px' }}>
        <NextImage
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          width={960}
          height={480}
          style={{ borderRadius: '4px' }}
        />
        <Heading
          as="h1"
          fontSize={{ base: '1.5rem', md: '2rem' }}
          lineHeight={1.5}
          py={2.5}
        >
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
              {'現在プレビューモードで閲覧中です'}
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
        <HStack mt={2}>
          {article.tags.map(tag => (
            <Tag key={tag.id} id={tag.id} name={tag.name} />
          ))}
        </HStack>
      </Box>
    </>
  )
}

export default ArticleHeader
