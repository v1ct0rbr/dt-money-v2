import React from 'react';
import Header from '../../components/Header';
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

const Transactions: React.FC = () => {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>tipo</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de website</td>
                            <td className="deposit">
                                <PriceHighlight variant='deposit'>
                                    R$12.000
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>20/02/2021</td>
                        </tr>
                        <tr>
                            <td>Aluguel</td>
                            <td>
                                <PriceHighlight variant='withdraw'>
                                    - R$1.000
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>17/02/2021</td>
                        </tr>
                        <tr>
                            <td>Salário</td>
                            <td>
                                <PriceHighlight variant='deposit'>
                                    R$5.700
                                </PriceHighlight>

                            </td>
                            <td>Salário</td>
                            <td>17/02/2021</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
};

export default Transactions;