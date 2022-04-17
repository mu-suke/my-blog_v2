import { Box, Text } from '@chakra-ui/react'
import PostBody from '@/components/blog/PostBody'
import Layout from '@/components/layout'
import { microCmsClient } from '@/libs/micro-cms-client'
import { Blog } from '@/types/blog'
import type { NextPage } from 'next'

const Home: NextPage<{ blogList: Blog[] }> = ({ blogList }) => {
  return (
    <Layout containerVariant={'default'}>
      <Box>
        {blogList.map((blog: Blog) => {
          return (
            <Box key={blog.id}>
              <Text>{blog.title}</Text>
              <PostBody body={blog.body} />
              <Text>{blog.updatedAt}</Text>
            </Box>
          )
        })}
      </Box>
    </Layout>
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
