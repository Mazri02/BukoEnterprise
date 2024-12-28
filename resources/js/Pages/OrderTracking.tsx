import "../../css/Dashboard.css";
import "../../css/OrderTracking.css";

import React, { useEffect, useMemo, useState } from "react";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { BsFilter, BsSearch } from "react-icons/bs";
import axios from "axios";

interface OrderData {
    CustomerID: number;
    Action: number;
    ListItem: string;
    Price: string;
    Quantity: string;
    Total: number;
    Email: string;
    Date: string;
    Status: string;
}

export default function OrderTracking() {
    const columnHelper = createColumnHelper<OrderData>();
    const [tableData, setTableData] = useState<OrderData[]>([]);
    const [filteredData, setFilteredData] = useState<OrderData[]>([]);
    const [searchCustomerId, setSearchCustomerId] = useState("");
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });
    const [hasSearched, setHasSearched] = useState(false);

    const columns: any = useMemo(
        () => [
            columnHelper.accessor("CustomerID", {
                header: "CustomerID",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("ListItem", {
                header: "ListItem",
                cell: (info: any) => {
                    const items = info
                        .getValue()
                        .split(",")
                        .map((item: any, index: any) => (
                            <React.Fragment key={index}>
                                {item}
                                {index <
                                    info.getValue().split(",").length - 1 && (
                                    <br />
                                )}{" "}
                                {/* Add line break between items */}
                            </React.Fragment>
                        ));
                    return <div>{items}</div>;
                },
            }),
            columnHelper.accessor("Quantity", {
                header: "Quantity",
                cell: (info: any) => {
                    const items = info
                        .getValue()
                        .split(",")
                        .map((item: any, index: any) => (
                            <React.Fragment key={index}>
                                {item}
                                {index <
                                    info.getValue().split(",").length - 1 && (
                                    <br />
                                )}{" "}
                                {/* Add line break between items */}
                            </React.Fragment>
                        ));
                    return <div>{items}</div>;
                },
            }),
            columnHelper.accessor("Email", {
                header: "Email",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("Price", {
                header: "Price",
                cell: (info: any) => {
                    const items = info
                        .getValue()
                        .split(",")
                        .map((item: any, index: any) => (
                            <React.Fragment key={index}>
                                {"RM " + item}
                                {index <
                                    info.getValue().split(",").length - 1 && (
                                    <br />
                                )}{" "}
                                {/* Add line break between items */}
                            </React.Fragment>
                        ));
                    return <div>{items}</div>;
                },
            }),
            columnHelper.accessor("Total", {
                header: "Total",
                cell: (info) => "RM " + info.getValue(),
            }),
            columnHelper.accessor("Date", {
                header: "Date",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("Status", {
                header: "Order Status",
                cell: (info) => {
                    return (
                        <div className={info.getValue()}>{info.getValue()}</div>
                    );
                },
            }),
        ],
        []
    );

    useEffect(() => {
        axios.get<OrderData[]>("/api/Admin/Sales").then((res) => {
            if (res.status === 200) {
                setTableData(res.data);
            }
        });
    }, []);

    const handleSearch = () => {
        if (!searchCustomerId.trim()) {
            alert("Please enter a Customer ID");
            return;
        }

        const filtered = tableData.filter(
            (item) => item.CustomerID.toString() === searchCustomerId.trim()
        );
        setFilteredData(filtered);
        setHasSearched(true);

        if (filtered.length === 0) {
            alert("No orders found for this Customer ID");
        }
    };

    const table = useReactTable({
        data: hasSearched ? filteredData : [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        pageCount: Math.ceil(
            (hasSearched ? filteredData : []).length / pagination.pageSize
        ),
        state: {
            pagination: pagination,
        },
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
    });

    return (
        <div className="ContFull">
            <div className="HeaderTemplate">
                <img className="LogoComp" src="../assets/logo.jpg" />

                <ul className="ListNavbar">
                    <li>
                        <a href="/AboutUs">About Us</a>
                    </li>
                    <li>
                        <a href="/ContactForm">Contact Form</a>
                    </li>
                    <li>
                        <a href="/Menu">Menu</a>
                    </li>
                    <li className="Selected">
                        <a href="/OrderTracking">Order Tracking</a>
                    </li>
                    <li>
                        <a href="/LoginPage">Login</a>
                    </li>
                </ul>
            </div>

            <div className="Content">
                {/** Add Content Here*/}
                <div className="OrderTrackingContainer">
                    <div className="OrderTrackingContentCont">
                        <div className="OrderTrackingContent">
                            <div className="OrderTrackingButtonController">
                                <div className="OrderTrackingTitle">
                                    <h2>Find Customer Order</h2>
                                    <h4>
                                        Product has been sent? Track Customer
                                        Order Here{" "}
                                    </h4>
                                </div>
                                <div className="OrderTrackingController">
                                    <div className="OrderTrackingSearchCont">
                                        <BsSearch />
                                        <input
                                            type="text"
                                            placeholder="Enter Customer ID"
                                            value={searchCustomerId}
                                            onChange={(e) =>
                                                setSearchCustomerId(
                                                    e.target.value
                                                )
                                            }
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter") {
                                                    handleSearch();
                                                }
                                            }}
                                        />
                                        <button
                                            onClick={handleSearch}
                                            className="search-button"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {hasSearched && (
                                <div className="OrderTrackingTableCont">
                                    <table className="OrderTracking_Table">
                                        <thead>
                                            {table
                                                .getHeaderGroups()
                                                .map((headerGroup) => (
                                                    <tr key={headerGroup.id}>
                                                        {headerGroup.headers.map(
                                                            (header) => (
                                                                <th
                                                                    key={
                                                                        header.id
                                                                    }
                                                                    colSpan={
                                                                        header.colSpan
                                                                    }
                                                                >
                                                                    {flexRender(
                                                                        header
                                                                            .column
                                                                            .columnDef
                                                                            .header,
                                                                        header.getContext()
                                                                    )}
                                                                </th>
                                                            )
                                                        )}
                                                    </tr>
                                                ))}
                                        </thead>
                                        <tbody>
                                            {table
                                                .getRowModel()
                                                .rows.map((row) => (
                                                    <tr key={row.id}>
                                                        {row
                                                            .getVisibleCells()
                                                            .map((cell) => (
                                                                <td
                                                                    key={
                                                                        cell.id
                                                                    }
                                                                >
                                                                    {flexRender(
                                                                        cell
                                                                            .column
                                                                            .columnDef
                                                                            .cell,
                                                                        cell.getContext()
                                                                    )}
                                                                </td>
                                                            ))}
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="FooterTemplate">
                <div className="BukoCopyright">
                    Buko Ori Phillipines <br />@ Copyright Buko Enterprise 2024
                </div>
                <div className="FooterNavbar">
                    <ul className="FooterListNavbar">
                        <li>
                            <a href="/AboutUs">About Us</a>
                        </li>
                        <li>
                            <a href="/ContactForm">Contact Form</a>
                        </li>
                        <li>
                            <a href="/Menu">Menu</a>
                        </li>
                        <li>
                            <a href="/OrderTracking">Order Tracking</a>
                        </li>
                    </ul>
                </div>
                <div className="ContactNo">
                    Tel : +608 264 5000 <br />
                    Fax : +608 264 5016 <br />
                </div>

                <div className="Address">
                    Universiti Teknologi MARA (UiTM), Cawangan Melaka Kampus
                    Jasin, 77300 Merlimau, Melaka MALAYSIA.
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="Admin_Pagination">
                                        <button
                                            onClick={() =>
                                                table.setPageIndex(0)
                                            }
                                            disabled={
                                                !table.getCanPreviousPage()
                                            }
                                        >
                                            {"<<"}
                                        </button>
                                        <button
                                            onClick={() => table.previousPage()}
                                            disabled={
                                                !table.getCanPreviousPage()
                                            }
                                        >
                                            {"<"}
                                        </button>
                                        <span>
                                            Page{" "}
                                            <strong>
                                                {table.getState().pagination
                                                    .pageIndex + 1}{" "}
                                                of {table.getPageCount()}
                                            </strong>
                                        </span>
                                        <button
                                            onClick={() => table.nextPage()}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            {">"}
                                        </button>
                                        <button
                                            onClick={() =>
                                                table.setPageIndex(
                                                    table.getPageCount() - 1
                                                )
                                            }
                                            disabled={!table.getCanNextPage()}
                                        >
                                            {">>"}
                                        </button>
                                    </div> */
}
