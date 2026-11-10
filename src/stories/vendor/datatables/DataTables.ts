import type { DataTablesColumn, DataTablesRow } from './data';

//import 'datatables.net-dt/css/jquery.dataTables.css';

import DataTable from 'datatables.net-dt';

export interface DataTablesProps {
  data?: DataTablesRow[];
  columns?: DataTablesColumn[];
  search?: boolean;
  pagination?: boolean;
  ordering?: boolean;
  select?: boolean;
  pageLength?: number;
  info?: boolean;
  lengthChange?: boolean;
}

export const createDataTable = ({
  data = [],
  columns = [],
  search = false,
  pagination = true,
  ordering = true,
  select = false,
  pageLength = 10,
  info = true,
  lengthChange = true,
}: DataTablesProps): HTMLElement => {
  const tableId = `datatable-${Math.random().toString(36).substr(2, 9)}`;

  const componentHtml = `
    <table id="${tableId}" class="display w-full" style="width: 100%">
      <thead>
        <tr>
          ${columns.map((col) => `<th>${col.title}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${data
          .map(
            (row) => `
          <tr>
            ${columns.map((col) => `<td>${row[col.data] || ''}</td>`).join('')}
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `;

  const element = document.createElement('div');
  element.className = 'w-full overflow-x-auto';
  element.innerHTML = componentHtml;

  const options = {
    paging: pagination,
    searching: search,
    ordering: ordering,
    select: select,
    info: pagination && info,
    lengthChange: pagination && lengthChange,
    pageLength: pageLength,
    language: {
      search: '_INPUT_',
      searchPlaceholder: 'Search...',
    },
  };

  setTimeout(() => {
    new DataTable(`#${tableId}`, options);
  }, 0);

  return element;
};
