import { ArticleCard, Seo } from '@/components/elements'
import Layout from '@/components/layout'
import { microCmsClient } from '@/libs/micro-cms-client'
import { type Article, Tag } from '@/types/article'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import type { MicroCMSQueries } from 'microcms-js-sdk'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'

const Tag: NextPage<{ blogList: Article[]; tag: Tag }> = ({
  blogList,
  tag,
}) => {
  return (
    <>
      <Seo />
      <Layout containerVariant={'lg'}>
        <Heading mb={2} textAlign={'center'}>
          「{tag.name}」の記事一覧
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogList.map((blog: Article, index: number) => {
            return <ArticleCard article={blog} key={index} />
          })}
        </SimpleGrid>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await microCmsClient.get({ endpoint: 'tags' })

  const paths = data.contents.map((article: Article) => `/tags/${article.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error('Params Not Found')
  const id = params.id
  const tagQueries: MicroCMSQueries = {
    filters: `id[equals]${id}`,
  }

  const tagData = await microCmsClient.get({
    endpoint: 'tags',
    queries: tagQueries,
  })

  const blogListQueries: MicroCMSQueries = {
    filters: `tags[contains]${id}`,
  }

  const data = await microCmsClient.get({
    endpoint: 'blog',
    queries: blogListQueries,
  })

  return {
    props: {
      blogList: data.contents,
      tag: tagData.contents[0],
    },
  }
}

export default Tag
