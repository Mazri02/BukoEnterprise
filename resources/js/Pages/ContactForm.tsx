import "../../css/Dashboard.css";
import "../../css/ContactForm.css";
import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {
    const [language, setLanguage] = useState("en"); // State for language
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
    });
    const [popupMessage, setPopupMessage] = useState("");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "ms" : "en"));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("/Feedback", formData);
            setPopupMessage("Feedback sent successfully!");
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                message: "",
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                // If error is an Axios error, extract message safely
                setPopupMessage(
                    error.response?.data?.message ||
                        error.message ||
                        "Failed to send feedback. Try again."
                );
            } else if (error instanceof Error) {
                // Handle generic JS errors
                setPopupMessage(error.message);
            } else {
                // Fallback for unknown errors
                setPopupMessage("An unexpected error occurred.");
            }
        }
    };

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
                    <li className="Selected">
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
                <div className="container">
                    {/* Form Section */}
                    <div className="form-container">
                        <h1>
                            {language === "en" ? "Contact Us" : "Hubungi Kami"}
                        </h1>
                        <p>
                            {language === "en"
                                ? "Let us know if you need help"
                                : "Beritahu kami jika anda memerlukan bantuan"}
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <label htmlFor="firstName">
                                        {language === "en"
                                            ? "First Name"
                                            : "Nama Pertama"}
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        placeholder={
                                            language === "en"
                                                ? "Enter your first name"
                                                : "Masukkan nama pertama anda"
                                        }
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastName">
                                        {language === "en"
                                            ? "Last Name"
                                            : "Nama Akhir"}
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        placeholder={
                                            language === "en"
                                                ? "Enter your last name"
                                                : "Masukkan nama akhir anda"
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">
                                    {language === "en"
                                        ? "Email Address"
                                        : "Alamat Emel"}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={
                                        language === "en"
                                            ? "Enter your email address"
                                            : "Masukkan alamat emel anda"
                                    }
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="message">
                                    {language === "en"
                                        ? "Your Message"
                                        : "Mesej Anda"}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={
                                        language === "en"
                                            ? "Enter your question or message"
                                            : "Masukkan soalan atau mesej anda"
                                    }
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">
                                {language === "en" ? "Submit" : "Hantar"}
                            </button>
                        </form>
                        {popupMessage && (
                            <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
                                {popupMessage}
                            </div>
                        )}
                    </div>
                    {/* Image Section */}
                    <div className="image-container">
                        <img src="../assets/image4.png" alt="Dessert" />
                    </div>
                </div>
            </div>

            <div className="FooterTemplate">
                <div className="BukoCopyright">
                    Buko Ori Phillipines <br />@ Copyright Buko Enterprise{" "}
                    {new Date().getFullYear()}
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
