import React from 'react'

interface Props {
  children: React.ReactNode;
}

export const PageTitle = function({children}: Props) {
  return (
    <h2>
      {children}
    </h2>
  )
}
