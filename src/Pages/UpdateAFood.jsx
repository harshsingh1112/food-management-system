import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateAFood = () => {
    const { user } = useAuth()
    const { id } = useParams()
    console.log(id);
    const updatedData = useLoaderData()
    const { foodName, image, category, quantity, origin, price, description } = updatedData




    const handleUpdateFood = (e) => {
        e.preventDefault()
        const form = e.target
        const email = user?.email
        const name = user?.displayName
        const foodName = form.foodName.value
        const image = form.image.value
        const category = form.category.value
        const quantity = parseInt(form.quantity.value)
        const origin = form.origin.value
        const price = parseInt(form.price.value).toFixed(2)
        const description = form.description.value

        const updatedFood = { email, name, foodName, image, category, quantity, origin, price, description };
        console.log(updatedFood);
        

        fetch(`https://assignment-11-server-eight-iota.vercel.app/update/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFood)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'You Food is Updated!',
                        'success'
                    )
                }
            })


        form.reset()
    }
    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Update Food
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Update Food</h2>
                    <form onSubmit={handleUpdateFood} className="card-body bg-white rounded-lg">
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Name</span>
                                </label>
                                <input type="text" name="foodName" placeholder="Food Name"
                                    defaultValue={foodName}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Food Image"
                                    defaultValue={image}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Food Category"
                                    defaultValue={category}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Quantity</span>
                                </label>
                                <input type="number" min={0} name="quantity" placeholder="Quantity"
                                    defaultValue={quantity}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Origin(Country)</span>
                                </label>
                                <input type="text" name="origin" placeholder="Food Origin"
                                    defaultValue={origin}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price"
                                    defaultValue={price}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Name)</span>
                                </label>
                                <input type="text" name="name" placeholder="Added By(Name)" defaultValue={user?.displayName} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Email)</span>
                                </label>
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Description</span>
                                </label>
                                <textarea name="description"
                                    defaultValue={description}
                                    className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" cols="30" rows="2" placeholder="Short description" required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Update Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAFood;