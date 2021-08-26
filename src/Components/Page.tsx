import React from 'react'
import { PageTitle } from '../Components/PageTitle'

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = function({title, children}: Props) {
  return (
    <div>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  )
}
