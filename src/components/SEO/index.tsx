import Head from 'next/head'

export type SEOProps = {
  children?: React.ReactNode
  title?: string
}

export const SEO = ({ children, title }: SEOProps) => {
  const baseTitle = 'Podcastr'
  const fullTitle = `${title} | ${baseTitle}`

  const TITLE_WERE_PASSED = !!title

  return (
    <Head>
      <title>{TITLE_WERE_PASSED ? fullTitle : baseTitle}</title>
      <>{children}</>
    </Head>
  )
}
