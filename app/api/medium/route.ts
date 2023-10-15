import parse from 'rss-to-json'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  console.log(req.headers.get('referer'))
  if (
    req.headers.get('referer') === null ||
    !req.headers.get('referer')?.includes(String(process.env.BASE_FETCH_URL))
  ) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const result = await parse('https://medium.com/feed/@tengweiherr')

  return NextResponse.json(result)
}
