/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text } from '@chakra-ui/react'
import PostBody from '@/components/blog/PostBody'
import Layout from '@/components/layout'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Article } from '@/types/article'
import type { NextPage } from 'next'

const Article: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <Layout containerVariant={'default'}>
      <Box>
        <Text>{article.title}</Text>
        <PostBody body={article.body} />
        <Text>{article.updatedAt}</Text>
      </Box>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const data: any = await microCmsClient.get({ endpoint: 'blog' })

  const paths = data.contents.map((content: any) => `/articles/${content.id}`)
  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await microCmsClient.get({
    endpoint: 'blog',
    contentId: id,
  })

  return {
    props: {
      article: data,
    },
  }
}

export default Article
