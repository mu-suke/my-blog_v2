import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Box, Container } from '@chakra-ui/react'
import type React from 'react'

const Layout: React.FC<{
  containerVariant?: 'xs' | 'sm' | 'lg' | 'xl' | 'default'
  isWhiteBg?: boolean
  children: React.ReactNode
}> = ({ containerVariant = 'default', isWhiteBg = false, children }) => {
  return (
    <Box
      backgroundColor={'bg'}
      // Footerを下部に固定
      minHeight="100vh"
      position="relative"
      // FooterHeight
      paddingBottom="4rem"
    >
      <Header />
      <Container
        backgroundColor={isWhiteBg ? 'white' : ''}
        variant={containerVariant}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
