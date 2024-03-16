import {
  AudioSpinner,
  Container,
  LoadingAnimation,
  LoadingText,
} from './styles'

export function Loading() {
  return (
    <Container>
      <LoadingAnimation>
        <AudioSpinner height="80" width="80" ariaLabel="loading" />
      </LoadingAnimation>
      <h1>Loading...</h1>
      <LoadingText>Fetching data from the server</LoadingText>
    </Container>
  )
}
