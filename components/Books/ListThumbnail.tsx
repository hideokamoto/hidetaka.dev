import { FC } from 'react'
import { MicroCMSProjectsRecord } from '../../lib/microcms'

export const BookThumbnail: FC<{
  book: Pick<MicroCMSProjectsRecord, 'affiliate_link' | 'image'>
}> = ({ book: { affiliate_link: affiliateLink, image } }) => {
  if (affiliateLink) {
    return <div dangerouslySetInnerHTML={{ __html: affiliateLink }} />
  }
  if (image) {
    return <img src={image.url} width={image.width} height={image.height} alt='book thumbnail' />
  }
  return null
}
