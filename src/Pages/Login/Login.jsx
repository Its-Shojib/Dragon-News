
import { RiLockPasswordFill } from 'react-icons/ri';
import Header from '../Shared/Header/Header';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../Layout/AuthProvider/AuthProvider';


const Login = () => {

    let { login } = useContext(AuthContext);
    let location = useLocation();
    let navigate = useNavigate();

    let handleLogin = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget)
        // let email = e.target.email.value;
        // let password = e.target.password.value;
        let email = form.get('email');
        let password = form.get('password');
        console.log(email, password);

        login(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err.message);
            })

    }


    return (
        <div>
            <Header></Header>
            <div className='w-1/3 mx-auto mt-20'>
                <p className="text-center text-3xl font-bold my-10">Login Now</p>
                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type='password'
                            name="password"
                            placeholder="Type your password"
                        />
                    </div>
                    <hr className="my-3" />
                    <button
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Login</button>
                </form>
                <p className="my-5">New to this Site? <Link className='text-blue-500 font-semibold' to='/register'>Register now</Link></p>
            </div>

        </div>
    );
};

export default Login;