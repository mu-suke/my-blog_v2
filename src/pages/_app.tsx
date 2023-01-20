import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import theme from '@/components/theme'
import {
  META_DESCRIPTION,
  META_OG_IMAGE,
  META_SITE,
  META_TITLE,
} from '@/constants'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title={META_TITLE}
        description={META_DESCRIPTION}
        openGraph={{
          title: META_TITLE,
          images: [{ url: META_OG_IMAGE }],
          type: 'website',
          locale: 'ja_JP',
        }}
      />
      <Head>
        <title>{META_TITLE}</title>
        <meta name="keywords" content={META_TITLE} />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:image" content={META_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_SITE} />
        <meta name="twitter:app:country" content="JP" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
