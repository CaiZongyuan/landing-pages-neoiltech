// @vitest-environment node

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('HomePage household agent visual refresh contracts', () => {
  it('imports the three local AIGC image assets and keeps core landing interactions', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/HomePage.tsx'),
      'utf8',
    )
    const primitives = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/components/Primitives.tsx'),
      'utf8',
    )

    expect(source).toContain("from '../../../../assets/01.webp'")
    expect(source).toContain("from '../../../../assets/02.webp'")
    expect(source).toContain("from '../../../../assets/03.webp'")
    expect(source).toContain('const [mobileMenuOpen, setMobileMenuOpen] = useState(false)')
    expect(source).toContain('const [activeFaq, setActiveFaq] = useState(0)')
    expect(source).toContain('const [waitlistState, setWaitlistState] = useState')
    expect(primitives).toContain('role="dialog"')
    expect(source).toContain('data-testid="waitlist-form"')
    expect(source).toContain('Act 2')
    expect(source).toContain('Act 3')
  })

  it('rewrites the homepage around invisible load, world model planning, and low-friction capture', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/HomePage.tsx'),
      'utf8',
    )

    expect(source).toContain('The household does not break because information is missing')
    expect(source).toContain('She carries the routing, remembering, and invisible recovery work')
    expect(source).toContain('family world model')
    expect(source).toContain('people, places, time, tasks, and conflicts')
    expect(source).toContain('voice note or a quick photo')
    expect(source).toContain('You keep living. AstraFlow handles the complexity.')
  })
})
