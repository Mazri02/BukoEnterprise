import '../../css/LoginPage.css'
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const CheckCreds = () => {
        const data = new FormData();
        data.append('Username',$('#Admin_Username').val() as string)
        data.append('Userpass',$('#Admin_Password').val() as string)
        axios.post('/api/Login',data).then((res) => {
            if(res.status === 200){
               if(res.data.stats == 200){
                window.location.href = route('AdminOverview');

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
               }
            }
        })
    }

    return (
        <div className='ContFull'>
            <div className='HeaderLogin'>
                <img src='../assets/logo.jpg'/>
            </div>
            <div className="ContainerLogin">
                <div className='ContainerContent'>
                    <h2>Welcome to Buko Enterprise</h2>
                    <h3>Insert Username and Password to Login as Admin</h3>

                    <div className='FormLogin'>
                        <input id="Admin_Username" type='text' placeholder='Username'/>
                        <input id="Admin_Password" type='password' placeholder='Password'/>
                        <button onClick={() => CheckCreds()}>Log in</button>
                    </div>
                </div>
                <div className='FooterLogin'>
                    Having trouble logging in? Try to contact our admin at adminBuko@gmail.com
                </div>
            </div>
        </div>
    );
}
