import handler from '@tanstack/react-start/server-entry'

const worker = {
  fetch: handler.fetch,
}

export default worker
