import React, { useState } from 'react';
import { usePagination } from '../Hooks/usePagination';

// @ts-expect-error BRAK CZASU ZEBY OTYPOWAC

const Pagination = ({ paginationState, paginationActions, updateRecords }) => {
  const [number, setNumber] = useState('0');
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <p
            className="text-sm font-medium leading-none mr-3"
            onClick={() => {
              paginationActions.goToFirstPage();
              updateRecords();
            }}
          >
            First Page
          </p>
        </div>
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p
            className="text-sm ml-3 font-medium leading-none "
            onClick={() => {
              paginationActions.goToPrevPage();
              updateRecords();
            }}
          >
            Previous
          </p>
        </div>
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <input
            type="number"
            value={number}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleNumber0"
            placeholder="Number input"
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => {
              paginationActions.goToPage(parseInt(number));
              updateRecords();
            }}
          >
            Go to Page
          </button>
        </div>
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <p
            className="text-sm font-medium leading-none mr-3"
            onClick={() => {
              paginationActions.goToNextPage();
              updateRecords();
            }}
          >
            Next
          </p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <p
            className="text-sm font-medium leading-none mr-3"
            onClick={() => {
              paginationActions.goToLastPage();
              updateRecords();
            }}
          >
            Last Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
