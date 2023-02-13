import React, { useState } from 'react';
import { ToDo } from '../../App';

export function usePagination(dataEntries: ToDo[], elementsOnPage = 4) {
  const [actualPageIdx, setActualPageIdx] = useState(1);
  const lastPageIdx = Math.ceil(dataEntries.length / elementsOnPage);
  console.log(dataEntries.length);
  const [isBusy, setIsBusy] = useState(false);

  function entriesOnSelectedPage() {
    const begin = (actualPageIdx - 1) * elementsOnPage;
    const end = begin + elementsOnPage;
    return dataEntries.slice(begin, end);
  }

  function isBusyloder() {
    setIsBusy(true);
    setTimeout(() => {
      setIsBusy(false);
    }, 333);
  }

  function goToNextPage() {
    isBusyloder();
    console.log(actualPageIdx);
    setActualPageIdx((page) => Math.min(page + 1, lastPageIdx));
    console.log(actualPageIdx);
  }

  function goToPrevPage() {
    isBusyloder();
    setActualPageIdx((page) => Math.max(page - 1, 1));
  }

  function goToPage(pageIdx: number) {
    isBusyloder();
    setActualPageIdx((page) => Math.min(pageIdx, lastPageIdx));
  }

  function goToFirstPage() {
    isBusyloder();
    setActualPageIdx(1);
  }

  function goToLastPage() {
    isBusyloder();
    setActualPageIdx(lastPageIdx);
  }

  const paginationState = {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    isBusy,
  };
  const paginationActions = {
    goToFirstPage,
    goToPrevPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  };

  return { paginationState, paginationActions };
}
