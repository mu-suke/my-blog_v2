import { Center, Container, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import NextLink from '@/components/elements/NextLink'

const Header: React.FC = () => {
  // TODO(mu-suke): カテゴリやプロフィールができたらSimpleGridのcolumnsを変更する
  return (
    <>
      <Container variant="lg" paddingY="0rem">
        <Center flexDirection={'column'} py={'1rem'}>
          <NextLink href="/" passHref>
            <Link color={'gray.800'} _hover={{ textDecoration: 'none' }}>
              <Heading as="h1" size={'2xl'}>
                むーすけのブログ
              </Heading>
            </Link>
          </NextLink>
          <SimpleGrid
            columns={{ base: 2, md: 2 }}
            spacing={{ base: 4, md: 8 }}
            mt={'1rem'}
          >
            <Link
              href={'https://github.com/mu-suke'}
              isExternal
              color={'gray.800'}
              _hover={{ textDecoration: 'none', opacity: '0.5' }}
            >
              GitHub
            </Link>
            <Link
              href={'https://twitter.com/chelsea08ym'}
              isExternal
              color={'gray.800'}
              _hover={{ textDecoration: 'none', opacity: '0.5' }}
            >
              Twitter
            </Link>
          </SimpleGrid>
        </Center>
      </Container>
    </>
  )
}

export default Header
