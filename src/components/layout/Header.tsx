import { ExternalLinkIcon } from '@chakra-ui/icons'
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
            <Link>
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
              display={'flex'}
              alignItems={'center'}
            >
              GitHub <ExternalLinkIcon mx="0.25rem" />
            </Link>
            <Link
              href={'https://twitter.com/chelsea08ym'}
              isExternal
              display={'flex'}
              alignItems={'center'}
            >
              Twitter <ExternalLinkIcon ml={'0.25rem'} />
            </Link>
          </SimpleGrid>
        </Center>
      </Container>
    </>
  )
}

export default Header
