import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { Helmet } from "react-helmet-async";

const SingleFoodCard = () => {
    const singleFood = useLoaderData()
    const { user } = useAuth()
    const { name, email, foodName, image, category, quantity, origin, price, _id, description } = singleFood
    console.log(singleFood);
    const timeElapsed = Date.now();
    const orderedTime = new Date(timeElapsed).toUTCString();
    console.log(orderedTime);
    const orderedBy = user?.email
    const orderedFood = { name, email, foodName, image, category, quantity, origin, price, description, orderedBy, orderedTime }
    console.log(orderedFood);




    const handleOrder = () => {
        fetch("https://assignment-11-server-eight-iota.vercel.app/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderedFood),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // if (user) {
                //     if (data.acknowledged) {
                //         Swal.fire(
                //             'Good job!',
                //             'This Food is Added to your Order List!',
                //             'success'
                //         )
                //         // window.location.reload()
                //     }
                // }
            });
    }
    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Food Details
                </title>
            </Helmet>
            <div className="max-w-3xl lg:mx-auto md:mx-6 mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg mx-auto " src={image} alt="" />
                <h5 className="mb-2 px-5 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>

                <div className="px-5 pt-5 flex flex-col md:flex-row ">
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>

                    </div>
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Origin: </span>{origin} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
                    </div>
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Added By: </span>{name} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>  Email: </span>{email} </p>
                    </div>
                </div>
                <p className="mb-3 px-5 -pt-5 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Description: </span>{description} </p>
                <Link to={`/purchase/${_id}`} > <button className='btn flex justify-center mb-5 w-3/4 mx-auto items-center btn-warning' onClick={handleOrder}  >Order Now</button> </Link>

            </div>
        </div>
    );
};

export default SingleFoodCard;