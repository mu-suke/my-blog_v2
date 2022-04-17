import { extendTheme } from '@chakra-ui/react'
import { Container } from '@/components/theme/components/container'
import { Heading } from '@/components/theme/components/heading'
import { Link } from '@/components/theme/components/link'
import { colors } from '@/components/theme/foundations/colors'

const overrides = {
  colors,
  components: {
    Container,
    Heading,
    Link,
    Text,
  },
}

export default extendTheme(overrides)
