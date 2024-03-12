import styled from 'styled-components'


export const SearchFormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    margin: auto;
    margin-top: 2rem;
       

    input {
        flex: 1;
        padding: 1rem;
        border: 0;
        border-radius: 0.25rem;
        border: 1px solid ${props => props.theme['gray-900']};
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        transition: background-color 0.5s;
        &::placeholder{
            color: ${props => props.theme['gray-100']};
        }
    }
    
    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: 1rem;
        padding: 1rem;
        border: 0;
        border-radius: 0.25rem;
        background: transparent;
        color: ${props => props.theme['gray-300']};
        border: 1px solid ${props => props.theme['green-300']};
        font-weight: 600;
       
        cursor: pointer;
        &:hover {
            background: ${props => props.theme['green-500']};
            border-color: ${props=> props.theme['green-500']};
            color: ${props => props.theme['white']};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
       
    }
`
