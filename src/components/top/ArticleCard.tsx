import {
  Box,
  Flex,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineClock } from 'react-icons/hi'
import NextLink from '@/components/elements/NextLink'
import { Article } from '@/types/article'

type BodyOmitArticle = Omit<Article, 'body'>

const ArticleCard: React.FC<{ article: BodyOmitArticle }> = ({ article }) => {
  const date = new Date(article.updatedAt).toLocaleDateString('ja-JP')
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
        <Flex pt={2} alignItems={'center'} justifyContent={'end'} pr={4} pb={2}>
          <Icon as={HiOutlineClock} mr={1} height={4} width={4} />
          <Text display={'inline-block'}>{date}</Text>
        </Flex>
      </LinkBox>
    </>
  )
}

export default ArticleCard
