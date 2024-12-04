import '../../css/Template.css'

export default function Dashboard() {
    return (
        <div className='ContFull'>
           <div className='HeaderTemplate'>
                <img className="LogoComp" src='../assets/logo.jpg'/>

                <ul className='ListNavbar'>
                    <li className='Selected'>About Us</li>
                    <li>Contact Form</li>
                    <li>Menu</li>
                    <li>Order Tracking</li>
                </ul>
           </div>

           <div className='Content'>
            {/** Add Content Here*/}
           </div>

           <div className='FooterTemplate'>
                <div className='BukoCopyright'>
                    Buko Ori Phillipines <br/>
                    @ Copyright Buko Enterprise 2024
                </div>
                <div className='FooterNavbar'>
                    <ul className='FooterListNavbar'>
                        <li>About Us</li>
                        <li>Contact Form</li>
                        <li>Menu</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div className="ContactNo">
                    Tel : +608 264 5000 <br/>
                    Fax : +608 264 5016 <br/>
                </div>

                <div className='Address'>
                    Universiti Teknologi MARA (UiTM), Cawangan Melaka Kampus Jasin, 77300 Merlimau, Melaka MALAYSIA.
                </div>
           </div>
        </div>
    );
}
