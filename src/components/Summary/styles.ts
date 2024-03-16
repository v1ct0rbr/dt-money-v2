import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green' | 'red' | 'default'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ variant, theme }) =>
    variant === 'green'
      ? theme['green-500']
      : variant === 'red'
        ? theme['red-500']
        : theme['gray-600']};
  border-radius: 0.25rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`
