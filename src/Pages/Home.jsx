import Marqueeee from './Shared/Marqueeee/Marqueeee';
import Navbar from './Shared/Navbar/Navbar';
import LeftNav from './Shared/LeftNav/LeftNav';
import RightNav from './Shared/RightNav/RightNav';
import Header from './Shared/Header/Header';
import { useLoaderData } from 'react-router-dom';
import News from './Shared/News/News';

const Home = () => {
    let newsItem = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Marqueeee></Marqueeee>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:col-span-2'>
                    <div>
                        {
                            newsItem.map(news => <News
                            key={news.category_id}
                            news={news}
                            ></News>)
                        }
                    </div>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;