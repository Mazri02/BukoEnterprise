import "../../css/Dashboard.css";
import "../../css/OrderTracking.css";

export default function ContactForm() {
    return (
        <div className="ContFull">
            <div className="HeaderTemplate">
                <img className="LogoComp" src="../assets/logo.jpg" />

                <ul className="ListNavbar">
                    <li>About Us</li>
                    <li>Contact Form</li>
                    <li>Menu</li>
                    <li className="Selected">Order Tracking</li>
                </ul>
            </div>

            <div className="Content">
                {/** Add Content Here*/}
                <div className="order-table-container">
                    <h1>Find My Order</h1>
                    <div className="search-filter-container">
                        <input
                            type="text"
                            placeholder="Insert Your OrderID"
                            className="search-input"
                        />
                        <button className="filter-button">Filter</button>
                    </div>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>OrderID</th>
                                <th>Receipt</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Date</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>
                                        {order.receipt.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                    </td>
                                    <td>
                                        {order.prices.map((price, index) => (
                                            <p key={index}>{price}</p>
                                        ))}
                                    </td>
                                    <td>{order.total}</td>
                                    <td>{order.date}</td>
                                    <td>
                                        <span
                                            className={`status ${order.status.toLowerCase()}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="FooterTemplate">
                <div className="BukoCopyright">
                    Buko Ori Phillipines <br />@ Copyright Buko Enterprise 2024
                </div>
                <div className="FooterNavbar">
                    <ul className="FooterListNavbar">
                        <li>About Us</li>
                        <li>Contact Form</li>
                        <li>Menu</li>
                        <li>Order Tracking</li>
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

interface Order {
    id: string;
    receipt: string[];
    prices: string[];
    total: string;
    date: string;
    status: "Pending" | "Success" | "Cancel";
}

const orders: Order[] = [
    {
        id: "BP 040",
        receipt: [
            "Buko Pandan x2",
            "Eng's Popcorn x1",
            "Biscoff Mousse Cake x1",
        ],
        prices: ["RM 6.00", "RM 11.00", "RM 12.00"],
        total: "RM 29.00",
        date: "01/11/2024",
        status: "Pending",
    },
    {
        id: "BP 118",
        receipt: [
            "Buko Pandan x2",
            "Eng's Popcorn x1",
            "Biscoff Mousse Cake x1",
        ],
        prices: ["RM 6.00", "RM 11.00", "RM 12.00"],
        total: "RM 29.00",
        date: "26/10/2024",
        status: "Success",
    },
    {
        id: "BP 511",
        receipt: [
            "Buko Pandan x2",
            "Eng's Popcorn x1",
            "Biscoff Mousse Cake x1",
        ],
        prices: ["RM 6.00", "RM 11.00", "RM 12.00"],
        total: "RM 29.00",
        date: "25/10/2024",
        status: "Success",
    },
    {
        id: "BP 991",
        receipt: [
            "Buko Pandan x2",
            "Eng's Popcorn x1",
            "Biscoff Mousse Cake x1",
        ],
        prices: ["RM 6.00", "RM 11.00", "RM 12.00"],
        total: "RM 29.00",
        date: "23/10/2024",
        status: "Success",
    },
    {
        id: "BP 888",
        receipt: [
            "Buko Pandan x2",
            "Eng's Popcorn x1",
            "Biscoff Mousse Cake x1",
        ],
        prices: ["RM 6.00", "RM 11.00", "RM 12.00"],
        total: "RM 29.00",
        date: "20/10/2024",
        status: "Cancel",
    },
];
