import { hydrateRoot } from 'react-dom/client'

import { PageShell } from './page-shell'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
export const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext

  if (!Page) {
    throw new Error(
      'Client-side render() hook expects pageContext.Page to be defined'
    )
  }

  const root = document.getElementById('root')
  if (!root) {
    throw new Error('DOM element #react-root not found')
  }

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

export const clientRouting = true
