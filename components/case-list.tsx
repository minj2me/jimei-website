import { Case, CaseType } from "@/types";
import CaseItem from "@/components/case-item";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

interface CaseListProps {
    cases: Case[],
    itemsPerPage: number,
}

const CaseList: React.FC<CaseListProps> = ({
    cases, itemsPerPage
}) => {
    //const itemsPerPage = 1;
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = cases.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(cases.length / itemsPerPage);
    return (
        <div>
            <div className=" grid grid-cols-3 gap-[40px]">
                {
                    currentItems.map((item) => (
                        <CaseItem caseData={item} />
                    ))
                }
            </div>
            <div className=" h-[100px]" />
            <ReactPaginate
                className=" w-[full] bg-slate-200"
                nextLabel="next >"
                //onPageChange={handlePageClick}
                // Invoke when user click to request another page.
                onPageChange={(event) => {
                    const newOffset = (event.selected * itemsPerPage) % cases.length;
                    console.log(
                        `User requested page number ${event.selected}, which is offset ${newOffset}`
                    );
                    setItemOffset(newOffset);
                }}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}
export default CaseList;