import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from './../../Layout/AuthProvider/AuthProvider';


const Register = () => {
    let { createUser } = useContext(AuthContext)
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        let form = new FormData(e.currentTarget)
        // let email = e.target.email.value;
        // let password = e.target.password.value;
        let name = form.get('name');
        let email = form.get('email');
        let password = form.get('password');
        console.log(name, email, password);

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
            })

    }
    return (
        <div>
            <Header></Header>
            <div className='w-1/3 mt-20 mx-auto'>
                <p className="text-center text-3xl font-bold my-10">Register Now</p>
                <form onSubmit={handleRegister}>
                    <div>
                        <p className="text-left text-lg font-semibold">User Name</p>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="text"
                            name="name"
                            placeholder="Type your Name here"
                        />
                    </div>
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
                        Register</button>
                </form>
                <p className="my-5">Already have an Account? <Link className='text-blue-500 font-semibold' to='/login'>Login now</Link></p>
            </div>
        </div>
    );
};

export default Register;