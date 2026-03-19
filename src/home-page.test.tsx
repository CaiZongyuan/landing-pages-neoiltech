// @vitest-environment node

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('HomePage landing refresh contracts', () => {
  it('adds stateful mobile navigation, faq, and waitlist demo interactions', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/HomePage.tsx'),
      'utf8',
    )
    const primitives = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/components/Primitives.tsx'),
      'utf8',
    )

    expect(source).toContain('const [mobileMenuOpen, setMobileMenuOpen] = useState(false)')
    expect(primitives).toContain("role=\"dialog\"")
    expect(primitives).toContain('aria-label={mobileMenuTitle ?? copy.defaultMenuTitle}')
    expect(source).toContain('const [activeFaq, setActiveFaq] = useState(0)')
    expect(source).toContain('const [waitlistState, setWaitlistState] = useState')
    expect(source).toContain('Why not another family assistant?')
    expect(source).toContain('Work email')
    expect(source).toContain('We will share the next product notes and access updates here.')
  })

  it('adds BP-aligned sections beyond the original hero and three-card layout', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/HomePage.tsx'),
      'utf8',
    )

    expect(source).toContain('Capture → Structure → Route → Execute')
    expect(source).toContain('Household Gateway')
    expect(source).toContain('EaseFlows')
    expect(source).toContain('execution ownership')
    expect(source).toContain('Why now')
    expect(source).toContain('Frequently asked before you trust a system like this')
  })
})
