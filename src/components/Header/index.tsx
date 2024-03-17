import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLogoIcon,
  HeaderLogoText,
  NewTransactionButton,
} from './styles'

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <HeaderLogoIcon src={logoImg} alt="dt money" />
          <HeaderLogoText>dt money</HeaderLogoText>
        </HeaderLogo>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal handleClose={handleClose} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
