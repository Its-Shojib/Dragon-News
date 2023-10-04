
import { Link } from 'react-router-dom';
const News = ({ news }) => {

    let { category_id, title, thumbnail_url, image_url, details, img, _id } = news;
    return (
        <div>
            <div className="card">
                <figure><img src={image_url} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {
                        details.length > 200 ? 
                        <p>{details.slice(0,200)}  <Link className='text-blue-500 font-semibold' 
                        to={`/news/${_id}`}>Read more...</Link></p> 
                        :
                        <p>{details}</p>
                    }

                </div>
            </div>

        </div>
    );
};

export default News;