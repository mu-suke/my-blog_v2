import { SimpleGrid } from '@chakra-ui/react'
import { ArticleCard, Seo } from '@/components/elements'
import Layout from '@/components/layout'
import { ReadMoreButton } from '@/features/top/presentationals'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Article } from '@/types/article'
import type { NextPage } from 'next'

const Home: NextPage<{ blogList: Article[] }> = ({ blogList }) => {
  return (
    <>
      <Seo />
      <Layout containerVariant={'lg'}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogList.map((blog: Article, index: number) => {
            return <ArticleCard article={blog} key={index} />
          })}
        </SimpleGrid>
        <ReadMoreButton />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const limit = 9
  const data = await microCmsClient.get({
    endpoint: 'blog',
    queries: { limit },
  })

  return {
    props: {
      blogList: data.contents,
    },
    revalidate: 86400,
  }
}

export default Home
