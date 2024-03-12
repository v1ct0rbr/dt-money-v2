import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import ReactPaginate from "react-paginate";
import { Transaction } from "../..";
import { PriceHighlight, TransactionsTable } from "../../styles";




interface ClickEvent extends React.MouseEvent<HTMLAnchorElement> {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;

}

interface PaginationProps {
    itemsPerPage: number
    itemsTotal: number
    itemOffset: number
    setOffset: (offset: number) => void
    items: Transaction[]
}


function getItems(items: Transaction[]) {
    return (
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
                {items.map((item) => (
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


    )
}


export function Pagination({ items, itemsPerPage, itemsTotal, itemOffset, setOffset }: PaginationProps) {


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const pageCount = Math.ceil(itemsTotal / itemsPerPage);




    const handlePageClick = (event: ClickEvent) => {
        const newOffset = (event.selected * itemsPerPage) % itemsTotal;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setOffset(newOffset);
    };





    return (
        <>
            {getItems(items)}
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowRightIcon size={24} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel={<ArrowLeftIcon size={24} />}
                renderOnZeroPageCount={null}
                previousClassName="previous"
                nextClassName="next"
                activeClassName="active"



            />
        </>
    );
}

