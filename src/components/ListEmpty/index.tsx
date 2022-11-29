import * as S from "./styles"

type Props = {
  message: string
}

export function ListEmpty({ message }: Props) {
  return (
    <S.Container>
      <S.Messsage>{message}</S.Messsage>
    </S.Container>
  )
}