import { useMemo } from 'react';
import { ToDo } from '../../App';
import Pagination from '../Pagination/Pagination';

function PaginatedTable(dataEntries: { dataEntries: ToDo[] }) {
  const rows = dataEntries.dataEntries;
  const allRows = useMemo(
    () =>
      rows.map((row) => {
        return (
          <tr>
            <td className="border px-8 py-4">{row.id}</td>
            <td className="border px-8 py-4">{row.todo}</td>
            <td className="border px-8 py-4">{row.completed ? 'Yes' : 'No'}</td>
          </tr>
        );
      }),
    [rows]
  );

  return (
    <table className="shadow-lg bg-white border-collapse w-100%">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Id</th>
          <th className="bg-blue-100 border text-left px-8 py-4">ToDo</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Completed</th>
        </tr>
      </thead>
      <tbody>{allRows}</tbody>
    </table>
  );
}

export default PaginatedTable;
