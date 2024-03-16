import { ThreeCircles } from 'react-loader-spinner'
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme['gray-700']};
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  .wrapperStyle {
    width: 100%;
    height: 100%;
  }
  .wrapperClass {
    width: 100%;
    height: 100%;
  }
`

export const AudioSpinner = styled(ThreeCircles).attrs(({ theme }) => ({
  color: theme['green-500'],
  wrapperStyle: { width: '100%', height: '100%' },
  wrapperClass: 'wrapperClass',
}))`
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const LoadingText = styled.p`
  font-size: 1.5rem;
`
