/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react'
import PostBody from '@/components/blog/PostBody'
import PostHeader from '@/components/blog/PostHeader'
import { Seo } from '@/components/elements/Seo'
import Layout from '@/components/layout'
import { META_TWITTER_CARD_TYPE } from '@/constants/meta'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Article } from '@/types/article'
import type { NextPage } from 'next'

const Article: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <>
      <Seo
        title={article.title}
        ogType={'article'}
        ogImageUrl={article.thumbnail_image.url}
        twitterCardType={META_TWITTER_CARD_TYPE}
      />
      <Layout containerVariant={'default'}>
        <Box
          backgroundColor={'white'}
          px={{ base: '1rem', md: '1.5rem' }}
          py={{
            base: 0,
            md: '1.5rem',
          }}
        >
          <PostHeader article={article} />
          <PostBody body={article.body} />
        </Box>
      </Layout>
    </>
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

  // リッチエディタとhtmlのどちらかが送られてくるためbodyを整形
  // @see https://mu-suke.microcms.io/apis/blog/settings/model
  const body = data.body
    .map((b: any) => {
      const richEditor = b.richEditor ?? ''
      const html = b.html ?? ''
      return richEditor + html
    })
    .join('')
  const article = { ...data, body: body }

  return {
    props: {
      article,
    },
  }
}

export default Article
