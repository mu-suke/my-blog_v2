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
              width={{ base: '100px', md: '140px' }}
            />
          </Link>
        </Flex>
      </Container>
    </>
  )
}

export default HEader
