import "../../css/Dashboard.css";

export default function AboutUs() {
    return (
        <div className="ContFull">
            <div className="HeaderTemplate">
                <img className="LogoComp" src="../assets/logo.jpg" />

                <ul className="ListNavbar">
                    <li className="Selected">
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
                    <li>
                        <a href="/LoginPage">Login</a>
                    </li>
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
                            <span className="light">TENTANG</span>
                        </h1>
                        <h1>
                            <span className="bold">BUKO ORI PHILIPPINES</span>
                        </h1>
                    </div>

                    <div className="desc">
                        <h2>
                            <span className="light">SIAPAKAH</span>
                            <span className="bold"> KAMI</span>
                        </h2>
                        <p>DND Buko Enterprise</p>

                        <h2>
                            <span className="light">SIAPA</span>
                            <span className="bold"> KAMI</span>
                        </h2>
                        <p>
                            DND Buko Enterprise adalah sebuah Perusahaan Makanan
                            & Minuman yang terkenal dengan hidangan uniknya yang
                            bernama Buko. Hidangan ini dianggap sebagai salah
                            satu makanan istimewa utama di Filipina.
                        </p>

                        <h2>
                            <span className="light">APA</span>
                            <span className="bold"> MATLAMAT KAMI</span>
                        </h2>
                        <p>
                            Di Buko Ori Filipina, matlamat kami adalah untuk
                            merayakan dan berkongsi intipati kesegaran dan rasa
                            Filipina. Buko, kelapa muda, melambangkan komitmen
                            kami untuk menyediakan hidangan kulinari yang semula
                            jadi, menyegarkan, dan serba boleh. Dituai dari
                            kawasan pesisir yang subur di Filipina, buko kami
                            adalah bukti warisan kulinari yang kaya dari tanah
                            kami.
                        </p>
                        <br></br>
                        <p>
                            Kami berhasrat untuk membawa rasa asli buko Filipina
                            ke setiap hidangan dan minuman yang kami tawarkan.
                            Sama ada airnya yang menyegarkan, isinya yang lembut
                            seperti jeli, atau sentuhan tropikal yang
                            diberikannya kepada resipi, tumpuan kami adalah
                            untuk menyampaikan pengalaman yang mencerminkan
                            semangat keramahan dan inovasi dalam masakan
                            Filipina.
                        </p>
                        <br></br>
                        <p>
                            Bersama-sama kami dalam menikmati kesegaran dan
                            menerokai kemungkinan yang tidak berkesudahan dengan
                            buko – khazanah sebenar Filipina.
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
                            <span className="light"> OUR </span>
                            <span className="bold"> STORE </span>
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
