import * as S from './player.styles'

// export type PlayerProps = {}

export const Player = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <img src="/img/playing.svg" alt="Fones de ouvido" />
        <S.Strong>Tocando agora</S.Strong>
      </S.Header>

      <S.Empty>
        <S.Strong>Selecione um podcast para ouvir</S.Strong>
      </S.Empty>

      <S.Footer isEmpty>
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            <S.EmptySlider />
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        <S.ButtonsContainer>
          <S.Button type="button">
            <img src="img/shuffle.svg" alt="Embaralhar" />
          </S.Button>
          <S.Button type="button">
            <img src="img/play-previous.svg" alt="Tocar anterior" />
          </S.Button>
          <S.PlayButton type="button">
            <img src="img/play.svg" alt="Tocar" />
          </S.PlayButton>
          <S.Button type="button">
            <img src="img/play-next.svg" alt="Tocar próxima" />
          </S.Button>
          <S.Button type="button">
            <img src="img/repeat.svg" alt="Repetir" />
          </S.Button>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Wrapper>
  )
}
