// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const errorResponse = () => new Response("Error message", {
  status: 400,
});

export default errorResponse