import ICON_LINKEDIN from 'public/linked.svg'
import ICON_GITHUB from 'public/github.svg'
import ICON_BEHANCE from 'public/behance.svg'
import ICON_INSTAGRAM from 'public/ig.svg'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
// const CONTENTFUL_PREVIEW_SECRET = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

const AWS_S3_PREFIX = 'https://s3.amazonaws.com/assets.herr.my/'
const AWS_CLOUDFRONT_PREFIX = 'https://dzhcg7398kr2k.cloudfront.net/'

const ICON = {
  linkedIn: ICON_LINKEDIN,
  github: ICON_GITHUB,
  behance: ICON_BEHANCE,
  instagram: ICON_INSTAGRAM,
}

const EMAIL_LINK = 'weiherrteng@gmail.com'
const BEHANCE_LINK = 'https://www.behance.net/herrstudio'
const MEDIUM_LINK = 'https://medium.com/@tengweiherr'
const GITHUB_LINK = 'https://github.com/tengweiherr'
const RESUME_LINK =
  'https://docs.google.com/document/d/1om2VxDwWsIYzytPMjW8fYrsmzeYiX73Z7-n_LGPGcPc/edit?usp=share_link'

export {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  AWS_S3_PREFIX,
  AWS_CLOUDFRONT_PREFIX,
  ICON,
  EMAIL_LINK,
  BEHANCE_LINK,
  MEDIUM_LINK,
  GITHUB_LINK,
  RESUME_LINK,
}
