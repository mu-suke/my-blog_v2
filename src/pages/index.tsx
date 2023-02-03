import { SimpleGrid } from '@chakra-ui/react'
import { ArticleCard, Seo } from '@/components/elements'
import Layout from '@/components/layout'
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
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await microCmsClient.get({
    endpoint: 'blog',
  })

  return {
    props: {
      blogList: data.contents,
    },
    revalidate: 86400,
  }
}

export default Home
