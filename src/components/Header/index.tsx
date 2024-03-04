import React from 'react';
import { HeaderContainer, HeaderLogo, HeaderLogoText, HeaderContent, HeaderLogoIcon, NewTransactionButton } from './styles';
import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo>
                    <HeaderLogoIcon src={logoImg} alt="dt money" />
                    <HeaderLogoText>dt money</HeaderLogoText>
                </HeaderLogo>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
};

export default Header;