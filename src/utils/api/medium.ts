import { MediumStory } from '../types'

export const fetchAllStories = async (): Promise<MediumStory[] | undefined> => {
  const res = await fetch(process.env.BASE_FETCH_URL + '/api/medium')
  const resInJSON = await res.json()
  return resInJSON?.items
}
