import ReactPaginate from 'react-paginate';
import { useState, useEffect, useRef } from "react";

//https://github.com/AdeleD/react-paginate/issues/501

interface PaginateProps<T> {
    //datas: [],
    datas: Array<T>,
    itemsPerPage: number,
    //onDataChange?(currentDatas: any[]): void;
    onDataChange?(currentDatas: Array<T>): void;
}

const Paginate: React.FC<PaginateProps<any>> = ({
    datas, itemsPerPage, onDataChange
}) => {
    const isInitialRender = useRef(true); // 用于标记是否是首次渲染
    //const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(Math.ceil(datas.length / itemsPerPage));
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        const itemOffset = 0;
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = datas.slice(itemOffset, endOffset);
        if (onDataChange) {
            onDataChange(currentItems);
            console.log("currentItems length:" + currentItems.length);
        }
    }, [])
    return (
        <div>
            <ReactPaginate
                onPageChange={(event) => {
                    //console.log("datas.length:" + datas.length);
                    const newOffset = (event.selected * itemsPerPage) % datas.length;
                    console.log(
                        `User requested page number ${event.selected}, which is offset ${newOffset}`
                    );
                    const endOffset = newOffset + itemsPerPage;
                    //console.log("onDataChange newOffset:" + newOffset);
                    //console.log("onDataChange endOffset:" + endOffset);
                    const currentItems = datas.slice(newOffset, endOffset);
                    if (onDataChange) {
                        onDataChange(currentItems);
                        //console.log("onDataChange currentItems length:" + currentItems.length);
                    }
                }}
                className="flex items-center justify-center"
                pageCount={pageCount}
                forcePage={pageCount - 1}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                breakLabel="..."
                breakClassName="m-2 h-7 w-7 flex justify-center"
                containerClassName={"wif-pagination"}
                pageClassName="m-4 h-7 w-7 flex justify-center items-center ring-0 ring-inset ring-gray-300 -ml-[1px]"
                pageLinkClassName="leading-1"
                activeClassName="bg-wif-orange-2 text-white ring-0 bg-black"
                //previousClassName="relative inline-flex items-center rounded-l-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                previousClassName="m-4 relative inline-flex items-center rounded-l-md p-2 text-gray-400 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                //nextClassName="relative inline-flex items-center rounded-r-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
export default Paginate;