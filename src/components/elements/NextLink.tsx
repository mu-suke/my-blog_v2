import Link from 'next/link'
import React from 'react'

const NextLink: React.FC<{
  href: string
  as?: string
  passHref?: boolean
  children: React.ReactNode
}> = ({ href, as, passHref, children }) => {
  return (
    <Link href={href} as={as} passHref={passHref}>
      {children}
    </Link>
  )
}

export default NextLink
