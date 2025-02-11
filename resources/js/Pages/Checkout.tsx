import React, { useEffect, useState } from 'react';
import "../../css/Checkout.css";
import "../../css/Dashboard.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';

export default function Checkout() {
    const [OrderDetails, SetOrderDetails] = useState<{ items: any[]; total: string }>({
        items: [],
        total: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const items: any[] = [];
        let index = 0;

        while (params.has(`items[${index}][name]`)) {
            items.push({
                id: params.get(`items[${index}][id]`),
                name: params.get(`items[${index}][name]`),
                price: params.get(`items[${index}][price]`),
                quantity: params.get(`items[${index}][quantity]`)
            });
            index++;
        }

        const total = params.get('total') || '';

        SetOrderDetails({ items, total });
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            products: OrderDetails.items,
            phone: formData.get('phone'),
            email: formData.get('email'),
            address1: formData.get('address1'),
            address2: formData.get('address2'),
            postcode: formData.get('postcode'),
            city: formData.get('city'),
            paymentType: formData.get('paymentType')
        };

        try {
            const response = await axios.post('/Payment', data);
            if (response.status === 200) {
                Swal.fire('Success', 'Your payment was successful. Please check your email.', 'success').then(() => {
                    window.location.href = '/AboutUs';
                });
            }
        } catch (error) {
            Swal.fire('Error', 'There was an error processing your request', 'error');
        }
    };

    console.log(OrderDetails);

    return (
        <div className="ContFull">
            <div className="checkout-header">
                <button className="back-button" onClick={() => window.history.back()}>&lt; Back</button>    
                <img className="checkout-logo" src="../assets/logo.jpg" alt="Logo" /> 
            </div>
            <div className="checkout-header-2">
                <h1>Secure Checkout</h1>
            </div>
            <div className="checkout-container-full">
                <div className="checkout-container-1">
                    <h1 className="checkout-items-title">Your Items</h1>
                    <table className="checkout-items-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {OrderDetails.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>RM{parseFloat(item.price).toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th>RM{parseFloat(OrderDetails.total).toFixed(2)}</th>
                                <th>{OrderDetails.items.reduce((total, item) => total + parseInt(item.quantity, 10), 0)}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <h1 className="checkout-items-title-2">Enter Your Payment Details</h1>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No:</label>
                        <input type="text" id="phone" name="phone" className="form-control" required placeholder="For example: 0123456789" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" className="form-control" required placeholder="For example: yourname@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address1">Home Address 1:</label>
                        <input type="text" id="address1" name="address1" className="form-control" required placeholder="For example: Name of your building, apartment etc." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address2">Home Address 2:</label>
                        <input type="text" id="address2" name="address2" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postcode">Postcode:</label>
                        <input type="text" id="postcode" name="postcode" className="form-control" required placeholder="For example: 12345" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" className="form-control" required placeholder="For example: Merlimau" />
                    </div>
                    <div className="form-group-2">
                        <h1><b>Payment Type:</b></h1>
                        <div className="form-control-2">
                            <input type="radio" id="card" name="paymentType" value="Card" />
                            <label htmlFor="card">Card</label>
                            <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-1992-2000.png " alt="Card Logo" className="payment-logo" />
                        </div>
                        <div className="form-control-2">
                            <input type="radio" id="onlineBanking" name="paymentType" value="Online Banking" />
                            <label htmlFor="onlineBanking">Online Banking</label>
                            <img src="https://www.ditaselia.my/wp-content/uploads/2020/09/FPX-Logo-600x201.png " alt="Online Banking Logo" className="payment-logo" />
                        </div>
                        <div className="form-control-2">
                            <input type="radio" id="cash" name="paymentType" value="Cash" defaultChecked />
                            <label htmlFor="cash">Cash</label>
                            <img src="https://1.bp.blogspot.com/-hLNUkxaMRdw/W3Tg9dxh8aI/AAAAAAAAJIo/I-77duCH13cFFDhx3n8keFXlorN5DMZeACLcBGAs/s640/10.png " alt="Cash Logo" className="payment-logo" />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Proceed to Payment (RM{parseFloat(OrderDetails.total).toFixed(2)})</button>
                </form>
            </div>
        </div>
    );
}