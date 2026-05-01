export interface DataTablesColumn {
  title: string;
  data: string;
}

export interface DataTablesRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  [key: string]: string | number;
}

export const tableData: DataTablesRow[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    joined: '2023-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'Active',
    joined: '2023-02-20',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    role: 'Viewer',
    status: 'Inactive',
    joined: '2023-03-10',
  },
  {
    id: 4,
    name: 'Michael Green',
    email: 'm.green@example.com',
    role: 'Editor',
    status: 'Active',
    joined: '2023-04-05',
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Admin',
    status: 'Active',
    joined: '2023-05-12',
  },
  {
    id: 6,
    name: 'Chris Johnson',
    email: 'c.johnson@example.com',
    role: 'Viewer',
    status: 'Pending',
    joined: '2023-06-18',
  },
  {
    id: 7,
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    role: 'Editor',
    status: 'Active',
    joined: '2023-07-22',
  },
  {
    id: 8,
    name: 'Robert Brown',
    email: 'r.brown@example.com',
    role: 'Viewer',
    status: 'Inactive',
    joined: '2023-08-30',
  },
  {
    id: 9,
    name: 'Laura Wilson',
    email: 'laura.w@example.com',
    role: 'Admin',
    status: 'Active',
    joined: '2023-09-14',
  },
  {
    id: 10,
    name: 'David White',
    email: 'd.white@example.com',
    role: 'Editor',
    status: 'Active',
    joined: '2023-10-25',
  },
  {
    id: 11,
    name: 'Sophia Miller',
    email: 'sophia.m@example.com',
    role: 'Viewer',
    status: 'Active',
    joined: '2023-11-08',
  },
  {
    id: 12,
    name: 'James Anderson',
    email: 'j.anderson@example.com',
    role: 'Editor',
    status: 'Inactive',
    joined: '2023-12-01',
  },
];

export const tableColumns: DataTablesColumn[] = [
  { title: 'ID', data: 'id' },
  { title: 'Name', data: 'name' },
  { title: 'Email', data: 'email' },
  { title: 'Role', data: 'role' },
  { title: 'Status', data: 'status' },
  { title: 'Joined', data: 'joined' },
];