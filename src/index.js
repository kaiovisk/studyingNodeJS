//All the comments will be dissecting the code, so I can actually learn something. After all, this is a study repo.

import http, { createServer } from 'node:http'
import handleRequest from './handler.js'

const PORT = process.env.PORT || 3000

const server = createServer(handleRequest).listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})

export {
  server
}
