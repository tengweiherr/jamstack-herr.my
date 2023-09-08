import { MediumStory } from '../types'

export const fetchAllStories = async (): Promise<MediumStory[] | undefined> => {
  const res = await fetch('/api/medium')
  const resInJSON = await res.json()
  return resInJSON?.items
}
