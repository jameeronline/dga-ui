import DataTable from 'datatables.net-dt';

export const createDataTable = ({ data = [], columns = [], search = false, pagination = true, ordering = true, select = false }) => {
  const tableId = `datatable-${Math.random().toString(36).substr(2, 9)}`;

  const columnDefs = columns.map((col) => ({
    targets: columns.indexOf(col),
    render: (data, type) => {
      if (type === 'filter') {
        return data || '';
      }
      return data || '';
    },
  }));

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
    info: pagination,
    lengthChange: pagination,
    pageLength: 5,
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
