import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'storageAccount',
    headerName: 'Storage Account',
    width: 150,
    editable: true,
  },
  {
    field: 'version',
    headerName: 'Version',
    width: 150,
    editable: true,
  },
  {
    field: 'accessKey',
    headerName: 'Access Key',
    width: 160,
    editable: true,
  },
  {
    field: 'bucketCount',
    headerName: 'Bucket count',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'sizeGB',
    headerName: 'Size (GB)',
    sortable: false,
    width: 100,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 100,
    editable: true,
  }
];

const rows = [
  { id: 1, version: 'Vault v2', storageAccount: '01_alpha_', bucketCount: 0,sizeGB: 0.00,accessKey:'(multiple)' },
  { id: 2, version: 'Vault v2', storageAccount: 'Acc1Nov16', bucketCount: 2,sizeGB: 3.54 },
  { id: 3, version: 'Vault v2', storageAccount: 'account002', bucketCount: 1,sizeGB: 0.00 },
  { id: 4, version: 'Vault v2', storageAccount: 'AccountLuke_356', bucketCount: 0,sizeGB: 0.00},
  { id: 5, version: 'Vault v2', storageAccount: 'apptest', bucketCount: 1,sizeGB: 0.00 },
  { id: 6, version: 'Vault v2', storageAccount: 'CustomerTest', bucketCount: 1,sizeGB: 1.02,accessKey:'(multiple)' }
];

export default function VaultTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
