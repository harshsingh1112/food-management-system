import { Link } from "react-router-dom";

const Banner = () => {
    

    return (
        <div className=" rounded-2xl">
            <div className="lg:h-[850px] text-white text-center md:h-[510px]  grid h-[212px] bg-contain lg:bg-cover bg-no-repeat bg-[url('/src/assets/banner.jpg')] ">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-60 w-full h-full"></div>
                <div className="col-start-1 flex items-center flex-col justify-center row-start-1 mx-auto">
                    <h2 className="lg:text-5xl md:text-4xl text-lg mb-2 md:mb-6">Embark on a Culinary Voyage at FoodieFleet</h2>
                    <p className="text-sm mb-2 lg:mx-24 md:mb-6 mx-3">An extraordinary culinary journey with diverse global dishes, expert chefs, and warm hospitality. Join us to explore a world of flavors and savor every bite.</p>
                    <Link to='/allFood'><button className="btn btn-warning">Menu</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;