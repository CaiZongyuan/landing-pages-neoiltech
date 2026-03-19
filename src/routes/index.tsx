import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/features/ref-clone/pages/HomePage'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: 'dona',
      },
    ],
  }),
})
