import { Container, Flex, Link, Image } from '@chakra-ui/react'
import React from 'react'
import { PROJECT_NAME } from '@/constants'

const HEader: React.FC = () => {
  return (
    <>
      <Container variant="lg" paddingY="0rem" height="4rem">
        <Flex
          paddingTop="6px"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Link href="/">
            <Image
              src="/images/vercel.svg"
              alt={PROJECT_NAME}
              objectFit={'cover'}
              height={{ base: 6, md: 8 }}
              width={'auto'}
            />
          </Link>
        </Flex>
      </Container>
    </>
  )
}

export default HEader
