import { ReactNode } from "react"
import { BodyContainer } from "./Body.styled"

type BodyProps = {
    children: ReactNode
}

export default function Body({ children }:BodyProps) {
    return (
        <BodyContainer>
          {children}
        </BodyContainer>
    )
}