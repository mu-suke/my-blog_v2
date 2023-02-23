import { extendBaseTheme } from '@chakra-ui/react'
// eslint-disable-next-line import/no-unresolved
import { Button, Tag } from '@chakra-ui/theme/components'
import { Container } from '@/components/theme/components/container'
import { Heading } from '@/components/theme/components/heading'
import { Link } from '@/components/theme/components/link'
import { Text } from '@/components/theme/components/text'
import { breakpoints } from '@/components/theme/foundations/breakpoints'
import { colors } from '@/components/theme/foundations/colors'
import { sizes } from '@/components/theme/foundations/sizes'
import { styles } from '@/components/theme/foundations/styles'

const overrides = {
  breakpoints,
  styles,
  colors,
  sizes,
  components: {
    Button,
    Container,
    Heading,
    Link,
    Tag,
    Text,
  },
}

export default extendBaseTheme(overrides)
