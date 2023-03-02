export type Asset = {
    url: string
    width?: number
    height?: number
}

export type MyData = {
    paragraph1: string
    paragraph2?: string
    paragraph3?: string
    techStack?: Array<string>
    resume?: Asset
}
  
export type Project = {
    title: string
    role: string
    tools: string
    description: string
    githubLink: string
    projectLink?: string
    awardWinning: boolean
    highlighted: boolean
    image: Asset
}

export type Experience = {
    role: string
    company: string
    startTime: string
    endTime: string
    description: string
}


  
