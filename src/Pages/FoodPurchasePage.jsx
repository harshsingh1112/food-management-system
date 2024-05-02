import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodPurchasePage = () => {
    const { user } = useAuth()
    const purchase = useLoaderData()
    const { foodName, category, price, email, name, quantity, image } = purchase
    console.log(purchase);
    const timeElapsed = Date.now();
    const orderedTime = new Date(timeElapsed).toUTCString();
    console.log(email, user?.email);


    const handlePurchasedFood = (e) => {
        e.preventDefault()

        const form = e.target


        const foodName = form.foodName.value
        const price = parseInt(form.price.value).toFixed(2)
        const quantity = parseInt(form.quantity.value)
        const buyerEmail = user?.email
        const buyerName = user?.displayName
        const category = form.category.value
        const image = form.image.value
        const name = form.name.value
        const email = form.email.value

        const purchasedFood = { email, name, foodName, buyerEmail, buyerName, orderedTime, image, category, quantity, price, };
        console.log(purchasedFood);
        console.log(email, buyerName);

        // if (buyerEmail === email) {
        //     Swal.fire(
        //         'You can not buy your own added product',
        //         'failure'
        //     )
        //     return
        // }


        fetch("https://assignment-11-server-eight-iota.vercel.app/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchasedFood),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Purchased Confirm',
                        'success'
                    )
                }
            });

    }

    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Food Purchase
                </title>
            </Helmet>

            {
                quantity == 0 ?
                    <div>
                        <h2 className="text-center font-bold text-3xl text-white py-10">Item is not available</h2>
                    </div> :
                    email === user?.email ?
                        <div>
                            <h2 className="text-center font-bold text-3xl text-white py-10">You can not purchase your own added food</h2>
                        </div> :
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                                <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Purchase Food</h2>
                                <form onSubmit={handlePurchasedFood} className="card-body bg-white rounded-lg">
                                    <div className="flex gap-5 items-center">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Food Name</span>
                                            </label>
                                            <input type="text" name="foodName" readOnly placeholder="Food Name" defaultValue={foodName}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Food Photo</span>
                                            </label>
                                            <input type="text" name="image" readOnly placeholder="Food Name" defaultValue={image}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Price</span>
                                            </label>
                                            <input type="number" name="price" readOnly placeholder="Price"
                                                defaultValue={price}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Quantity</span>
                                            </label>
                                            <input type="number" name="quantity" placeholder="Quantity"
                                                defaultValue={1}
                                                min={1} max={quantity}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text  text-black font-medium">Buying Date</span>
                                            </label>
                                            <input type="text" name="orderedTime" readOnly placeholder="Buying Date"
                                                defaultValue={orderedTime}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text  text-black font-medium">Food Category</span>
                                            </label>
                                            <input type="text" name="category" readOnly placeholder="Food Category"
                                                defaultValue={category}
                                                className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text readOnly text-black font-medium">Buyer Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="Added By(Name)" defaultValue={user?.displayName} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text readOnly text-black font-medium">Buyer Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Added By (Name)</span>
                                            </label>
                                            <input type="text" name="name" placeholder="Added By(Name)" defaultValue={name} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                        <div className="form-control flex-1">
                                            <label className="label">
                                                <span className="label-text text-black font-medium">Added By (Email)</span>
                                            </label>
                                            <input type="email" name="email" placeholder="email" defaultValue={email} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-warning">Purchase Food</button>
                                    </div>
                                </form>
                            </div>
                        </div>

            }


        </div>
        // <div className="bg-[#000B33] py-10">
        //     <div className="max-w-3xl lg:mx-auto md:mx-6 mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <img className="rounded-t-lg mx-auto " src={image} alt="" />
        //         <h5 className="mb-2 px-5 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>

        //         <div className="px-5 pt-5 flex flex-col md:flex-row ">
        //             <div className="flex-1">
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>

        //             </div>
        //             <div className="flex-1">
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Origin: </span>{origin} </p>
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
        //             </div>
        //             <div className="flex-1">
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Added By: </span>{name} </p>
        //                 <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>  Email: </span>{email} </p>
        //             </div>
        //         </div>
        //         <p className="mb-3 px-5 -pt-5 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Description: </span>{description} </p>
        //         <Link> <button className='btn flex justify-center mb-5 w-3/4 mx-auto items-center btn-warning' onClick={handlePurchasedFood}  >Order Now</button> </Link>

        //     </div>
        // </div>
    );
};

export default FoodPurchasePage;