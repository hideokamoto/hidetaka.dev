import { FC } from 'react'

export const ExternalLink: FC<{
  className?: string
  href?: string
  label: string
}> = (props) => {
  return (
    <a {...props} target='_blank' rel='noopener noreferrer'>
      {props.label}
    </a>
  )
}
