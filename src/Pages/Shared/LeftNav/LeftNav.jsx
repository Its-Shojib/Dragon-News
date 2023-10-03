import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">All Categories</h2>
            <div className="space-y-3">
                {
                    categories.map(category => <NavLink 
                        className="text-lg font-semibold block border p-2"
                        key={category.id}
                        to={`/category/${category.id}`}>
                        {category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;