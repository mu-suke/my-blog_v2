import { Box } from '@chakra-ui/react'
import * as cheerio from 'cheerio'
import { isText } from 'domhandler'
import { useHeadsObserver } from '@/features/articles/hooks'
import { TableOfContents } from '@/features/articles/presentationals'
import { Toc } from '@/features/articles/types'
import { Article } from '@/types/article'
import type React from 'react'

const Sidebar: React.FC<{ article: Article }> = ({ article }) => {
  const renderToc = (body: string) => {
    const $ = cheerio.load(body)
    const headings = $('h2, h3').toArray()
    return headings.map(data => {
      const childNode = data.children[0]
      return {
        text: isText(childNode) ? childNode.data : '',
        id: data.attribs.id,
        name: data.name,
      } as Toc
    })
  }

  const tocs = renderToc(article.body)

  const { activeId } = useHeadsObserver()

  return (
    <Box as={'aside'} position={'sticky'} top={5}>
      <TableOfContents tocs={tocs} activeId={activeId} />
    </Box>
  )
}

export default Sidebar
