export type MyData = {
    paragraph1: string
    paragraph2?: string
    paragraph3?: string
    techStack?: Array<string>
    resume: string
    image1: string
    image2: string
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
    image: string
}

export type Experience = {
    role: string
    company: string
    startTime: string
    endTime: string
    description: string
}


  
