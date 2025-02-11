import '../../../css/Admin/Sales.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import { BsCheck, BsFilter, BsPencil, BsSearch, BsTrash, BsX } from 'react-icons/bs';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';

export default function Sales() {
    const columnHelper = createColumnHelper();
    const [tableData, setTableData] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });

    const columns:any= useMemo(
        () => [
            columnHelper.accessor('CustomerID', {
                header: 'CustomerID',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('ListItem', {
                header: 'ListItem',
                cell: (info: any) => {
                    const items = info.getValue().split(',').map((item:any, index:any) => (
                        <React.Fragment key={index}>
                            {item}
                            {index < info.getValue().split(',').length - 1 && <br />} {/* Add line break between items */}
                        </React.Fragment>
                    ));
                    return <div>{items}</div>;
                },
            }),
            columnHelper.accessor('Quantity', {
                header: 'Quantity',
                cell: (info: any) => {
                    const items = info.getValue().split(',').map((item:any, index:any) => (
                        <React.Fragment key={index}>
                            {item}
                            {index < info.getValue().split(',').length - 1 && <br />} {/* Add line break between items */}
                        </React.Fragment>
                    ));
                    return <div>{items}</div>;
                },
            }),
            columnHelper.accessor('Email', {
                header: 'Email',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Price', {
                header: 'Price',
                cell: (info: any) => {
                    const items = info.getValue().split(',').map((item:any, index:any) => (
                        <React.Fragment key={index}>
                            {"RM " + item}
                            {index < info.getValue().split(',').length - 1 && <br />} {/* Add line break between items */}
                        </React.Fragment>
                    ));
                    return <div>{items}</div>;
                },
            }),            
            columnHelper.accessor('Total', {
                header: 'Total',
                cell: info => "RM " + info.getValue(),
            }),
            columnHelper.accessor('Date', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Status', {
                header: 'Order Status',
                cell: info => {
                    return (
                        <div className={info.getValue()}>
                            {info.getValue()}
                        </div>
                    )
                },
            }),
            columnHelper.accessor('Action', {
                header: 'Action',
                cell: (info:any) => {
                    return (
                        <div className="Admin_IconHolder">
                            {info.row.original.Status == "Failed" ? <BsX onClick={() => UpdateSuccess(info.row.original.CustomerID)}/> : <BsCheck onClick={() => FailedSuccess(info.row.original.CustomerID)}/>}
                            <BsTrash onClick={()=> handleDelete(info.getValue())}/>
                        </div>
                    )
                },
            }),
        ],
        []
    );

    const FailedSuccess = (ids:any) => {
        const data = new FormData();
        data.append('CustomerID',ids);
        axios.post('/Admin/FailedSales',data).then((res) => {
            axios.get('/Admin/Sales').then((res) => {
                if (res.status === 200) {
                    setTableData(res.data);
                }
            });

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
        })
    }

    const UpdateSuccess = (ids:any) => {
        const data = new FormData();
        data.append('CustomerID',ids);
        axios.post('/Admin/SuccessSales',data).then((res) => {
            axios.get('/Admin/Sales').then((res) => {
                if (res.status === 200) {
                    setTableData(res.data);
                }
            });

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
        })
    }

    useEffect(() => {
        axios.get('/Admin/Sales').then((res) => {
            if (res.status === 200) {
                setTableData(res.data);
            }
        });
    }, []);

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        pageCount: Math.ceil(tableData.length / pagination.pageSize),
        state: { 
            pagination: pagination
        },
        getPaginationRowModel: getPaginationRowModel(), 
        onPaginationChange: setPagination
    });
 
    const handleDelete = (ids:any) => {
        const data = new FormData();
        data.append('CustomerID',ids);
        axios.post('/Admin/DeleteSales',data).then((res) => {
            axios.get('/Admin/Sales').then((res) => {
                if (res.status === 200) {
                    setTableData(res.data);
                }
            });

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
        })
    }

    return (
        <div className='Admin_SalesContainer'>
            <Header/>

            <div className='Admin_ProdContentCont'>
                <div className='Admin_SalesNav'>
                    <ul className='Admin_SalesNavList'>
                        <li onClick={() => window.location.href = route('AdminOverview')}>General Sales Report</li>
                        <li onClick={() => window.location.href = route('AdminStock')}>Stock Inventory Items</li>
                        <li className='Admin_Selected'>Order Tracking</li>
                        <li onClick={() => window.location.href = route('AdminProduct')}>List Of Product</li>
                    </ul>   
                </div>

                <div className='Admin_SalesContent'>
                    <div className="Admin_SalesButtonController">
                        <div className="Admin_ProductTitle">
                            <h2>Find Customer Order</h2>
                            <h4>Product has been sent? Track Customer Order Here </h4>
                        </div>
                        <div className='Admin_ProductController'>
                            <div className='Admin_ProductSearchCont'>
                                <BsSearch />
                                <input type='text' placeholder='Search Customer Order' />
                            </div>
                            <div className="Admin_ProductButtonController">
                                <div className='Admin_ProductButton'>
                                    <BsFilter />
                                    <button>Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Admin_SalesTableCont'>
                        <table className='Admin_TableSales'>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup : any) => {
                                return (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header : any) => ( // map over the headerGroup headers array
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.id}
                                    </th>
                                    ))}
                                </tr>
                                )
                            })}
                        </thead>
                            <tbody>
                            {table.getRowModel().rows.map((row : any) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell : any) => {
                                        const cellValue = cell.getValue();
                                        return (
                                            <td key={cell.id}>
                                                {Array.isArray(cellValue) 
                                                    ? cellValue.map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            {item}
                                                            {index < cellValue.length - 1 && <br />} {/* Add line break between items */}
                                                        </React.Fragment>
                                                    ))
                                                    : <div>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                                                }
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className='Admin_Pagination'>
                                <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                                    {'<<'}
                                </button>
                                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                    {'<'}
                                </button>
                                <span> 
                                    Page{' '} 
                                    <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong> 
                                </span>
                                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                    {'>'}
                                </button>
                                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                                    {'>>'}
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
