import ReactPaginate from 'react-paginate'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  justify-content: space-between;

  h2 {
    margin: 0px;
    padding: 0px;
    margin-top: 2rem;
  }
`

export const PaginationComponent = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  li {
    display: flex;
    justify-content: center;
    border-radius: 0.25rem;
    ${({ theme }) => css`
      background: ${theme['gray-900']};
      color: ${theme['gray-300']};
    `}

    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.5s;

    &:active {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
      outline: none;
    }

    &:hover {
      background: ${(props) => props.theme['gray-800']};
      transition: background-color 0.2s;
    }

    a {
      outline-style: none;
      border: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .previous,
  .next {
    width: 3rem;
    height: 2.5rem;
  }

  .active {
    ${({ theme }) => css`
      background: ${theme['green-500']};
      border-color: ${theme['gray-900']};
      color: ${theme.white};
    `}
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
