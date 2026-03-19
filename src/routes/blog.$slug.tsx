import { createFileRoute } from '@tanstack/react-router'
import { BlogPostPage } from '#/features/ref-clone/pages/BlogPostPage'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogSlugRoute,
})

function BlogSlugRoute() {
  const { slug } = Route.useParams()

  return <BlogPostPage slug={slug} />
}
