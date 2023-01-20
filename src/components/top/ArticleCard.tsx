import {
  Box,
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import NextLink from '@/components/elements/NextLink'
import { Article } from '@/types/article'

type ArticleOmittedBody = Omit<Article, 'body'>

const ArticleCard: React.FC<{ article: ArticleOmittedBody }> = ({
  article,
}) => {
  const createdAt = new Date(article.createdAt).toLocaleDateString('ja-JP')
  const updatedAt = new Date(article.updatedAt).toLocaleDateString('ja-JP')
  return (
    <>
      <LinkBox
        display={'flex'}
        backgroundColor={'white'}
        borderRadius="lg"
        overflow="hidden"
        flexDirection={'column'}
      >
        <NextImage
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          width={960}
          height={480}
        />
        <Box p={'6'} flexGrow={1}>
          <NextLink
            href={'/articles/[id]'}
            as={`/articles/${article.id}`}
            passHref
          >
            <LinkOverlay color={'system.black'}>{article.title}</LinkOverlay>
          </NextLink>
        </Box>
        <Flex
          alignItems={'end'}
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
      </LinkBox>
    </>
  )
}

export default ArticleCard
