import parse from 'rss-to-json'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (
    process.env.NODE_ENV !== 'development' &&
    (req.headers.get('referer') === null ||
      !req.headers.get('referer')?.includes('herr.my'))
  ) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const result = await parse('https://medium.com/feed/@tengweiherr')

  return NextResponse.json(result)
}
