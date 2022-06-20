import { Box, Container, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      height="4rem"
      // Footerを下部に固定
      width="100%"
      position="absolute"
      bottom="0"
    >
      <Container paddingY="0rem" paddingTop="1rem">
        <Box textAlign="center">
          <Text as="small">© 2022, mu-suke</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
