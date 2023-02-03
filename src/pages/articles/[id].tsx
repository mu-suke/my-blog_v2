/* eslint-disable @typescript-eslint/no-explicit-any */
import { MicroCMSQueries } from 'microcms-js-sdk'
import { Seo } from '@/components/elements'
import Layout from '@/components/layout'
import { META_TWITTER_CARD_TYPE } from '@/constants'
import { Content } from '@/features/articles/containers'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Article } from '@/types/article'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const Article: NextPage<{ article: Article; isPreview: boolean }> = ({
  article,
  isPreview,
}) => {
  return (
    <>
      <Seo
        title={article.title}
        ogType={'article'}
        ogImageUrl={article.thumbnail_image.url}
        twitterCardType={META_TWITTER_CARD_TYPE}
      />
      <Layout containerVariant={'default'}>
        <Content article={article} isPreview={isPreview} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await microCmsClient.get({ endpoint: 'blog' })

  const paths = data.contents.map(
    (article: Article) => `/articles/${article.id}`
  )
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id
  const draftKey = context.previewData
    ? (context.previewData.draftKey as string)
    : undefined
  const isPreview = !!draftKey
  const microCMSQueries = draftKey
    ? ({ draftKey: draftKey } as MicroCMSQueries)
    : undefined

  const data = await microCmsClient.get({
    endpoint: 'blog',
    contentId: id,
    queries: microCMSQueries,
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
      isPreview,
    },
  }
}

export default Article
