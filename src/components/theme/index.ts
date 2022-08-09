import { extendTheme } from '@chakra-ui/react'
import { Container } from '@/components/theme/components/container'
import { Heading } from '@/components/theme/components/heading'
import { Link } from '@/components/theme/components/link'
import { Text } from '@/components/theme/components/text'
import { colors } from '@/components/theme/foundations/colors'
import { styles } from '@/components/theme/foundations/styles'

const overrides = {
  styles,
  colors,
  components: {
    Container,
    Heading,
    Link,
    Text,
  },
}

export default extendTheme(overrides)
