export type Experience = {
  role: string
  companyUrl: string
  company: string
  companyLogoUrl?: string | null
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
