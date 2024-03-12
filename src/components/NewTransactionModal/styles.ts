import * as Dialog from '@radix-ui/react-dialog';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';

import styled, { css } from 'styled-components';


export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;

`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 0.25rem;
    padding: 2.5rem 3rem;
    background: ${props => props.theme['gray-800']};
    position: fixed;
    top: 50%;
    left: 50%; 
    z-index: 1000;
    transform: translate(-50%, -50%);
    form {
        margin-top: 2rem;  
        display: flex;  
        flex-direction: column;
        gap: 1rem;
        input {
            padding: 1rem;
            border: 0;
            border-radius: 0.25rem;
            ${({ theme }) => css`
            background: ${theme['gray-900']};
            color: ${theme['gray-300']};
            border: 1px solid ${theme['gray-900']};
        `
    }
            
            transition: background-color 0.5s;
            &::placeholder{
                color: ${props => props.theme['gray-500']};
            }
        }
        button[type="submit"] {
            margin-top: 1.5rem;
            height: 3rem;
            border: 0;
            border-radius: 0.25rem;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            cursor: pointer;
            &:hover { 
                background: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }

    }
    
    
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute; 
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};
`
export const TransactionType = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`


export const TransactionTypeContainer = styled(RadioGroup)`

`

interface TransactionTypeButtonProps {
    mode: 'deposit' | 'withdraw'
}

export const TransactionTypeButton = styled(RadioGroupItem)<TransactionTypeButtonProps>`
    
    ${({theme, mode}) => css`
        color: ${ mode === 'deposit' ? theme['green-300'] : theme['red-300']};
        background:  ${theme['gray-700']};        
    `}

    &[data-state="unchecked"]:hover {
        
        background: ${props => props.theme['gray-600']};
        transition: background-color 0.2s;
    }
    &[data-state="checked"] {
        ${({theme, mode}) => css`
            background:   ${ mode === 'deposit' ? theme['green-500'] : theme['red-700']};
            color: ${theme['white']};
        `}
    }

    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    

`

