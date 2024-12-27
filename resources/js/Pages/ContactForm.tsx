import "../../css/Dashboard.css";
import "../../css/ContactForm.css";

export default function ContactForm() {
    return (
        <div className="ContFull">
            <div className="HeaderTemplate">
                <img className="LogoComp" src="../assets/logo.jpg" />

                <ul className="ListNavbar">
                    <li>
                        <a href="/AboutUs">About Us</a>
                    </li>
                    <li className="Selected">
                        <a href="/ContactForm">Contact Form</a>
                    </li>
                    <li>
                        <a href="/Menu">Menu</a>
                    </li>
                    <li>
                        <a href="/OrderTracking">Order Tracking</a>
                    </li>
                    <li>
                        <a href="/LoginPage">Login</a>
                    </li>
                </ul>
            </div>

            <div className="Content">
                {/** Add Content Here*/}
                <div className="container">
                    {/* Form Section */}
                    <div className="form-container">
                        <h1>Contact us</h1>
                        <p>Let us know if you need help</p>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <label htmlFor="first-name">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="last-name">Last name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your question or message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    {/* Image Section */}
                    <div className="image-container">
                        <img src="../assets/image4.png" alt="Dessert" />
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
