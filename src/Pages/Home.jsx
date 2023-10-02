
import Marqueeee from './Shared/Marqueeee/Marqueeee';
import Navbar from './Shared/Navbar/Navbar';
import LeftNav from './Shared/LeftNav/LeftNav';
import RightNav from './Shared/RightNav/RightNav';
import Header from './Shared/Header/Header';




const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Marqueeee></Marqueeee>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:col-span-2 border'>
                    <h3 className='text-4xl'> News Comming Soon</h3>
                </div>
                <div className='border'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;