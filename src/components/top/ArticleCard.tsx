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
import { Article } from '@/types/article'

type BodyOmitArticle = Omit<Article, 'body'>

const ArticleCard: React.FC<{ article: BodyOmitArticle }> = ({ article }) => {
  const date = new Date(article.updatedAt).toLocaleDateString('ja-JP')
  return (
    <>
      <LinkBox
        display={'flex'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        flexDirection={'column'}
      >
        <Image
          src={article.thumbnail_image.url}
          alt={`${article.title}のサムネイル画像`}
          maxH={'160px'}
          width={'100%'}
          objectFit={'cover'}
        />
        <Box p={'6'} flexGrow={1}>
          <LinkOverlay href={'#'}>{article.title}</LinkOverlay>
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
