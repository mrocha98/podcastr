import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import * as S from './header.styles'

export const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBr })

  return (
    <S.Wrapper>
      <img src="/img/logo.svg" alt="fones de ouvido" aria-label="podcastr" />

      <S.Description>O melhor para você ouvir, sempre</S.Description>

      <S.Date role="time">{currentDate}</S.Date>
    </S.Wrapper>
  )
}
