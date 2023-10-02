import Marquee from "react-fast-marquee";
const Marqueeee = () => {
    return (
        <div className="my-5 flex justify-center items-center">
            <button className="bg-red-500 px-4 inline py-2 rounded-md text-white ">Latest</button>
            <Marquee pauseOnHover={true} speed={80}>
                I can be a React component, multiple React components, or just some text. Match Highlights: Germany vs Spain — as it happened   !   <b className="ml-10">Match Highlights:</b> Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Marqueeee;