import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-screen-xl font-poppins mx-auto px-4 my-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;