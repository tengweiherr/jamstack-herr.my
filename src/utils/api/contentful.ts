import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/utils/const'

const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`

const getOptions = (query: string) => ({
  method: 'POST',
  headers: {
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
})

async function fetchMyData() {
  const query = `{
        aboutCollection {
          items {
            paragraph1
            paragraph2
            paragraph3
            techStack
            resume
            image1
            image2
          }
        }
    }`

  try {
    const res = await fetch(CONTENTFUL_ENDPOINT, getOptions(query))
    const resInJSON = await res.json()
    return resInJSON.data.aboutCollection.items[0]
  } catch (error) {
    return
  }
}

async function fetchExp() {
  const query = `{
        experienceCollection {
            items {
                role
                company
                companyUrl
                startTime
                endTime
                description
            }
        }
    }`

  try {
    const res = await fetch(CONTENTFUL_ENDPOINT, getOptions(query))
    const resInJSON = await res.json()
    return resInJSON.data.experienceCollection.items
  } catch (error) {
    return []
  }
}

export { fetchMyData, fetchExp }
