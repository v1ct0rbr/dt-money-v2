import React from 'react';
import Header from '../../components/Header';
import { Summary } from '../../components/Summary';

import { Pagination } from './components/Pagination';
import { SearchForm } from './components/SearchForm';
import { TransactionsContainer } from './styles';



export type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: 'deposit' | 'withdraw';
    category: string;
    createdAt: string;
}

const perPage = 5

const Transactions: React.FC = () => {

    const [items, setItems] = React.useState<Transaction[]>(

        [
            {
                id: 1,
                title: 'Desenvolvimento de website',
                amount: 12000,
                type: 'deposit',
                category: 'Venda',
                createdAt: '20/02/2021'
            },
            {
                id: 2,
                title: 'Aluguel',
                amount: 1000,
                type: 'withdraw',
                category: 'Aluguel',
                createdAt: '17/02/2021'
            },
            {
                id: 3,
                title: 'Salário',
                amount: 5700,
                type: 'deposit',
                category: 'Salário',
                createdAt: '17/02/2021'
            }
        ]

    )
    const [offset, setOffset] = React.useState(0);

    // const [currentPage, setCurrentPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(5);
    const [itemsTotal, setItemsTotal] = React.useState(10);


    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />


                <Pagination items={items} itemOffset={offset} itemsPerPage={perPage} itemsTotal={itemsTotal} setOffset={setOffset} />
            </TransactionsContainer>
        </div>
    );
};

export default Transactions;