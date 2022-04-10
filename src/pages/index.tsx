import { Box, Text } from '@chakra-ui/react'
import { microCmsClient } from '@/libs/micro-cms-client'
import type { NextPage } from 'next'

// TODO(mu-suke): blogListの型をAspidaで設定する
const Home: NextPage<{ blogList: any }> = ({ blogList }) => {
  return (
    <Box>
      {blogList.map((blog: any) => {
        return (
          <Box key={blog.id}>
            <Text>{blog.title}</Text>
            <Box
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
            <Text>{blog.updatedAt}</Text>
          </Box>
        )
      })}
    </Box>
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
