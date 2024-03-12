import React from 'react';
import { HeaderContainer, HeaderLogo, HeaderLogoText, HeaderContent, HeaderLogoIcon, NewTransactionButton } from './styles';
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo>
                    <HeaderLogoIcon src={logoImg} alt="dt money" />
                    <HeaderLogoText>dt money</HeaderLogoText>
                </HeaderLogo>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
};

export default Header;