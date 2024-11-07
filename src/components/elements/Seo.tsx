import { META_DESCRIPTION, META_TITLE, META_TWITTER_HANDLE } from '@/constants'
import { NextSeo } from 'next-seo'
import type * as React from 'react'

// パラメータの追加が必要であれば node_module/next-seo/lib/types.d.ts の NextSeoProps を参照して追加する
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
  twitterHandle?: string
  twitterSite?: string
  twitterCardType?: 'summary' | 'summary_large_image'
}> = meta => {
  // defaultは、_app.jsの DefaultSEO で設定する
  const commonTitle = META_TITLE

  const title = meta.title ? `${meta.title}｜${commonTitle}` : commonTitle
  const description = meta.description ? meta.description : META_DESCRIPTION

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

  const twitterHandle = meta.twitterHandle
    ? meta.twitterHandle
    : META_TWITTER_HANDLE

  const twitterSite = meta.twitterSite ? meta.twitterSite : undefined

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
        twitter={{
          handle: twitterHandle,
          site: twitterSite,
          cardType: twitterCardType,
        }}
      />
    </>
  )
}

export default Seo
