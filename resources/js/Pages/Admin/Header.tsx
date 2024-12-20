import axios from "axios";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import $ from 'jquery';

export default function Header() {
    const ProductContent = (data? :any) => {
        return (
            <>
                <div className="Admin_ProductForm">
                    <div className="Admin_FormContainer">
                        <h2>Enter Email</h2>
                        <input type='email' id="Admin_Email"/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Password</h2>
                        <input type='text' id="Admin_Password"/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Confirm Password</h2>
                        <input type='text' id="Admin_RePassword"/>
                    </div>
                </div>
            </>
        )
    }

    const handleLogout = () => {
        axios.get('/api/Logout').then((res) => {
            if(res.status === 200){
                window.location.href = route('LoginPage');
                
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
        })
    }

    const ProductAlert = () => {
        Swal.fire({
            title: "Change Password",
            html: ReactDOMServer.renderToString(<ProductContent />),
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Add Current Item to Product',
            customClass: {
                confirmButton: 'Admin_ConfirmButton',
            },
            preConfirm: () => {
                if ($('#Admin_Password').val() != $('#Admin_RePassword').val()) {
                    Swal.showValidationMessage('Password Must be the same');
                    return false;  // Prevents Swal from closing
                } else {
                    return;
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $('.Admin_ConfirmButton').attr('disabled', 'true');
                const data = new FormData();
                data.append('UserEmail', $('#Admin_Email').val() as string);
                data.append('UserPass', $('#Admin_Password').val() as string);

                axios.post('/api/Admin/ChangePass',data).then((res) => {
                    if(res.status === 200){
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
                })
            }
        });
    };
    
    return (
        <>
            <div className='Admin_Navbar'>
                <div className='Admin_NavTitle'>
                    Welcome Mangkuk, to Buko Enterprise
                </div>

                <div className='Admin_ButtonNav'>
                    <button onClick={() => ProductAlert()}>Change Password</button>
                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </>
    )
}