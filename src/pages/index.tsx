import { SimpleGrid } from '@chakra-ui/react'
import { Seo } from '@/components/elements/Seo'
import Layout from '@/components/layout'
import ArticleCard from '@/components/top/ArticleCard'
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
  }
}

export default Home
