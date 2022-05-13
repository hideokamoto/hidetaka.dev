import { renderers } from '@markdoc/markdoc'
import React, { FC } from 'react'
import { ExternalLink } from './ExternalLink'

export const MarkdocContent: FC<{
  content: string
}> = ({ content }) => {
  return (
    <>
      {renderers.react(JSON.parse(content), React, {
        components: {
          ExternalLink,
        },
      })}
    </>
  )
}
