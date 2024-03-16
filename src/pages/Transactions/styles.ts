import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-radius: 0.25rem;
  border-spacing: 0 0.5rem;

  thead {
    th {
      padding: 1.25rem 2rem;
      background-color: ${(props) => props.theme['gray-900']};
      color: var(--text-body);
      font-weight: 400;

      text-align: left;
      line-height: 1.5rem;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }

  tbody {
    tr {
      /* transition: filter 0.2s; */
      background: ${(props) => props.theme['gray-700']};
      transition: background 0.5s;

      &:hover {
        /* filter: brightness(0.9); */
        background: ${(props) =>
          props.theme[
            'gray-600'
          ]}; // Add this line to change the background color on hover
      }

      td {
        padding: 1.25rem 2rem;
        border: 0;
        &:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        &:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        &.withdraw {
          color: ${(props) => props.theme['red-300']};
        }

        &.deposit {
          color: ${(props) => props.theme['green-300']};
        }

        button {
          background: none;
          border: none;
          color: ${(props) => props.theme['gray-300']};
          transition: filter 0.2s;
          cursor: pointer;
          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'deposit' | 'withdraw'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'deposit' ? theme['green-300'] : theme['red-300']};
  `}
`
