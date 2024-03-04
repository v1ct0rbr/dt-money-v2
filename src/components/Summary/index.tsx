import { ArrowDownCircle, ArrowUpCircle, DollarSign } from "lucide-react";
import { useTheme } from "styled-components";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {

    const theme = useTheme()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowUpCircle size={32} color={theme["green-300"]} />
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowDownCircle size={32} color={theme["red-300"]} />
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <DollarSign size={32} color={theme["white"]} />
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}