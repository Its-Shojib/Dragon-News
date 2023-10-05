import { Link, NavLink } from "react-router-dom";
import profile from './../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from './../../../Layout/AuthProvider/AuthProvider';

const Header = () => {
    let { user, Logout } = useContext(AuthContext);

    let logoutUser = () => {
        Logout()
            .then()
            .catch()
    }
    let NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="my-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile} />
                        </div>
                    </label>
                    {
                        user ? <button onClick={logoutUser} className="bg-red-500 text-white px-3 py-2 rounded-lg">Logout</button>
                            :
                            <Link to='/login'><button className="bg-green-500 text-white px-3 py-2 rounded-lg">Login</button></Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;