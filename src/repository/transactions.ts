import { Transaction } from "../pages/Transactions";

const limitPerPage = 5;


interface TransactionResponse {
    data: Transaction[],
    first: number,
    prev: number | null,
    next: number | null,
    last: number | null,
    pages: number,
    items: number,
    
}

export default function useTransactionsRepository() {
    async function getTransactions(page: number, title = ''): Promise<TransactionResponse>  {
        const resquestURL = `http://localhost:3000/transactions?${title ? `title=${title}` : ''}&_page=${page}&_per_page=${limitPerPage}`;
        console.log(resquestURL);
        const response = await fetch(resquestURL);             
        return response.json();
    }

    async function createTransaction(transaction: Transaction) {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        });
        return response.json();
    }
    
    return {
        getTransactions,
        createTransaction
    };
}