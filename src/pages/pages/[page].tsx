import { SimpleGrid } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'
import { ArticleCard, Seo } from '@/components/elements'
import Layout from '@/components/layout'
import { Pagination } from '@/features/pages/presentationals'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Article } from '@/types/article'
import type { NextPage } from 'next'

const Pages: NextPage<{
  blogList: Article[]
  currentPage: number
  maxPage: number
}> = ({ blogList, currentPage, maxPage }) => {
  return (
    <>
      <Seo />
      <Layout containerVariant={'lg'}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogList.map((blog: Article, index: number) => {
            return <ArticleCard article={blog} key={index} />
          })}
        </SimpleGrid>
        <Pagination currentPage={currentPage} maxPage={maxPage} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await microCmsClient.get({ endpoint: 'blog' })
  const perPage = 9
  const totalCount = res.totalCount
  const createRange = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = createRange(1, Math.ceil(totalCount / perPage)).map(
    i => `/pages/${i}`
  )

  return { paths, fallback: false }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (context: any) => {
  const page: number = parseInt(context.params.page) ?? 1
  const limit = 9
  const offset = (page - 1) * limit

  const data = await microCmsClient.get({
    endpoint: 'blog',
    queries: { limit, offset },
  })

  const totalCount = data.totalCount
  const maxPage = Math.ceil(totalCount / limit)

  return {
    props: {
      blogList: data.contents,
      currentPage: page,
      maxPage: maxPage,
    },
    revalidate: 86400,
  }
}

export default Pages
