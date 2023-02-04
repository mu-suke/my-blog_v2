import { Flex } from '@chakra-ui/react'
import type React from 'react'

const MultiColumn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent={'center'}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      gap={5}
    >
      <>{children}</>
    </Flex>
  )
}

export default MultiColumn
