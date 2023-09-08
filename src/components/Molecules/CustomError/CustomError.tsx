import More from '@/components/Sections/More'
import {
  FullpageSection,
  PageSubtitle,
  PageTitleSmaller,
} from '@/utils/styled/common.styled'
import { ErrorProps } from 'next/error'

const CustomError = ({ statusCode }: ErrorProps) => {
  const renderErrorTitle = (statusCode: number) => {
    if (statusCode === 404) return 'Sorry, page not found.'
    if (statusCode) return `An error ${statusCode} occurred on server.`
    return 'An error occurred on client.'
  }

  return (
    <FullpageSection className="d-flex flex-column justify-content-center align-items-center w-100">
      <PageTitleSmaller>{renderErrorTitle(statusCode)}</PageTitleSmaller>
      <PageSubtitle>Please kindly check out my other works.</PageSubtitle>
      <More />
    </FullpageSection>
  )
}

export default CustomError
