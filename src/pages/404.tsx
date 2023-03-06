import CustomError from "@/components/Molecules/CustomError"

const ErrorPage = () => {
    return (
      <CustomError statusCode={404} />
    )
  }
  
export default ErrorPage