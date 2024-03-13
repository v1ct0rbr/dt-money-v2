import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import ReactPaginate from "react-paginate";




export interface ClickEvent extends React.MouseEvent<HTMLAnchorElement> {
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
    pageCount: number
    handleChangePage: (event: ClickEvent) => void
}

export function Pagination({ pageCount, handleChangePage }: PaginationProps) {
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowRightIcon size={24} />}
                onPageChange={handleChangePage}
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

