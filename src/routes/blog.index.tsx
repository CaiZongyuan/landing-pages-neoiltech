import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '#/features/ref-clone/pages/BlogPage'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  head: () => ({
    meta: [
      {
        title: 'AstraFlow Blog',
      },
    ],
  }),
})
