import '../../css/LoginPage.css'

export default function Dashboard() {
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
                        <input type='text' placeholder='Username'/>
                        <input type='password' placeholder='Password'/>
                        <button>Log in</button>
                    </div>
                </div>
                <div className='FooterLogin'>
                    Having trouble logging in? Try to contact our admin at adminBuko@gmail.com
                </div>
            </div>
        </div>
    );
}
