import '../../../css/Admin/Stock.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import { BsFilter, BsPencil, BsPlus, BsSearch, BsTrash } from 'react-icons/bs';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';
import Swal from 'sweetalert2';
import Header from './Header';

export default function Sales() {
    const columnHelper = createColumnHelper();
    const [tableData, setTableData] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });

    const columns:any = useMemo(
        () => [
            columnHelper.accessor('Ingredient', {
                header: 'Ingredient',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Supplier', {
                header: 'Supplier',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Stock', {
                header: 'Stock',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Price', {
                header: 'Price',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Date', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            columnHelper.accessor('Action', {
                header: 'Action',
                cell: (ids:any) => {
                    return (
                        <div className="Admin_IconHolder">
                            <BsPencil onClick={() => StockEdit(ids.getValue())}/>
                            <BsTrash onClick={() => handleDelete(ids.getValue())}/>
                        </div>
                    );
                },
            }),
        ],
        []
    );

    useEffect(() => {
        axios.get('/api/Admin/Stock').then((res) => {
            if (res.status === 200) {
                setTableData(res.data);
            }
        });
    }, []);

    const table = useReactTable({
        data: tableData,
        columns,
        pageCount: Math.ceil(tableData.length / pagination.pageSize),
        state: { 
            pagination: pagination
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(), 
        onPaginationChange: setPagination
    });

    const StockEdit = (ids:any) => {
        const data = new FormData()
        data.append('StockID',ids)
        axios.post('/api/Admin/SearchStock',data).then((res) => {
            if(res.status === 200){
                Swal.fire({
                    title: "Update Stock " + res.data.StockItem,
                    html : ReactDOMServer.renderToString(<StockContent data={res.data} />),
                    showConfirmButton: true, 
                    showCancelButton: true, 
                    cancelButtonText: 'Cancel',
                    confirmButtonText: 'Update Current Item',
                    customClass: { 
                        confirmButton: 'Admin_ConfirmButton', 
                    },
                }).then((e:any) => {
                    if(e.isConfirmed){
                        const data = new FormData();
                        data.append('StockItem',$('#Admin_StockItem').val() as string)
                        data.append('StockNumber',$('#Admin_StockNumber').val() as string)
                        data.append('StockSupplier',$('#Admin_StockSupplier').val() as string)
                        data.append('StockPrice',("RM" + $('#Admin_StockPrice').val() + "/" + $('#Admin_StockMeasure').val()))
                        data.append('StockDate',$('#Admin_StockDate').val() as string)
                        data.append('StockID', ids)
        
                        axios.post('/api/Admin/EditStock',data).then((res) => {
                            if(res.status === 200){
                                axios.get('/api/Admin/Stock').then((res) => {
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
                            }
                        })
                    }
                })
            }
        })
    }

    const StockContent = (data? :any) => {
        return (
            <>
                <div className="Admin_ProductForm">
                    <div className="Admin_FormContainer">
                        <img className='Admin_ImagePreview'/>
                        <h2>Enter Ingredient Name</h2>
                        <input type='text' id="Admin_StockItem" defaultValue={data.data != undefined ? data.data.StockItem : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Total Stock</h2>
                        <input type='text' id="Admin_StockNumber" defaultValue={data.data != undefined ? data.data.StockNumber : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Ingredient Price per Item</h2>
                        <input type='number' id="Admin_StockPrice" defaultValue={data.data != undefined ? data.data.StockPrice.split("/")[0].split(" ")[1] : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Expiry Date</h2>
                        <input type='date' id="Admin_StockDate" defaultValue={data.data != undefined ? data.data.StockDate : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Select Unit of Measurement</h2>
                        <select id="Admin_StockMeasure" defaultValue={data.data != undefined ? data.data.StockPrice.split("/")[1] : ""}>
                            <option selected hidden>Unit Measurement</option>
                            <option defaultValue="kg">kg</option>
                            <option defaultValue="pkt">pkt</option>
                            <option defaultValue="g">g</option>
                            <option defaultValue="l">l</option>
                            <option defaultValue="ml">ml</option>
                        </select>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Select a Supplier</h2>
                        <select id="Admin_StockSupplier" defaultValue={data.data != undefined ? data.data.StockSupplier : ""}>
                            <option selected hidden>Supplier Shop Name</option>
                            {
                                CurrentSupply.map((val) => {
                                    return (
                                        <><option>{val.ShopName}</option></>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </>
        )
    }

    const handleDelete = (ids : any) => {
        const data = new FormData();
        data.append('StockID',ids);
        axios.post('api/Admin/DeleteStock',data).then((res) => {
            if(res.status === 200){
                axios.get('/api/Admin/Stock').then((res) => {
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
            }
        })
    }

    const StockAlert = () => {
        Swal.fire({
            title: "Add Available Ingredient",
            html : ReactDOMServer.renderToString(<StockContent />),
            showConfirmButton: true, 
            showCancelButton: true, 
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Add Current Item to Product',
            customClass: { 
                confirmButton: 'Admin_ConfirmButton', 
            },
        }).then((e:any) => {
            if(e.isConfirmed){
                const data = new FormData();
                data.append('StockItem',$('#Admin_StockItem').val() as string)
                data.append('StockNumber',$('#Admin_StockNumber').val() as string)
                data.append('StockSupplier',$('#Admin_StockSupplier').val() as string)
                data.append('StockPrice',("RM " + $('#Admin_StockPrice').val() + "/" + $('#Admin_StockMeasure').val()))
                data.append('StockDate',$('#Admin_StockDate').val() as string)

                axios.post('/api/Admin/AddStock',data).then((res) => {
                    if(res.status === 200){
                        axios.get('/api/Admin/Stock').then((res) => {
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
                    }
                })
            }
        })
    }

    const CurrentSupply = [
        { 
            ShopName: 'Ah Hock Enterprise',
            PhoneNumber: '0125239684',
            ItemImage: "https://picsum.photos/seed/picsum/301",
            Address: 'No. 10 Jalan Kalilang 2/10, Taman Industrial Gunung, Jalan Petaling',
        },
        { 
            ShopName: 'Abatu Warehouse',
            PhoneNumber: '0171234567',
            ItemImage: "https://picsum.photos/seed/picsum/303",
            Address: 'No. 23 Jalan Kepong, Taman Sinaran, Kuala Lumpur',
        },
        { 
            ShopName: 'Kedai Underground Klang',
            PhoneNumber: '0199876543',
            ItemImage: "https://picsum.photos/seed/picsum/302",
            Address: 'No. 45 Jalan Bukit, Taman Tasik, Shah Alam',
        },
        { 
            ShopName: 'Meow Restock Berhad',
            PhoneNumber: '0133344556',
            ItemImage: "https://picsum.photos/seed/picsum/304",
            Address: 'No. 8 Jalan Tropika, Taman Bukit, Seremban',
        },
    ];

    return (
        <div className='Admin_SalesContainer'>
            <Header/>

            <div className='Admin_ProdContentCont'>
                <div className='Admin_SalesNav'>
                    <ul className='Admin_SalesNavList'>
                        <li onClick={() => window.location.href = route('AdminOverview')}>General Sales Report</li>
                        <li className='Admin_Selected'>Stock Inventory Items</li>
                        <li onClick={() => window.location.href = route('AdminSales')}>Order Tracking</li>
                        <li onClick={() => window.location.href = route('AdminProduct')}>List Of Product</li>
                    </ul>   
                </div>

                <div className='Admin_SalesContent'>
                    <div className="Admin_SalesButtonController">
                        <div className="Admin_ProductTitle">
                            <h2>Find Stock Ingredient</h2>
                            <h4>Keep Track and Organize your Daily Ingredient</h4>
                        </div>
                        <div className='Admin_ProductController'>
                            <div className='Admin_ProductSearchCont'>
                                <BsSearch />
                                <input type='text' placeholder='Search Inventory' />
                            </div>
                            <div className="Admin_ProductButtonController">
                                <div className='Admin_ProductButton'>
                                    <BsFilter />
                                    <button>Filter</button>
                                </div>
                                <div className='Admin_ProductButton'>
                                    <BsPlus />
                                    <button onClick={() => StockAlert()}>Add Ingredient</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Admin_InventoryCont'>
                        <div className='Admin_SalesTableCont'>
                            <table className='Admin_TableSales'>
                                <thead>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th key={header.id} colSpan={header.colSpan}>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody>
                                    {table.getRowModel().rows.map(row => (
                                        <tr key={row.id}>
                                            {row.getVisibleCells().map((cell:any) => (
                                                <td key={cell.id}>
                                                    {Array.isArray(cell.getValue()) 
                                                        ? cell.getValue().map((item:any, index:any) => (
                                                            <React.Fragment key={index}>
                                                                {item}
                                                                {index < cell.getValue().length - 1 && <br />} {/* Add line break between items */}
                                                            </React.Fragment>
                                                        ))
                                                        : flexRender(cell.column.columnDef.cell, cell.getContext())
                                                    }
                                                </td>
                                            ))}
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
                        <div className='Admin_SupplyCont'>
                            <h2 className='Admin_SupplyContTitle'>Current Supplier</h2>
                            <div className='Admin_InventorySupplier'>
                                {
                                    CurrentSupply.map((value, index) => (
                                        <div className='Admin_InventoryCard' key={index}>
                                            <div className='Admin_SupplyImage'>
                                                <img src={value.ItemImage} alt="Supplier" />
                                            </div>
                                            <div className='Admin_SupplyDescription'>
                                                <h2>{value.ShopName}</h2>
                                                <h3>{value.PhoneNumber}</h3>
                                                <span>{value.Address}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
