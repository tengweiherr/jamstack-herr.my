import CustomError from "@/components/Molecules/CustomError"
import { NextPageContext } from "next"
import { ErrorProps } from "next/error"

const ErrorPage = ({ statusCode }:ErrorProps) => {
    return (
      <CustomError statusCode={statusCode} />
    )
  }

ErrorPage.getInitialProps = ({ res, err }:NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
  
export default ErrorPage