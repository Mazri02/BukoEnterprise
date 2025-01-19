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

    const [language, setLanguage] = useState("en"); // State for language

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "ms" : "en"));
    };

    const columns: any = useMemo(
        () => [
            columnHelper.accessor("CustomerID", {
                header: language === "en" ? "CustomerID" : "ID Pelanggan",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("ListItem", {
                header: language === "en" ? "ListItem" : "Senarai Item",
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
                header: language === "en" ? "Quantity" : "Kuantiti",
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
                header: language === "en" ? "Email" : "Emel",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("Price", {
                header: language === "en" ? "Price" : "Harga",
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
                header: language === "en" ? "Total" : "Jumlah",
                cell: (info) => "RM " + info.getValue(),
            }),
            columnHelper.accessor("Date", {
                header: language === "en" ? "Date" : "Tarikh",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("Status", {
                header: language === "en" ? "Order Status" : "Status Pesanan",
                cell: (info) => {
                    return (
                        <div className={info.getValue()}>{info.getValue()}</div>
                    );
                },
            }),
        ],
        [language]
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
            alert(
                language === "en"
                    ? "Please enter a Customer ID"
                    : "Sila masukkan ID Pelanggan"
            );
            return;
        }

        const filtered = tableData.filter(
            (item) => item.CustomerID.toString() === searchCustomerId.trim()
        );
        setFilteredData(filtered);
        setHasSearched(true);

        if (filtered.length === 0) {
            language === "en"
                ? "No orders found for this Customer ID"
                : "Tiada pesanan dijumpai untuk ID Pelanggan ini";
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
                        <a href="/AboutUs">
                            {language === "en" ? "About Us" : "Tentang Kami"}
                        </a>
                    </li>
                    <li>
                        <a href="/ContactForm">
                            {language === "en"
                                ? "Contact Form"
                                : "Borang Hubungi"}
                        </a>
                    </li>
                    <li>
                        <a href="/Menu">
                            {language === "en" ? "Menu" : "Menu"}
                        </a>
                    </li>
                    <li className="Selected">
                        <a href="/OrderTracking">
                            {language === "en"
                                ? "Order Tracking"
                                : "Jejak Pesanan"}
                        </a>
                    </li>
                    <li>
                        <a href="/LoginPage">
                            {language === "en" ? "Login" : "Log Masuk"}
                        </a>
                    </li>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "20px",
                        }}
                    >
                        <span style={{ marginRight: "10px" }}>MY</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={language === "ms"}
                                onChange={toggleLanguage}
                            />
                            <span className="slider"></span>
                        </label>
                        <span style={{ marginLeft: "10px" }}>EN</span>
                    </div>
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
                                            placeholder={
                                                language === "en"
                                                    ? "Enter Customer ID"
                                                    : "Masukkan ID Pelanggan"
                                            }
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
                            <a href="/AboutUs">
                                {language === "en"
                                    ? "About Us"
                                    : "Tentang Kami"}
                            </a>
                        </li>
                        <li>
                            <a href="/ContactForm">
                                {language === "en"
                                    ? "Contact Form"
                                    : "Borang Hubungi"}
                            </a>
                        </li>
                        <li>
                            <a href="/Menu">
                                {language === "en" ? "Menu" : "Menu"}
                            </a>
                        </li>
                        <li>
                            <a href="/OrderTracking">
                                {language === "en"
                                    ? "Order Tracking"
                                    : "Jejak Pesanan"}
                            </a>
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
