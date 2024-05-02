import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

import Banner from "./Banner";
import TopFood from "./TopFood";
import { useEffect, useState } from "react";
import Chef from "./Chef";
import SimpleMapPage from "./SimpleMapPage";

const Home = () => {
    const allFoods = useLoaderData()
    const [chefs, setChefs] = useState()

    console.log(allFoods);
    const sortedFood = [...allFoods].sort((a, b) => b.sell - a.sell);
    console.log(sortedFood);
    const slicedFood = sortedFood.slice(0, 6)
    console.log(slicedFood);

    useEffect(() => {
        fetch('/chef.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChefs(data)
            })
    }, [])
    console.log(chefs);

    return (
        <div>
            <Helmet>
                <title>
                    FoodieFleet | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <div className=" bg-[#000B33]">
                <div className="max-w-7xl mx-4 pb-4 lg:mx-24">
                    <h2 className="text-3xl font-bold text-center text-white py-20">Top Selling Food</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-16 lg:grid-cols-3 gap-10 ">
                        {
                            slicedFood?.map(allFood => <TopFood
                                key={allFood._id} allFood={allFood}> </TopFood>)
                        }
                    </div>
                    <Link to='allFood' ><button className="btn w-full max-w-md  flex justify-center mx-auto btn-warning">See All</button></Link>
                </div>
                <div className="max-w-7xl mx-4 pb-10 lg:mx-36">
                    <h2 className="text-5xl font-bold text-center mb-5 text-[#FAA916] py-10">Meet Ours Chef</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-10 lg:grid-cols-3 gap-10 ">
                        {
                            chefs?.map(chef => <Chef
                                key={chef.name} chef={chef}> </Chef>)
                        }
                    </div>
                </div>
                <div className="max-w-7xl mx-4 pb-10 lg:mx-36">
                    <h2 className="text-5xl font-bold text-center mb-5 text-[#FAA916] py-10">Our Location</h2>
                </div>
                <SimpleMapPage></SimpleMapPage>
            </div>

        </div>
    );
};

export default Home;