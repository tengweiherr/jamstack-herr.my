import { TextContainer, Button, SeperateLineContainer } from './common.styled'

type SeperateLineProps = {
    width?: number | string
}

const SeperateLine = ({width}:SeperateLineProps) => (
    <SeperateLineContainer>
        <span>
            <hr style={{width:width}}/>
        </span>
    </SeperateLineContainer>
)

export {
    TextContainer,
    Button,
    SeperateLine
}