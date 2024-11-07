import theme from '@/components/theme'
import {
  META_DESCRIPTION,
  META_OG_IMAGE,
  META_SITE,
  META_TITLE,
  META_TWITTER_CARD_TYPE,
  META_TWITTER_HANDLE,
} from '@/constants'
import { ChakraProvider as ChakraBaseProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <DefaultSeo
        title={META_TITLE}
        description={META_DESCRIPTION}
        openGraph={{
          title: META_TITLE,
          images: [{ url: META_OG_IMAGE }],
          type: 'website',
          locale: 'ja_JP',
        }}
        twitter={{
          handle: META_TWITTER_HANDLE,
          site: META_SITE,
          cardType: META_TWITTER_CARD_TYPE,
        }}
      />
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default MyApp
