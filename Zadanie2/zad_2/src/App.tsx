import { useCallback, useEffect, useState } from 'react';
import { usePagination } from './components/Hooks/usePagination';
import PaginatedTable from './components/PaginatedTable/PaginatedTable';
import Pagination from './components/Pagination/Pagination';
import { data } from './data/data';

export interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const App = () => {
  const [records, setRecords] = useState<ToDo[]>([]);
  const { paginationState, paginationActions } = usePagination(data, 4);

  const updateRecords = useCallback(() => {
    setRecords(paginationState.entriesOnSelectedPage());
    console.log(records);
  }, [paginationState.actualPageIdx]);

  useEffect(() => {
    updateRecords();
  }, [paginationState.actualPageIdx]);

  if (paginationState.isBusy) {
    return <h2>ŁADOWANIE</h2>;
  }

  return (
    <div>
      <PaginatedTable dataEntries={records} />
      <Pagination
        paginationState={paginationState}
        paginationActions={paginationActions}
        updateRecords={updateRecords}
      />
    </div>
  );
};

export default App;
