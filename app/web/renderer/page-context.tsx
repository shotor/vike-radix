// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

import React, { useContext } from 'react'

import type { PageContext } from './types'

const Context = React.createContext<PageContext>(
  undefined as unknown as PageContext
)

export const PageContextProvider: React.FC<
  React.PropsWithChildren<{ pageContext: PageContext }>
> = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export const usePageContext = () => {
  const pageContext = useContext(Context)
  return pageContext
}
