
import RightNav from './../Shared/RightNav/RightNav';
import Navbar from './../Shared/Navbar/Navbar';
const NewsDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>

                </div>
                <div className='col-span-1'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>

    );
};

export default NewsDetails;