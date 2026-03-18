import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { HomePage } from './index'

describe('AstraFlow home page', () => {
  it('renders the AstraFlow hero with clear positioning and CTA links', () => {
    const html = renderToStaticMarkup(<HomePage />)

    expect(html).toContain('AstraFlow')
    expect(html).toContain('The family Life OS')
    expect(html).toContain('Join the waitlist')
    expect(html).toContain('Read the blog')
    expect(html).toContain('href=\"#waitlist\"')
    expect(html).toContain('href=\"/blog\"')
  })

  it('renders the core narrative sections for the landing page MVP', () => {
    const html = renderToStaticMarkup(<HomePage />)

    expect(html).toContain('Why family coordination breaks down')
    expect(html).toContain('How AstraFlow works')
    expect(html).toContain('A calmer operating layer for home')
    expect(html).toContain('Human control, privacy, and trust')
    expect(html).toContain('Latest field notes')
    expect(html).toContain('Start with the waitlist')
  })
})
