import { MediumStory } from '../types'

export const fetchAllStories = async (): Promise<MediumStory[] | undefined> => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.herr.my'
  const res = await fetch(baseUrl + '/api/medium')
  const resInJSON = await res.json()
  return resInJSON?.items
}
