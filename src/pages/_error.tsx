import { NextPageContext } from 'next'
import { ErrorProps } from 'next/error'

const renderErrorTitle = (statusCode?: number) => {
  if (statusCode === 404) return 'Sorry, page not found.'
  if (statusCode) return `An error ${statusCode} occurred on server.`
  return 'An error occurred on client.'
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center w-100"
      style={{ minHeight: '60vh', padding: '4rem 2rem' }}
    >
      <h2 className="display-5" style={{ fontWeight: 600 }}>
        {renderErrorTitle(statusCode)}
      </h2>
    </section>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
