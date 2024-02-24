import { Case, CaseType } from "@/types";
import CaseItem from "@/components/case-item";
//import Paginate from "@/components/ui/paginate";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";

interface CaseListProps {
    cases: Case[],
    itemsPerPage: number,
    tabChanged?: boolean,
}

const CaseList: React.FC<CaseListProps> = ({
    cases, itemsPerPage, tabChanged
}) => {
    //const [currentItems, setCurrentItems] = useState<Case[]>(cases);
    //console.log("dataType:" + dataType);
    const [itemOffset, setItemOffset] = useState(0);
    //const [needReload_, setNeedReload_] = useState(needReload);
    const [currentPage, setCurrentPage] = useState(0);
    //const [initialPageIndex, setInitialPageIndex] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    /*console.log("itemOffset:" + itemOffset);
    console.log("endOffset:" + endOffset);
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);*/
    let currentItems = cases.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(cases.length / itemsPerPage);
    useEffect(() => {
        //console.log("tabChanged:"+tabChanged);
        setItemOffset(0);
        setCurrentPage(0);
    }, [tabChanged]);// when the categoryInput changes, the pagination will be reset back to 0*/
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
            {/* <Paginate datas={cases} itemsPerPage={itemsPerPage} onDataChange={(currentDatas) => {
                setCurrentItems(currentDatas);
            }} /> */}
            <ReactPaginate
                onPageChange={(event) => {
                    const newOffset = (event.selected * itemsPerPage) % cases.length;
                    //console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
                    setItemOffset(newOffset);
                }}
                className="flex items-center justify-center"
                pageCount={pageCount}
                forcePage={currentPage}
                initialPage={currentPage}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                breakLabel="..."
                breakClassName="m-2 h-7 w-7 flex justify-center"
                containerClassName={"wif-pagination"}
                pageClassName="m-4 h-7 w-7 flex justify-center items-center ring-0 ring-inset ring-gray-300 -ml-[1px]"
                pageLinkClassName="leading-1"
                activeClassName="bg-wif-orange-2 text-white ring-0 bg-black"
                previousClassName="m-4 relative inline-flex items-center rounded-l-md p-2 text-gray-400 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                nextClassName="m-4 relative inline-flex items-center rounded-r-md p-2 text-gray-400 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                previousLabel={
                    <>
                        <span className="sr-only">Previous</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </>
                }
                nextLabel={
                    <>
                        <span className="sr-only">Next</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </>
                }
            />
        </div>
    );
}
export default CaseList;