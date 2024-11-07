import { Seo } from '@/components/elements'
import Layout from '@/components/layout'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import type React from 'react'

const Custom4040: React.FC = () => {
  return (
    <>
      <Seo title={'404'} noindex={true} />
      <Layout containerVariant={'lg'}>
        <Box>
          <Heading textAlign={'center'} as={'h1'} size={'2xl'}>
            404
          </Heading>
          <Text
            textAlign={'center'}
            marginY="10px"
            pb={{ base: '200px', md: '320px' }}
            bgImage={'url(/images/page_not_found.png)'}
            bgRepeat={'no-repeat'}
            bgPos={'bottom center'}
            bgSize={{ base: 'auto 180px', md: 'auto 300px' }}
          >
            お探しのページは見つかりませんでした。
          </Text>
          <Box textAlign={'center'} marginTop={8}>
            <Link
              as={NextLink}
              href={'/'}
              size={'sm'}
              color={'primary.500'}
              textAlign={'center'}
            >
              トップへ戻る
            </Link>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export default Custom4040
