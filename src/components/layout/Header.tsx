import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Center, Container, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  // TODO(mu-suke): カテゴリやプロフィールができたらSimpleGridのcolumnsを変更する
  return (
    <>
      <Container variant="lg" paddingY="0rem">
        <Center flexDirection={'column'} py={'1rem'}>
          <Link as={NextLink} href={'/'}>
            <Heading as="h1" size={'2xl'}>
              むーすけのブログ
            </Heading>
          </Link>
          <SimpleGrid
            columns={{ base: 4, md: 4 }}
            spacing={{ base: 3, md: 6 }}
            mt={'1rem'}
            justifyItems={'center'}
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
              X(Twitter) <ExternalLinkIcon ml={'0.25rem'} />
            </Link>
            <Link
              href={'https://qiita.com/mu-suke08'}
              isExternal
              display={'flex'}
              alignItems={'center'}
            >
              Qiita <ExternalLinkIcon ml={'0.25rem'} />
            </Link>
            <Link
              href={'https://zenn.dev/musuke'}
              isExternal
              display={'flex'}
              alignItems={'center'}
            >
              Zenn <ExternalLinkIcon ml={'0.25rem'} />
            </Link>
          </SimpleGrid>
        </Center>
      </Container>
    </>
  )
}

export default Header
