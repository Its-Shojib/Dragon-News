
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import Qzone1 from './../../../assets/qZone1.png'
import Qzone2 from './../../../assets/qZone2.png'
import Qzone3 from './../../../assets/qZone3.png'
const RightNav = () => {
    return (
        <div className='space-y-5'>
            <div className='space-y-3'>
                <h2 className='text-2xl font-semibold'>Login With:</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='space-y-3'>
                <h2 className='text-2xl font-semibold'>Find Us On:</h2>
                <button className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn btn-outline w-full">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="btn btn-outline w-full">
                    <FaInstagram></FaInstagram>
                    Instagram
                </button>
            </div>
            <div  className='space-y-3'>
                <h2 className='text-2xl font-semibold'>Q-Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />

            </div>
        </div>
    );
};

export default RightNav;