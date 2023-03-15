export type MyData = {
    paragraph1: string
    paragraph2?: string
    paragraph3?: string
    techStack?: Array<string>
    resume: string
    image1: string
    image2: string
}

export type MyDataSkills = {
    part_1?: Array<string>,
    part_2?: Array<string>
}

export type Sys = {
    id: string
}
  
export type Project = {
    sys: Sys
    title: string
    role: string
    tools: string
    description: string
    githubLink: string
    projectLink?: string
    awardWinning: boolean
    highlighted?: boolean
    image?: string
    priority: number
}

export type Experience = {
    role: string
    company: string
    startTime: string
    endTime: string
    description: string
}

export type ExpExtraProps = {
    startYear?: string
    endYear?: string
    yearInWorking?: string
    monthInWorking?: string
  }

export type MediumStory = {
    id: string
    title: string
    author: string
    link: string
    category: Array<string>
    created: string
    published: string
    media: any
    content: string
    content_encoded: string
    enclosures: Array<any>
}

export type MediumRSSRes = {
    title: string
    description: string
    link: string
    image: string
    category: Array<string>
    items: Array<MediumStory>
}
