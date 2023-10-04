
import { RiLockPasswordFill } from 'react-icons/ri';
import Header from '../Shared/Header/Header';
import { AiOutlineMail } from 'react-icons/ai';


const Login = () => {

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(email, password);
    }


    return (
        <div>
            <Header></Header>
            <div className='w-1/2 mx-auto'>
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
            </div>

        </div>
    );
};

export default Login;