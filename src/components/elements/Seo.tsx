import { NextSeo } from 'next-seo'
import Head from 'next/head'
import * as React from 'react'
import { META_TITLE } from '@/constants'

const Seo: React.FC<{
  // base
  title?: string
  description?: string
  // seo
  canonical?: string
  noindex?: boolean
  // SNS
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
  ogType?: 'article' | 'blog' | 'website'
  // Twitter (未設定の場合はSNS側を参照します。)
  twitterTitle?: string
  twitterDescription?: string
  twitterImageUrl?: string
  twitterCardType?: 'summary' | 'summary_large_image'
}> = meta => {
  // defaultは、_app.jsの DefaultSEO で設定する
  const commonTitle = META_TITLE

  const title = meta.title ? `${meta.title}｜${commonTitle}` : commonTitle
  const description = meta.description ? meta.description : undefined

  let ogTitle = undefined
  if (meta.ogTitle) {
    ogTitle = `${meta.ogTitle}｜${commonTitle}`
  } else if (meta.title) {
    ogTitle = `${meta.title}｜${commonTitle}`
  }

  let ogDescription = undefined
  if (meta.ogDescription) {
    ogDescription = meta.ogDescription
  } else if (meta.description) {
    ogDescription = meta.description
  }

  let ogImage = undefined
  if (meta.ogImageUrl) {
    ogImage = [{ url: meta.ogImageUrl }] as ReadonlyArray<{ url: string }>
  }

  const ogType = meta.ogType ? meta.ogType : undefined

  let twitterTitle = undefined
  if (meta.twitterTitle) {
    twitterTitle = `${meta.twitterTitle}｜${commonTitle}`
  } else if (ogTitle) {
    twitterTitle = ogTitle
  } else if (meta.title) {
    twitterTitle = `${meta.title}｜${commonTitle}`
  }

  let twitterDescription = undefined
  if (meta.twitterDescription) {
    twitterDescription = meta.twitterDescription
  } else if (ogDescription) {
    twitterDescription = ogDescription
  } else if (meta.description) {
    twitterDescription = meta.description
  }

  let twitterImage = undefined
  if (meta.twitterImageUrl) {
    twitterImage = meta.twitterImageUrl
  } else if (meta.ogImageUrl) {
    twitterImage = meta.ogImageUrl
  }

  const twitterCardType = meta.twitterCardType
    ? meta.twitterCardType
    : undefined

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={meta.canonical}
        noindex={meta.noindex}
        openGraph={{
          title: ogTitle,
          description: ogDescription,
          images: ogImage,
          type: ogType,
        }}
      />
      {/* NextSeoだと twitter に対応できないので Head を追加 */}
      <Head>
        {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
        {twitterDescription && (
          <meta name="twitter:description" content={twitterDescription} />
        )}
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        {twitterCardType && (
          <meta name="twitter:card" content={twitterCardType} />
        )}
      </Head>
    </>
  )
}

export { Seo }
