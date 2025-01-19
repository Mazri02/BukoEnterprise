import React, { useState } from "react";
import "../../css/Dashboard.css";

export default function AboutUs() {
    const [language, setLanguage] = useState("en"); // State for language

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "ms" : "en"));
    };

    return (
        <div className="ContFull">
            <div className="HeaderTemplate">
                <img className="LogoComp" src="../assets/logo.jpg" />

                <ul className="ListNavbar">
                    <li className="Selected">
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
                    <li>
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
                <div className="image-container">
                    <img className="PromoImg" src="../assets/imgpromo.jpg" />
                </div>

                <div className="ContentInside">
                    <div className="titleUs">
                        <h1>
                            <span className="light">
                                {language === "en" ? "ABOUT" : "TENTANG"}
                            </span>
                        </h1>
                        <h1>
                            <span className="bold">
                                {language === "en"
                                    ? "BUKO ORI PHILIPPINES"
                                    : "BUKO ORI PHILIPPINES"}
                            </span>
                        </h1>
                    </div>

                    <div className="desc">
                        <h2>
                            <span className="light">
                                {language === "en" ? "WHO ARE" : "SIAPAKAH"}
                            </span>
                            <span className="bold">
                                {language === "en" ? " WE" : " KAMI"}
                            </span>
                        </h2>
                        <p>DND Buko Enterprise</p>

                        <h2>
                            <span className="light">
                                {language === "en" ? "WHO" : "SIAPA"}
                            </span>
                            <span className="bold">
                                {language === "en" ? " US" : " KAMI"}
                            </span>
                        </h2>
                        <p>
                            {language === "en"
                                ? "DND Buko Enterprise is a Food & Beverage Company known for its unique dish called Buko. This dish is considered one of the main delicacies in the Philippines."
                                : "DND Buko Enterprise adalah sebuah Perusahaan Makanan & Minuman yang terkenal dengan hidangan uniknya yang bernama Buko. Hidangan ini dianggap sebagai salah satu makanan istimewa utama di Filipina."}
                        </p>

                        <h2>
                            <span className="light">
                                {language === "en" ? "WHAT IS" : "APA"}
                            </span>
                            <span className="bold">
                                {language === "en"
                                    ? " OUR GOAL"
                                    : " MATLAMAT KAMI"}
                            </span>
                        </h2>
                        <p>
                            {language === "en"
                                ? "At Buko Ori Philippines, our goal is to celebrate and share the essence of Filipino freshness and flavor. Buko, young coconut, symbolizes our commitment to providing natural, refreshing, and versatile culinary dishes.Harvested from the fertile coastal areas of the Philippines, our buko is a testament to the rich culinary heritage of our land."
                                : "Di Buko Ori Filipina, matlamat kami adalah untuk merayakan dan berkongsi intipati kesegaran dan rasa Filipina. Buko, kelapa muda, melambangkan komitmen kami untuk menyediakan hidangan kulinari yang semulajadi, menyegarkan, dan serba boleh. Dituai dari kawasan pesisir yang subur di Filipina, buko kami adalah bukti warisan kulinari yang kaya dari tanah kami."}
                        </p>
                        <br></br>
                        <p>
                            {language === "en"
                                ? "We aim to bring the authentic taste of Filipino buko to every dish and drink we offer. Whether it's the refreshing water, the soft jelly-like filling, or the tropical touch it gives to recipes, our focus is to deliver an experience that reflects the spirit of hospitality and innovation in Filipino cuisine."
                                : "Kami berhasrat untuk membawa rasa asli buko Filipina ke setiap hidangan dan minuman yang kami tawarkan. Sama ada airnya yang menyegarkan, isinya yang lembut seperti jeli, atau sentuhan tropikal yang diberikannya kepada resipi, tumpuan kami adalah untuk menyampaikan pengalaman yang mencerminkan semangat keramahan dan inovasi dalam masakan Filipina."}
                        </p>
                        <br></br>
                        <p>
                            {language === "en"
                                ? "Join us in enjoying the freshness and exploring the endless possibilities with buko – a true treasure of the Philippines."
                                : "Bersama-sama kami dalam menikmati kesegaran dan menerokai kemungkinan yang tidak berkesudahan dengan buko – khazanah sebenar Filipina."}
                        </p>
                    </div>
                    <div className="PhotoGrid">
                        <img
                            className="DelicacyPhoto"
                            src="../assets/image.png"
                        />
                        <img
                            className="DelicacyPhoto"
                            src="../assets/image1.png"
                        />
                        <img
                            className="DelicacyPhoto"
                            src="../assets/image2.png"
                        />
                    </div>

                    <h2>
                        <div className="titleUs">
                            <span className="light">
                                {language === "en" ? "OUR" : "CAWANGAN"}
                            </span>
                            <span className="bold">
                                {language === "en" ? " STORE" : " KAMI"}
                            </span>
                        </div>
                    </h2>

                    <div className="PhotoGrid">
                        <img className="StorePhoto" src="../assets/store.png" />
                    </div>

                    <div className="StoreAddress">
                        <h3>
                            DND Buko Ori Philippines,
                            <br /> A1B, Jalan IM2/3, Taman Kota Ria, Kuantan,
                            Pahang.
                        </h3>
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
