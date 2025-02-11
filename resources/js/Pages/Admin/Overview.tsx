import { BsCart, BsCash, BsPeopleFill } from 'react-icons/bs';
import '../../../css/Admin/Overview.css';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

export default function Sales() {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [ProductAnalysis, SetAnalysis] = useState<any>();
    const [Overview, SetOverview] = useState<any>();
    const [Label, SetLabel] = useState<any>();
    const [Stats, SetStats] = useState<any>();

    const data = {
        labels: Stats ? Stats : [],
        datasets: [{
           label: 'Number Of Profit (RM/Month)',
           data: Label ? Label : [],
           backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
           ],
           borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
           ],
           borderWidth: 1
        }]
     };
  
     const options = {
        maintainAspectRatio: false,
        scales: {
           y: {
              beginAtZero: true
           }
        }
     };

     useEffect(() => {
        axios.get('/Admin/Profit').then((res) => {
            if(res.status == 200){
                SetAnalysis(res.data)
            }
        })

        axios.get('/Admin/Overview').then((res) => {
            if(res.status == 200){
                SetOverview(res.data)
            }
        })

        axios.get('/Admin/Stats').then((res) => {
            if(res.status == 200){
                let label = [],stats = [];

                for(let i = 0;i < res.data.length;i++){
                    label.push(res.data[i].OrderMonth)
                    stats.push(res.data[i].TotalPrice)
                }

                SetStats(label)
                SetLabel(stats)
            }
        })
     })

    return (
        <div className='Admin_SalesContainer'>
            <Header/>

            <div className='Admin_ProdContentCont'>
                <div className='Admin_SalesNav'>
                    <ul className='Admin_SalesNavList'>
                        <li className='Admin_Selected'>General Sales Report</li>
                        <li onClick={() => window.location.href = route('AdminStock')}>Stock Inventory Items</li>
                        <li onClick={() => window.location.href = route('AdminSales')}>Order Tracking</li>
                        <li onClick={() => window.location.href = route('AdminProduct')}>List Of Product</li>
                    </ul>   
                </div>

                <div className='Admin_OverviewContent'>
                    <div className="Admin_DataCont">
                        <div className="Admin_OverviewProfitCard">
                            <div className="Admin_OverviewIcon">
                                <BsCash/>
                            </div>

                            <div className='Admin_OverviewDescription'>
                                <h2>Jumlah Keuntungan Keseluruhan</h2>
                                <h3>RM {Overview ? Overview.Profit : <>Fetching...</>}.00</h3>
                                <span className='Admin_Positive'>+20% Lebih Banyak berbanding Bulan Lepas</span>
                            </div>
                        </div>
                        <div className="Admin_OverviewProfitCard">
                            <div className="Admin_OverviewIcon">
                                <BsPeopleFill/>
                            </div>

                            <div className='Admin_OverviewDescription'>
                                <h2>Jumlah Pelanggan Keseluruhan</h2>
                                <h3>{Overview ? Overview.Customers : <>Fetching...</>} Orang</h3>
                                <span className='Admin_Positive'>+5% Lebih Ramai Berbanding Bulan Lepas</span>
                            </div>
                        </div>
                        <div className="Admin_OverviewProfitCard">
                            <div className="Admin_OverviewIcon">
                                <BsCart/>
                            </div>

                            <div className='Admin_OverviewDescription'>
                                <h2>Jumlah Pesanan Keseluruhan</h2>
                                <h3>{Overview ? Overview.Order : <>Fetching...</>} Pesanan</h3>
                                <span className='Admin_Negative'>-2% Kurang Berbanding Semalam</span>
                            </div>
                        </div>
                    </div>
                    <div className="Admin_OverviewReport">
                        <div className="Admin_OverviewContainerChart">
                            <div className="Admin_OverviewPopularHeader">
                                <h2>Jumlah Keuntungan Kasar (Per Bulan)</h2>
                            </div>
                            <div className="Admin_OverviewChart">
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                        <div className="Admin_OverviewPopular">
                            <div className="Admin_OverviewPopularHeader">
                                <h2>Menu Kegemaran Pelanggan</h2>
                                <span>Rekod Selepas 3 Hari</span>
                            </div>
                            <div className='Admin_OverviewProductAnalysis'>
                                {
                                    ProductAnalysis ? 
                                    ProductAnalysis.map((value:any,index:any) => {
                                        return (
                                            <>
                                                <div className="Admin_OverviewListHolder">
                                                    <div className="Admin_OverviewListContainer">
                                                        <div className="Admin_OverviewImageContainer">
                                                            <img src={value.ProductImage}/>
                                                        </div>
                                                        <div className="Admin_OverviewListDescription">
                                                            <h2>{value.ProductName}</h2>
                                                            <h3>Ordered <b>{value.Count}</b> times</h3>
                                                            <h3>Profit : RM {value.Profit}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="Admin_OverviewRanking">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    : <div>Fetching....</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
