import { NotFoundText, NotFoundWrapper } from './NotFoundMessage.styles'

const NotFoundMessage = ({ text }: { text: string }) => {
  return (
    <NotFoundWrapper>
      <NotFoundText>{text}</NotFoundText>
    </NotFoundWrapper>
  )
}

export default NotFoundMessage
