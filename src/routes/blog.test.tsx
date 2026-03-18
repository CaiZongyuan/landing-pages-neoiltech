import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { BlogPlaceholderPage } from './blog'

describe('Blog placeholder page', () => {
  it('renders a readable placeholder instead of a 404', () => {
    const html = renderToStaticMarkup(<BlogPlaceholderPage />)

    expect(html).toContain('Field notes are on the way')
    expect(html).toContain('The full blog experience ships in the next slice')
    expect(html).toContain('href=\"/\"')
  })
})
