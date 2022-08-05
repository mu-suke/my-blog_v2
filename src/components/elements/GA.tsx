import React from 'react'

// @see https://developers.google.cn/analytics/devguides/collection/ga4
const GA: React.FC = () => {
  if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) {
    return <></>
  }
  return (
    <>
      <script
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
        }}
      />
    </>
  )
}

export { GA }
