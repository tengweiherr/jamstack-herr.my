import { NextApiRequest, NextApiResponse } from 'next'
import parse from 'rss-to-json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await parse('https://medium.com/feed/@tengweiherr')

  res.status(200).json(result)
}
