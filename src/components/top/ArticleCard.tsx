import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import NextLink from '@/components/elements/NextLink'
import { Article } from '@/types/article'

type BodyOmitArticle = Omit<Article, 'body'>

const ArticleCard: React.FC<{ article: BodyOmitArticle }> = ({ article }) => {
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
        <Image
          src={`${article.thumbnail_image.url}?fm=webp`}
          alt={`「${article.title}」のサムネイル画像`}
          maxH={'160px'}
          height={504}
          width={960}
          objectFit={'cover'}
        />
        <Box p={'6'} flexGrow={1}>
          <NextLink
            href={'/articles/[id]'}
            as={`/articles/${article.id}`}
            passHref
          >
            <LinkOverlay>{article.title}</LinkOverlay>
          </NextLink>
        </Box>
        <Flex alignItems={'end'} justifyContent={'space-evenly'} pr={4} pb={2}>
          <HStack>
            <Icon as={HiOutlinePencil} mr={1} height={4} width={4} />
            <Text display={'inline-block'}>{createdAt}</Text>
          </HStack>
          <HStack>
            <Icon as={HiOutlineClock} mr={1} height={4} width={4} />
            <Text display={'inline-block'}>{updatedAt}</Text>
          </HStack>
        </Flex>
      </LinkBox>
    </>
  )
}

export default ArticleCard
