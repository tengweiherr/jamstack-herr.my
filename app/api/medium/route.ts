import parse from 'rss-to-json'

import { NextResponse } from 'next/server'

export async function GET() {
  const result = await parse('https://medium.com/feed/@tengweiherr')

  return NextResponse.json(result)
}
