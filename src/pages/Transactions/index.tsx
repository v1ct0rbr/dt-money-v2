import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import { Summary } from '../../components/Summary';

import useTransactionsRepository from '../../repository/transactions';
import { ClickEvent, Pagination } from './components/Pagination';
import { SearchForm } from './components/SearchForm';
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';



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

    const [items, setItems] = React.useState<Transaction[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = React.useState(1);

    const [pageCount, setPageCount] = React.useState(0);
    const [itemsTotal, setItemsTotal] = React.useState(0);
    const transactionsRepo = useTransactionsRepository();
    const [filter, setFilter] = React.useState('');

    const fetchItems = async () => {
        const res = transactionsRepo.getTransactions(currentPage, filter);
        res.then(({ data, items, pages }) => {

            setItems(data);
            setItemsTotal(items);
            setPageCount(pages)
        })
    }


    React.useEffect(() => {

        fetchItems();

    }, [offset])

    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('searching')
        setCurrentPage(1);
        fetchItems();
    }

    const handleChangePage = (event: ClickEvent) => {
        const newOffset = ((event.selected + 1) * perPage);
        setCurrentPage(event.selected + 1);
        setOffset(newOffset);
    };

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm filter={filter} handleChangeFilter={handleChangeFilter} handleSearchSubmit={handleSearchSubmit} />
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
                        {items && items.map((item) => (
                            <tr key={item.id}>
                                <td width="50%">{item.title}</td>
                                <td>
                                    <PriceHighlight variant={item.type}>
                                        {item.amount}
                                    </PriceHighlight>
                                </td>

                                <td>{item.category}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>
                <div className='pagination'>
                    <Pagination pageCount={pageCount} handleChangePage={(e) => handleChangePage(e)} />
                    <h2>Total de Items: {itemsTotal}</h2>
                </div>
            </TransactionsContainer>
        </div>
    );
};

export default Transactions;