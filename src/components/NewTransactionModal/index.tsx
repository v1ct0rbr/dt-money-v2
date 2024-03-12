import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDownCircle, ArrowUpCircle, X } from "lucide-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton, TransactionTypeContainer } from "./styles";

export function NewTransactionModal() {




    return (

        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton><X /> </CloseButton>
                <form>
                    <input type="text" placeholder="Título" />
                    <input type="number" placeholder="Valor" />
                    <input type="text" placeholder="Categoria" />
                    <input type="date" placeholder="Data" />
                    <TransactionTypeContainer>
                        <TransactionType>
                            <TransactionTypeButton value="deposit" mode="deposit" type="button"  ><ArrowUpCircle size={24} />Depositar</TransactionTypeButton>
                            <TransactionTypeButton value="withdraw" mode="withdraw" type="button"  ><ArrowDownCircle size={24} />Retirar</TransactionTypeButton>
                        </TransactionType>
                    </TransactionTypeContainer>
                    <button type="submit">Cadastrar</button>
                </form>


            </Content>
        </Dialog.Portal>

    )
}