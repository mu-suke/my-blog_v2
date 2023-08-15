import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import { Tag } from '@/components/elements'
import { Article } from '@/types/article'
import { formatDateJst } from '@/utils/formatDate'

type ArticleOmittedBody = Omit<Article, 'body'>

const ArticleCard: React.FC<{ article: ArticleOmittedBody }> = ({
  article,
}) => {
  const createdAt = formatDateJst('yyyy/MM/dd', article.createdAt)
  const updatedAt = formatDateJst('yyyy/MM/dd', article.updatedAt)
  return (
    <>
      <Box
        display={'flex'}
        backgroundColor={'white'}
        borderRadius="lg"
        overflow="hidden"
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <NextLink href={'/articles/[id]'} as={`/articles/${article.id}`}>
          <NextImage
            src={`${article.thumbnail_image.url}?fm=webp`}
            alt={`「${article.title}」のサムネイル画像`}
            width={960}
            height={480}
            priority
          />
          <Box p={'6'} flexGrow={1}>
            <Text>{article.title}</Text>
          </Box>
        </NextLink>
        <HStack>
          <Flex flexDirection={'row'} flex={1} pl={4}>
            {article.tags.map(tag => (
              <Tag key={tag.id} id={tag.id} name={tag.name} />
            ))}
          </Flex>
          <Flex
            alignItems={'end'}
            flex={1}
            flexDirection={'column'}
            justifyContent={'center'}
            pr={4}
            pb={2}
          >
            <HStack>
              <Icon as={HiOutlinePencil} />
              <Text display={'inline-block'} size={'sm'}>
                {createdAt}
              </Text>
            </HStack>
            <HStack>
              <Icon as={HiOutlineClock} />
              <Text display={'inline-block'} size={'sm'}>
                {updatedAt}
              </Text>
            </HStack>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}

export default ArticleCard
